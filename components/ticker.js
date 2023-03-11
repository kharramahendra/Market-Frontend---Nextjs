import React from "react";

function TradingViewWidget() {
  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/markets/" rel="noopener" target="_blank">
          <span className="blue-text">Markets today</span>
        </a>{" "}
        by TradingView
      </div>
      <script
        type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        async
      ></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "symbols": [
              {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500"
              },
              {
                "proName": "FOREXCOM:NSXUSD",
                "title": "US 100"
              },
              {
                "proName": "FX_IDC:EURUSD",
                "title": "EUR/USD"
              },
              {
                "proName": "BITSTAMP:BTCUSD",
                "title": "Bitcoin"
              }
            ],
            "showSymbolLogo": true,
            "colorTheme": "light",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "in"
          }
        `,
        }}
      ></script>
    </div>
  );
}

export default TradingViewWidget;
