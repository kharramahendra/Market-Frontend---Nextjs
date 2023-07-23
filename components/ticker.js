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
            "description": "इसबगोल",
            "proName": "NCDEX:ISABGOL"
          },
            {
              "description": "GUAR",
              "proName": "NCDEX:GUARSEED10"
            },
            {
              "description": "JEERA",
              "proName": "NCDEX:JEERAJDR"
            },
            {
              "description": "कपास/20kg",
              "proName": "NCDEX:KAPAS"
            },
            {
              "description": "सरसों",
              "proName": "NCDEX:RMSEED"
            },
            {
              "description": "मुंगफली",
              "proName": "NCDEX:GROUNDNUT"
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
    <div className="relative cursor-pointer">

      <div className="absolute bg-black bg-opacity-0 w-full h-20 md:h-16 z-20 top-0 right-0">
        <h className="text-white text-lg"></h>
      </div>
      <div className="w-full z-10 overflow-x-hidden overflow-y-hidden h-20 lg:h-12">
        <div className="-mr-10 overflow-hidden overflow-y-hidden overflow-x-hidden">
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
        </div>
      </div>
    </div>
  );
}

export default TradingViewWidget;
