# StockGraph

A fully integrated implementation of stock K-line (candlestick) and time-series charts, built using **JavaScript** and **HTML5 (Canvas)**.

- Includes **11 different time ranges** for any stock supported by the **Hundsun Finance OpenAPI**
- Supports markets in **China**, **Hong Kong**, and the **United States**
- Features **scrollable views**, each displaying a different time range
- Supports **drag-to-pan** and **pinch-to-zoom** gestures
- **Axis labels update dynamically** during interaction

> ⚠️ To run the source code provided in this repository, you must first **purchase access to the Hundsun OpenAPI** and configure your `APPKEY` and `APPSECRET` in the code.

---

## 📊 Supported Chart Types

### K-line Charts (Candlestick Charts)
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
- All **Mainland China** trading markets (including A-shares, futures, SME board, cultural exchanges, etc.)
- All **Hong Kong** stock markets
- Major **U.S.** stock markets

---

## 🔧 Features
- K-line chart support
- Time-series chart support
- Trading volume chart
- **Moving Average (MA)** indicators
- **MACD** technical analysis
- **Crosshair** with long-press gesture (browser-based)
- **Pan and zoom** gestures supported via browser
- **Single-page application** with built-in stock search

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
