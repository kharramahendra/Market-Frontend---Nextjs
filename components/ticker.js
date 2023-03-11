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
              "description": "GUAR",
              "proName": "NCDEX:GUARSEED10"
            },
            {
              "description": "JEERA",
              "proName": "NCDEX:JEERAJDR"
            },
            {
              "description": "जौ",
              "proName": "NCDEX:BARLEYJPR"
            },
            {
              "description": "CHANA",
              "proName": "NCDEX:CHANA"
            },
            {
              "description": "MOONG",
              "proName": "NCDEX:MOONG"
            },
            {
              "description": "गेहूं",
              "proName": "NCDEX:WHEATFAQ"
            },
            {
              "description": "सरसों",
              "proName": "NCDEX:RMSEED"
            },
            {
              "description": "BAJRA",
              "proName": "NCDEX:BAJRA"
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
