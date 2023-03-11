import { useEffect } from "react";

function TradingViewWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = `
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
    `;
    document.getElementById("tradingview-widget-container").appendChild(script);
  }, []);

  return (
    <div id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default TradingViewWidget;
