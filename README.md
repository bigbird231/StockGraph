# 📈 StockGraph

**StockGraph** is a fully integrated implementation of stock K-line (candlestick) and time-series charts, built using **JavaScript** and **HTML5 Canvas**.

- 📊 Includes **11 time ranges** for stocks supported by the **Hundsun Finance OpenAPI**
- 🌐 Supports markets in **China**, **Hong Kong**, and the **United States**
- 🧭 Features **scrollable views** for different timeframes
- 👆 Supports **drag-to-pan** and **pinch-to-zoom**
- 🔄 **Dynamic axis labels** during interaction

> ⚠️ To use the code in this repository, you **must purchase access** to the **Hundsun OpenAPI** and configure your `APPKEY` and `APPSECRET` in the code.

---

## 🔧 Features

- K-line (candlestick) chart support
- Time-series chart support
- Volume chart support
- **MA** (Moving Average) indicators
- **MACD** (technical analysis)
- Long-press **crosshair** overlay
- **Pan and zoom** support (browser-based)
- **Single-page app** with built-in stock search

---

## 📊 Supported Chart Types

### K-line Charts (Candlestick)
- 1-minute
- 5-minute
- 15-minute
- 30-minute
- 60-minute
- Daily (Day K)
- Weekly (Week K)
- Monthly (Month K)
- Yearly (Year K)

### Time-Series Charts
- Intraday (Real-time)
- 5-day Chart

---

## 🌏 Supported Markets

- All **Mainland China** trading markets (A-shares, futures, SME board, cultural exchanges, etc.)
- All **Hong Kong** stock markets
- Major **U.S.** stock markets

---

## 🚀 Getting Started
1. Clone this repository:
   ```
   git clone https://github.com/yourusername/stockgraph.git
2. Purchase access to the Hundsun OpenAPI and obtain your APPKEY and APPSECRET.
3. Open the source code and configure your credentials:
   ```
   const APPKEY = 'your-app-key';
   const APPSECRET = 'your-app-secret';
   ```
4. Open the HTML file in your browser to start using StockGraph.
5. 🔗 Try the MVP demo here:: https://bigbird231.github.io/StockGraph/demo/

## 🖼️ Examples
### Similar K-line Patterns
![image](https://github.com/user-attachments/assets/3163e0f4-ade6-41e9-814c-2ba2f1156e1b)

### Technical Indicators
![image](https://github.com/user-attachments/assets/265ef366-9ec9-4853-bd4d-0bd681d8efd6)

### Stock Holding Distribution
![image](https://github.com/user-attachments/assets/e8800c43-4118-4b04-88ca-d3ea1a02f1a6)
