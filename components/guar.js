import { useEffect } from "react";

function GuarWidget() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
        script.acync = true
        script.innerHTML = `
        {
            "symbol": "NCDEX:GUARSEED10",
            "width": "100%",
            "height": "100%",
            "locale": "in",
            "dateRange": "1M",
            "colorTheme": "dark",
            "trendLineColor": "rgba(41, 98, 255, 1)",
            "underLineColor": "rgba(41, 98, 255, 0.3)",
            "underLineBottomColor": "rgba(41, 98, 255, 0)",
            "isTransparent": false,
            "autosize": true,
            "largeChartUrl": ""
          }
        `
        document.getElementById('guar_container').appendChild(script)
    }, []);


    return <>
        <div class="tradingview-widget-container" id="guar_container">
            <div class="tradingview-widget-container__widget"></div>
        </div>
    </>
}






export default GuarWidget