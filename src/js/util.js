/**
 * Created by yuhk18757 on 2017/2/18.
 */
(function(global){
    //区分代码所处环境--dev|sit|uat|prd
    var environment="dev",config;
    /*
     * Util：工具类方法大对象
     * - 本身是一个类构造方法，接收dom选择器字符串为参数，返回封装后的对象。自身包含许多工具类方法
     *
     * - fn:存储内部调用的方法，fn所包含的属性不建议外部代码直接调用
     *   - factory:包装dom元素，使其具有tap事件
     *
     * - ready:兼容性监听页面就绪，早于window.onload
     *
     * - ajax:类jQuery的ajax方法，支持get/post
     *
     * - getUrlParam:根据传入的name参数获取url上携带的查询参数
     *
     * - osType:获取移动端浏览器运行的系统环境信息
     */
    var _Util=global.Util;
    var Util;

    //配置移动端web页面
    (function (doc, win) {
        //根据750px设计稿适配不同移动设备分辨率
        /*var html = document.querySelector('html');
        var deviceWidth = html.getBoundingClientRect().width;
        html.style.fontSize = deviceWidth / 7.5 + 'px';*/

        //保证兼容性requestAnimationFrame
        win.requestAnimFrame=(function(){
            return win.requestAnimationFrame    ||
                win.webkitRequestAnimationFrame ||
                win.mozRequestAnimationFrame    ||
                win.oRequestAnimationFrame      ||
                win.msRequestAnimationFrame     ||
                function(fn){
                    win.setTimeout(fn,16);
                };
        })();
    })(document, window);

    /*
     * Util本身为一个dom选择器
     * @param {string} selector
     */
    Util=function(selector){
        var elements=document.querySelectorAll(selector);
        if(selector.indexOf("#")==0){
            return Util.fn.factory(elements[0]);
        }else{
            for(var i in elements){
                elements[i]=Util.fn.factory(elements[i]);
            }
            return elements;
        }
    };

    /*
     * - fn:存储内部调用的方法，fn所包含的属性不建议外部代码直接调用
     *   - factory:包装dom元素，使其具有移动端tap事件
     */
    Util.fn=(function(){
        var factory,bindTap,bindShow,screenHeight,scrollFn,init;

        //接收dom元素/回调函数为参数，将回调函数绑定为dom元素的tap事件，防止点透
        bindTap=function(element,callback){
            //element.addEventListener("click",callback);
            var startX,startY;

            //isSubmit标记位来防止tap事件点透
            element.isSubmit=false;
            element.addEventListener("touchstart",function (e) {
                startX=e.changedTouches[0].pageX;
                startY=e.changedTouches[0].pageY;
            }, false);
            element.addEventListener('touchend', function (e) {
                var deltaX=e.changedTouches[0].pageX-startX;
                var deltaY=e.changedTouches[0].pageY - startY;
                if (Math.abs(deltaX)<10 && Math.abs(deltaY)<10) {
                    e.preventDefault();
                    if(!element.isSubmit){
                        element.isSubmit=true;
                        setTimeout(function(){
                            element.isSubmit=false;
                        },300);
                        callback(e);
                    }
                }
            }, false);
        };

        //接收dom元素/回调函数为参数，当元素展现在屏幕上时触发回调方法
        screenHeight=global.screen.availHeight;
        scrollFn=[];
        bindShow=function(element,callback){
            var distance,scrollTop;
            distance=element.getBoundingClientRect().top;
            scrollFn.push(function(e){
                scrollTop=document.body.scrollTop;
                if(scrollTop<=distance && distance<scrollTop+screenHeight){
                    callback(e);
                }
            });
        };

        //初始化scroll事件监听，执行自定义方法栈。300毫秒节流处理。
        init=function(){
            var timer,delay;
            delay=200;
            global.addEventListener("scroll",function(e){
                clearTimeout(timer);
                timer=setTimeout(function(){
                    for(var i in scrollFn){
                        scrollFn[i](e);
                    }
                },delay);
            });
        };
        init();

        /*
         * 包装dom元素，使其具有on事件，可以用来绑定自定义事件
         * @param {object} element
         *
         * - on:接收事件类型字符串/回调函数为参数，为对应的dom元素提供自定义事件支持。事件类型支持"tap"。
         */
        factory=function(element){
            element.on=function(type,callback){
                switch(type){
                    case "tap":
                        bindTap(element,callback);
                        break;
                    case "show":
                        bindShow(element,callback);
                    default:
                        break;
                }
                return element;
            };
            return element;
        };

        return {
            factory:factory
        };
    })();

    /*
     * ready:兼容性监听页面就绪，早于window.onload
     * @param {function} callback
     */
    Util.ready=function(callback){
        //标记页面是否已就绪
        var alreadyrunflag=0;

        if (document.addEventListener){
            document.addEventListener("DOMContentLoaded",function(){
                alreadyrunflag=1;
                callback();
            },false);
        }else if (document.all && !global.opera){
            document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>');
            var contentloadtag=document.getElementById("contentloadtag");
            contentloadtag.onreadystatechange=function(){
                if (this.readyState=="complete"){
                    alreadyrunflag=1;
                    callback();
                }
            }
        }

        global.onload=function(){
            setTimeout(function(){
                if(!alreadyrunflag){
                    callback();
                }
            },0);
        };
    };

    /*
     * - ajax:类jQuery的ajax方法，接受options配置对象为参数。
     *   支持get/post方法
     *   超时时间为10秒，超时后执行error方法
     *
     *   - options(*为可选参数):
     *   {
     *   type:"post"|"get",
     *   url:"",
     *   *contentType:"",
     *   *data:{},
     *   *beforeSend:function(xhr){},
     *   success:function(result){},
     *   *error:function(result){}
     *   }
     */
    Util.ajax=(function(){
        var createXHR,addURLParam,ajax,setup;

        //创建一个兼容各浏览器的XMLHttpRequest对象
        createXHR=function(){
            if(typeof XMLHttpRequest!="undefined"){
                return new XMLHttpRequest();
            }else if(typeof ActiveXObject!="undefined"){
                if(typeof arguments.callee.activeXString!="string"){
                    var versioins=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],i,len;
                    for(i=0,len=versions.length;i<len;i++){
                        try{
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString=versions[i];
                            break;
                        }catch(e){

                        }
                    }
                }
                return new ActiveXObject(arguments.callee.activeXString);
            }
        };

        /*
         * 如果是get请求，将查询数据设置成url查询字符串
         * @param {string} url
         * @param {string} name
         * @param {string} value
         */
        addURLParam=function(url,name,value){
            url+=(url.indexOf("?")==-1 ? "?":"&");
            url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
            return url;
        };

        /*
         * @param {object} options
         */
        ajax=function(options){
            if(options.type==undefined){
                options.type="get";
            }
            if(options.data==undefined){
                options.data={};
            }
            if(options.error==undefined){
                options.error=function(){

                };
            }
            var xhr=createXHR(),result;
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.responseText==""){
                        console.error("没有主响应体responseText");
                        return ;
                    }else{
                        result=JSON.parse(xhr.responseText);
                    }
                    if((xhr.status>=200 && xhr.status<300) || xhr.status==304){
                        if(result.error_no){
                            options.error(result);
                        }else{
                            options.success(result);
                        }
                    }else{
                        options.error(result);
                    }
                    xhr=null;
                }
            };
            if(options.type=="get"){
                for(var i in options.data){
                    options.url=addURLParam(options.url,i,options.data[i]);
                }
            }
            //开启XMLHttpRequest
            xhr.open(options.type,options.url,true);
            //设置XMLHttpRequest的Content-Type
            if(options.contentType!=undefined){
                xhr.setRequestHeader("Content-Type",options.contentType);
            }
            //调用beforeSend
            if(typeof options.beforeSend=="function"){
                options.beforeSend(xhr);
            }
            //设置超时处理
            xhr.timeout=10*1000;
            xhr.ontimeout=function(){
                options.error();
                //setTimeout(options.error,10*1000);
                xhr=null;
            };
            //根据ajax类型来发送不同数据
            if(options.type=="get"){
                xhr.send(null);
            }else if(options.type=="post"){
                if(options.contentType==undefined){
                    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
                }
                var data="";
                for(var i in options.data){
                    data+=encodeURIComponent(i)+"="+encodeURIComponent(options.data[i])+"&";
                }
                data=data.substring(0,data.length-1);
                xhr.send(data);
            }
        };

        /*
         * 柯里化调用ajax，提前设置查询接口必须的参数配置，若是调用openapi则不配置
         * @param {object} options
         */
        setup=function(options){
            ajax(options);
        };

        return setup;
    })();

    /*
     * - getUrlParam:根据传入的name参数获取url上携带的查询参数
     * @param {string} name
     */
    Util.getUrlParam=function(name){
        var reg=new RegExp("(\\?|&)"+name+"=([^&#]*)([&#]|$)");
        var r=document.location.href.match(reg);
        if (r!= null && r!='undefined'){
            return decodeURIComponent(r[2]);
        }
        return "";
    };

    /*
     * - osType:获取移动端浏览器运行的系统环境信息
     */
    Util.osType=function(){
        var u=navigator.userAgent;
        var osType="";
        if(u.indexOf('Android')>-1 || u.indexOf('Linux')>-1){ //安卓手机
            osType="Android";
        }else if(u.indexOf('iPhone')>-1){ //苹果手机
            osType="iOS";
        }else if(u.indexOf('Windows Phone')>-1){ //winphone手机
            osType="winPhone";
        }else{
            osType="others";
        }
        return osType;
    };

    /*
     * 带所有参数跳转，接受跳转后的页面url为参数
     * @param {string} url
     */
    Util.redirectWithUrlParam=function(url){
        var params;
        params=document.location.href.split("?")[1];
        if(url.indexOf("?")<0){
            document.location.href=url+"?"+params;
        }else{
            document.location.href=url+"&"+params;
        }
    };

    //释放对window.Util的控制，返回一个Util实例，以转移引用
    Util.noConflict=function(){
        global.Util=_Util;
        return Util;
    };

    global.Util=Util;
})(this);