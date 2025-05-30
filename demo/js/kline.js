/**
 * Created by yuhk18757 on 2016/11/2.
 */
var outsideKlineData=[
    //时间         开盘价   收盘价   最低价  最高价
    ['20130528', 2293.4,2321.32,2281.47,2322.1],
    ['20130529', 2323.54,2324.02,2321.17,2334.33],
    ['20130530', 2316.25,2317.75,2310.49,2325.72],
    ['20130531', 2320.74,2300.59,2299.37,2325.53],
    ['20130603', 2300.21,2299.25,2294.11,2313.43],
    ['20130604', 2297.1,2272.42,2264.76,2297.1],
    ['20130605', 2270.71,2270.93,2260.87,2276.86],
    ['20130606', 2264.43,2242.11,2240.07,2266.69],
    ['20130607', 2242.26,2210.9,2205.07,2250.63],
    ['20130613', 2190.1,2148.35,2126.22,2190.1],
    ['2013/2/27', 2297.77,2313.22,2292.03,2324.63],
    ['2013/2/28', 2322.32,2365.59,2308.92,2366.16],
    ['2013/3/1', 2364.54,2359.51,2330.86,2369.65],
    ['2013/3/4', 2332.08,2273.4,2259.25,2333.54],
    ['2013/3/5', 2274.81,2326.31,2270.1,2328.14],
    ['2013/3/6', 2333.61,2347.18,2321.6,2351.44],
    ['2013/3/7', 2340.44,2324.29,2304.27,2352.02],
    ['2013/3/8', 2326.42,2318.61,2314.59,2333.67],
    ['2013/3/11', 2314.68,2310.59,2296.58,2320.96],
    ['2013/3/12', 2309.16,2286.6,2264.83,2333.29],
    ['2013/3/13', 2282.17,2263.97,2253.25,2286.33],
    ['2013/3/14', 2255.77,2270.28,2253.31,2276.22],
    ['2013/3/15', 2269.31,2278.4,2250,2312.08],
    ['2013/3/18', 2267.29,2240.02,2239.21,2276.05],
    ['2013/3/19', 2244.26,2257.43,2232.02,2261.31],
    ['2013/3/20', 2257.74,2317.37,2257.42,2317.86],
    ['2013/3/21', 2318.21,2324.24,2311.6,2330.81],
    ['2013/3/22', 2321.4,2328.28,2314.97,2332],
    ['2013/3/25', 2334.74,2326.72,2319.91,2344.89],
    ['2013/3/26', 2318.58,2297.67,2281.12,2319.99],
    ['2013/4/1', 2229.46,2234.4,2227.31,2243.95],
    ['2013/4/2', 2234.9,2227.74,2220.44,2253.42],
    ['2013/4/3', 2232.69,2225.29,2217.25,2241.34],
    ['2013/4/8', 2196.24,2211.59,2180.67,2212.59],
    ['2013/4/9', 2215.47,2225.77,2215.47,2234.73],
    ['2013/4/10', 2224.93,2226.13,2212.56,2233.04],
    ['2013/4/11', 2236.98,2219.55,2217.26,2242.48],
    ['2013/4/12', 2218.09,2206.78,2204.44,2226.26],
    ['2013/4/15', 2199.91,2181.94,2177.39,2204.99],
    ['2013/4/16', 2169.63,2194.85,2165.78,2196.43],
    ['2013/4/17', 2195.03,2193.8,2178.47,2197.51],
    ['2013/4/18', 2181.82,2197.6,2175.44,2206.03],
    ['2013/4/19', 2201.12,2244.64,2200.58,2250.11],
    ['2013/4/22', 2236.4,2242.17,2232.26,2245.12],
    ['2013/4/23', 2242.62,2184.54,2182.81,2242.62],
    ['2013/4/24', 2187.35,2218.32,2184.11,2226.12],
    ['2013/4/25', 2213.19,2199.31,2191.85,2224.63],
    ['2013/4/26', 2203.89,2177.91,2173.86,2210.58],
    ['2013/5/2', 2170.78,2174.12,2161.14,2179.65],
    ['2013/5/3', 2179.05,2205.5,2179.05,2222.81],
    ['2013/5/6', 2212.5,2231.17,2212.5,2236.07],
    ['2013/5/7', 2227.86,2235.57,2219.44,2240.26],
    ['2013/5/8', 2242.39,2246.3,2235.42,2255.21],
    ['2013/5/9', 2246.96,2232.97,2221.38,2247.86],
    ['2013/5/10', 2228.82,2246.83,2225.81,2247.67],
    ['2013/5/13', 2247.68,2241.92,2231.36,2250.85],
    ['2013/3/22', 2321.4,2328.28,2314.97,2332],
    ['2013/3/25', 2334.74,2326.72,2319.91,2344.89],
    ['2013/3/26', 2318.58,2297.67,2281.12,2319.99],
    ['2013/3/27', 2299.38,2301.26,2289,2323.48],
    ['2013/3/28', 2273.55,2236.3,2232.91,2273.55],
    ['2013/3/29', 2238.49,2236.62,2228.81,2246.87],
    ['2013/4/1', 2229.46,2234.4,2227.31,2243.95],
    ['2013/4/2', 2234.9,2227.74,2220.44,2253.42],
    ['2013/4/3', 2232.69,2225.29,2217.25,2241.34],
    ['2013/4/8', 2196.24,2211.59,2180.67,2212.59],
    ['2013/4/9', 2215.47,2225.77,2215.47,2234.73],
    ['2013/4/10', 2224.93,2226.13,2212.56,2233.04],
    ['2013/4/11', 2236.98,2219.55,2217.26,2242.48],
    ['2013/4/12', 2218.09,2206.78,2204.44,2226.26],
    ['2013/4/15', 2199.91,2181.94,2177.39,2204.99],
    ['2013/4/16', 2169.63,2194.85,2165.78,2196.43],
    ['2013/4/17', 2195.03,2193.8,2178.47,2197.51],
    ['2013/4/18', 2181.82,2197.6,2175.44,2206.03],
    ['2013/4/19', 2201.12,2244.64,2200.58,2250.11],
    ['2013/4/22', 2236.4,2242.17,2232.26,2245.12],
    ['2013/4/23', 2242.62,2184.54,2182.81,2242.62],
    ['2013/4/24', 2187.35,2218.32,2184.11,2226.12],
    ['2013/4/25', 2213.19,2199.31,2191.85,2224.63],
    ['2013/4/26', 2203.89,2177.91,2173.86,2210.58],
    ['2013/5/2', 2170.78,2174.12,2161.14,2179.65],
    ['2013/5/3', 2179.05,2205.5,2179.05,2222.81],
    ['2013/5/6', 2212.5,2231.17,2212.5,2236.07],
    ['2013/5/7', 2227.86,2235.57,2219.44,2240.26],
    ['2013/5/8', 2242.39,2246.3,2235.42,2255.21],
    ['2013/5/9', 2246.96,2232.97,2221.38,2247.86],
    ['2013/5/10', 2228.82,2246.83,2225.81,2247.67],
    ['2013/5/13', 2247.68,2241.92,2231.36,2250.85],
    ['2013/5/14', 2238.9,2217.01,2205.87,2239.93],
    ['2013/5/15', 2217.09,2224.8,2213.58,2225.19],
    ['2013/5/16', 2221.34,2251.81,2210.77,2252.87],
    ['2013/5/17', 2249.81,2282.87,2248.41,2288.09],
    ['2013/5/20', 2286.33,2299.99,2281.9,2309.39],
    ['2013/5/21', 2297.11,2305.11,2290.12,2305.3],
    ['2013/5/22', 2303.75,2302.4,2292.43,2314.18],
    ['2013/5/23', 2293.81,2275.67,2274.1,2304.95],
    ['2013/5/24', 2281.45,2288.53,2270.25,2292.59],
    ['2013/5/27', 2286.66,2293.08,2283.94,2301.7],
    ['2013/5/28', 2293.4,2321.32,2281.47,2322.1],
    ['2013/5/29', 2323.54,2324.02,2321.17,2334.33],
    ['2013/5/30', 2316.25,2317.75,2310.49,2325.72],
    ['2013/5/31', 2320.74,2300.59,2299.37,2325.53],
    ['2013/6/3', 2300.21,2299.25,2294.11,2313.43],
    ['2013/6/4', 2297.1,2272.42,2264.76,2297.1],
    ['2013/6/5', 2270.71,2270.93,2260.87,2276.86],
    ['2013/6/6', 2264.43,2242.11,2240.07,2266.69],
    ['2013/6/7', 2242.26,2210.9,2205.07,2250.63],
    ['2013/6/13', 2190.1,2148.35,2126.22,2190.1]
];


