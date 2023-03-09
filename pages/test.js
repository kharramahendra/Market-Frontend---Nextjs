// TradingViewWidget.js

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
          script.type = 'text/javascript';
          script.textContent = {
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
              },
              {
                "proName": "BITSTAMP:ETHUSD",
                "title": "Ethereum"
              }
            ],
            "showSymbolLogo": true,
            "colorTheme": "light",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "in"
          }
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_09e7c') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NCDEX:JEERAJDR",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "in",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            range: "3M",
            allow_symbol_change: true,
            watchlist: ["NCDEX:JEERAJDR","NCDEX:RMSEED","NCDEX:GUARSEED10","NCDEX:GUARSEDBKN","NCDEX:WHEATFAQ","NCDEX:BARLEYJPR","NCDEX:BAJRA","NCDEX:MOONG","NCDEX:CHANA"],
            details: true,
            hotlist: true,
            studies: ["ATR@tv-basicstudies","LinearRegression@tv-basicstudies","MASimple@tv-basicstudies","MAExp@tv-basicstudies"],
            container_id: "tradingview_09e7c"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_09e7c' />
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/symbols/NCDEX-JEERAJDR/" rel="noopener" target="_blank"><span className="blue-text">JEERAJDR chart</span></a> by TradingView
      </div>
    </div>
  );
}