(function(){
    function initCanvas(){
        var container=document.getElementById("kline");
        this.canvas=document.createElement("canvas");
        canvas.width=container.clientWidth*2;
        canvas.height=container.clientHeight*2;
        canvas.style.width=container.clientWidth+"px";
        canvas.style.height=container.clientHeight+"px";
        container.appendChild(canvas);
        this.context=canvas.getContext("2d");
    }
    initCanvas();

    var Control=function(){
        //数据
        var date=[],
            kline=[];
        //控制参数
        var totalLength,minScale,maxScale,scaleStep,scrollStep,privateScale,privatePosition;

        function init(rawData){
            for(var i in rawData){
                date.push(rawData[i][0]);
                kline.push(rawData[i].slice(1,5));
            }
            totalLength=rawData.length;
            minScale=totalLength>40?40:totalLength;
            maxScale=totalLength>80?80:totalLength;
            scaleStep=1;
            scrollStep=1;
            privateScale=totalLength>60?60:totalLength;
            privatePosition=rawData.length;
        }

        function enlarge(){
            if(privateScale>minScale){
                privateScale-=scaleStep;
                if(privateScale<minScale){
                    privateScale=minScale;
                }
                draw();
            }else{
                return ;
            }
        }

        function narrow(){
            if(privateScale<maxScale){
                privateScale+=scaleStep;
                if(privateScale>maxScale){
                    privateScale=maxScale;
                }
                if(privateScale>privatePosition){
                    privatePosition=privateScale;
                }
                draw();
            }else{
                return ;
            }
        }

        function scrollRight(){
            if(privatePosition>privateScale){
                privatePosition-=scrollStep;
                if(privatePosition<privateScale){
                    privatePosition=privateScale;
                }
                draw();
            }else{
                return ;
            }
        }

        function scrollLeft(){
            if(privatePosition<totalLength){
                privatePosition+=scrollStep;
                if(privatePosition>totalLength){
                    privatePosition=totalLength;
                }
                draw();
            }else{
                return ;
            }
        }

        function processData(){
            var klineDraw=kline.slice(privatePosition-privateScale,privatePosition);
            var dateDraw=date.slice(privatePosition-privateScale,privatePosition);
            return {
                kline:klineDraw,
                date:dateDraw
            };
        }

        function draw(){
            var result=processData();
            KPainter.init(result.kline,result.date);
            KPainter.draw();
        }

        return {
            init:init,
            draw:draw,
            enlarge:enlarge,
            narrow:narrow,
            scrollLeft:scrollLeft,
            scrollRight:scrollRight,
            getScale:function(){
                return privateScale;
            },
            getPosition:function(){
                return privatePosition;
            }
        };
    }();

    var KPainter=function(){
        var width,height,leftX,rightX,topY,bottomY;
        var d,k,max,min,range,barWidth,gapWidth,barOccupy;
        var layout={a:0.1,b:0.1,c:0.1,d:0.1};

        function initValue(data,date){
            leftX=canvas.width*layout.d;
            rightX=canvas.width*(1-layout.b);
            topY=canvas.height*layout.a;
            bottomY=canvas.height*(1-layout.c);
            width=rightX-leftX;
            height=bottomY-topY;
            max=data[0][3];
            min=data[0][2];
            for(var i=1;i<data.length;i++){
                if(data[i][3]>max){
                    max=data[i][3];
                }
                if(data[i][2]<min){
                    min=data[i][2];
                }
            }
            range=max-min;
            k=data;
            d=date;
            barOccupy=0.8;
            barWidth=(rightX-leftX)*barOccupy/k.length;
            gapWidth=(rightX-leftX)*(1-barOccupy)/(k.length+1);
        }

        function drawGrid(){
            context.beginPath();
            context.strokeStyle="#888";
            context.moveTo(leftX,bottomY);
            context.lineTo(leftX,topY);
            context.lineTo(rightX,topY);
            context.lineTo(rightX,bottomY);
            context.closePath();
            context.stroke();
        }

        function unitRed(x,value){
            context.beginPath();
            context.fillStyle="#fa5d5d";
            context.strokeStyle="#fa5d5d";
            var y=topY+(max-value[1])/range*height;
            var h=(value[1]-value[0])/range*height;
            context.fillRect(x,y,barWidth,h);
            x+=barWidth/2;
            context.moveTo(x,topY+(max-value[2])/range*height);
            context.lineTo(x,topY+(max-value[3])/range*height);
            context.stroke();
        }

        function unitGreen(x,value){
            context.beginPath();
            context.fillStyle="#32a647";
            context.strokeStyle="#32a647";
            var y=topY+(max-value[0])/range*height;
            var h=(value[0]-value[1])/range*height;
            context.fillRect(x,y,barWidth,h);
            x+=barWidth/2;
            context.moveTo(x,topY+(max-value[2])/range*height);
            context.lineTo(x,topY+(max-value[3])/range*height);
            context.stroke();
        }

        function draw(){
            context.clearRect(0,0,canvas.width,canvas.height);
            drawGrid();
            var x=leftX+gapWidth;
            for(var i=0;i<k.length;i++){
                if(k[i][1]>k[i][0]){
                    unitRed(x,k[i]);
                }else{
                    unitGreen(x,k[i]);
                }
                x+=barWidth+gapWidth;
            }
        }

        var cursorControl=function(){
            var previousIndex,previousY;

            function drawCursor(x,y){
                context.beginPath();
                context.strokeStyle="black";
                context.lineWidth=1;
                context.moveTo(leftX,y);
                context.lineTo(rightX,y);
                context.moveTo(x,topY);
                context.lineTo(x,bottomY);
                context.stroke();
            }

            function drawValue(y,value){
                context.beginPath();
                context.font=24+"px Arial";
                context.fillStyle="#000";
                context.textBaseline="middle";
                context.textAlign="right";
                context.fillText(value,leftX,y);
            }

            function drawDate(x,date){
                context.beginPath();
                context.font=24+"px Arial";
                context.fillStyle="#000";
                context.textBaseline="top";
                context.textAlign="center";
                context.fillText(date,x,bottomY);
            }

            function showCursor(x,y){
                x=x-leftX+gapWidth/2;
                var width=gapWidth+barWidth;
                var index=Math.floor(x/width);
                x=leftX+gapWidth*(index+1)+barWidth*index+barWidth/2;
                x=Math.round(x);
                y=Math.round(y);
                x=x%2==0?x+1:x;
                y=y%2==0?y+1:y;
                Control.draw();
                drawCursor(x,y);
                var value=max-(y-topY)/height*range;
                value=value.toFixed(2);
                drawValue(y,value);
                var date=d[index];
                drawDate(x,date);
            }

            return {
                showCursor:showCursor
            };
        }();

        return {
            init:initValue,
            draw:draw,
            cursorControl:cursorControl
        };
    }();

    function bindListener(){
        var offsetLeft=canvas.offsetLeft,
            offsetTop=canvas.offsetTop;
        var showCross=false;
        var klineHammer=new Hammer.Manager(canvas);
        var pan=new Hammer.Pan();
        var pinch = new Hammer.Pinch();
        var press=new Hammer.Press();
        klineHammer.add([pan, pinch,press]);

        klineHammer.on("press",function(e){
            showCross=true;
            var x=(e.changedPointers[0].pageX-offsetLeft)*2,
                y=(e.changedPointers[0].pageY-offsetTop)*2;
            KPainter.cursorControl.showCursor(x,y);
        });

        klineHammer.on("pressup",function(){
            showCross=false;
            Control.draw();
        });

        klineHammer.on("panend",function(){
            showCross=false;
            Control.draw();
        });

        klineHammer.on("panup",function(e){
            showCross=true;
            var x=(e.changedPointers[0].pageX-offsetLeft)*2,
                y=(e.changedPointers[0].pageY-offsetTop)*2;
            KPainter.cursorControl.showCursor(x,y);
        });

        klineHammer.on("pandown",function(e){
            showCross=true;
            var x=(e.changedPointers[0].pageX-offsetLeft)*2,
                y=(e.changedPointers[0].pageY-offsetTop)*2;
            KPainter.cursorControl.showCursor(x,y);
        });

        klineHammer.on("panright", function(e){
            var x=(e.changedPointers[0].pageX-offsetLeft)*2,
                y=(e.changedPointers[0].pageY-offsetTop)*2;
            if(showCross){
                KPainter.cursorControl.showCursor(x,y);
            }else{
                Control.scrollRight();
            }
        });

        klineHammer.on("panleft", function(e){
            var x=(e.changedPointers[0].pageX-offsetLeft)*2,
                y=(e.changedPointers[0].pageY-offsetTop)*2;
            if(showCross){
                KPainter.cursorControl.showCursor(x,y);
            }else{
                Control.scrollLeft();
            }
        });

        klineHammer.on("pinchin", function(){
            Control.narrow();
        });

        klineHammer.on("pinchout", function(){
            Control.enlarge();
        });
    }

    Control.init(outsideKlineData);
    Control.draw();
    bindListener();

})();