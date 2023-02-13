// TradingViewWidget.js

import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '@/components/navbar';
let tvScriptLoadingPromise;
import Head from 'next/head'
import Footer from '@/components/footer';

export default function TradingViewWidget() {
    const onLoadScriptRef = useRef();
    const [hidesearch, setHidesearch] = useState(true)
    const [hidenotifications, setHidenav] = useState(true)
    const [hidedropdown, setHidedrop] = useState(true)
    const [query, setQuery] = useState('data science');
    const handlechange = (e) => {
        if (e.target.name == 'query') {
            setQuery(e.target.value)
        }
    }
    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_549eb') && 'TradingView' in window) {
                    new window.TradingView.MediumWidget({
                        symbols: [["JEERA JODHPUR", "NCDEX:JEERAJDR|3M"], ["जौ ", "NCDEX:BARLEYJPR|3M"], ["सरसों", "NCDEX:RMSEED|3M"], ["JEERA UNJHA", "NCDEX:JEERAUNJHA|3M"], [" गेहूं", "NCDEX:WHEATFAQ|3M"], ["BAJRA", "NCDEX:BAJRA|3M"], ["CHANA", "NCDEX:CHANA|3M"], ["MOONG", "NCDEX:MOONG|3M"], ["GUAR", "NCDEX:GUARSEED10|3M"]],
                        chartOnly: false,
                        width: "100%",
                        height: "100%",
                        locale: "in",
                        colorTheme: "light",
                        autosize: true,
                        showVolume: true,
                        hideDateRanges: false,
                        hideMarketStatus: false,
                        hideSymbolLogo: false,
                        scalePosition: "right",
                        scaleMode: "Normal",
                        fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
                        fontSize: "7",
                        noTimeScale: false,
                        valuesTracking: "2",
                        changeMode: "price-and-percent",
                        chartType: "line",
                        timeHoursFormat: "12-hours",
                        upColor: "#089981",
                        downColor: "#f23646",
                        borderUpColor: "#22ab94",
                        borderDownColor: "#f7525f",
                        wickUpColor: "#22ab94",
                        wickDownColor: "#f7525f",
                        container_id: "tradingview_549eb"
                    });
                }
                if (document.getElementById('tradingview_05fb2') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        autosize: true,
                        width: "100%",
                        height: "100%",
                        symbol: "NCDEX:JEERAJDR",
                        timezone: "Etc/UTC",
                        theme: "light",
                        style: "2",
                        locale: "in",
                        toolbar_bg: "#f1f3f6",
                        enable_publishing: false,
                        range: "3M",
                        watchlist: ["NCDEX:JEERAJDR", "NCDEX:RMSEED", "NCDEX:GUARSEED10", "NCDEX:GUARSEDBKN", "NCDEX:WHEATFAQ", "NCDEX:BARLEYJPR", "NCDEX:BAJRA", "NCDEX:MOONG", "NCDEX:CHANA"],
                        details: true,
                        hotlist: true,
                        container_id: "tradingview_05fb2"
                    });
                }
            }
        },
        []
    );

    return (
        <>
            <Head>
                <title>मण्डी भाव विश्लेषण - शेयर मार्केट के अनुसार फसलों की मार्केट भाव</title>
                <meta name="description" content="हमारी वेबसाइट पर, किसानों के लिए शेयर मार्केट के अनुसार फसलों की मार्केट भाव का ग्राफिकल प्रतिनिधित्व उपलब्ध है। हमारी वेबसाइट पर, किसानों को पूर्ण और स्पष्ट प्रतिनिधित्व मिलेगा, ताकि वे अपने फसलों के लिए शेयर मार्केट की तलाश कर सकें।" />
                <link rel="icon" href="/mandi.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="शेयर मार्केट के अनुसार फसलों की मार्केट भाव,कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
                <meta name="robots" content="index, follow"></meta>
                <link rel="canonical" href="https://livemadni.in/"></link>
                <meta property="og:title" content="मण्डी भाव विश्लेषण - शेयर मार्केट के अनुसार फसलों की मार्केट भाव" />
                <meta property="og:description" content="हमारी वेबसाइट पर, किसानों के लिए शेयर मार्केट के अनुसार फसलों की मार्केट भाव का ग्राफिकल प्रतिनिधित्व उपलब्ध है। हमारी वेबसाइट पर, किसानों को पूर्ण और स्पष्ट प्रतिनिधित्व मिलेगा, ताकि वे अपने फसलों के लिए शेयर मार्केट की तलाश कर सकें।" />
                <meta property="og:image" content="https://livemandi.in/imagelight2.jpg" />
                <meta property="og:url" content="https://livemandi.in/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Livemandi.in" />
                <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
                <link rel="author" href="https://livemandi.in/"></link>
                <meta charSet="utf-8"></meta>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
                    crossorigin="anonymous"></script>
            </Head>
            <Navbar />









            <div className='w-full'>
                <h2 className='text-gray-800 text-lg font-bold my-3 mx-auto'>Market Overview</h2>
            </div>
            <div className="relative h-[70vh] md:h-screen">

                <div className='tradingview-widget-container'>
                    <div id='tradingview_549eb' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">Share Market</span></a>
                    </div>
                </div>

                <img className="absolute bottom-[56px] left-2 h-10 bg-black w-10 rounded-full" src="/bglogoblack.jpg" alt="lets create idea" />
            </div>


            <div className='w-full'>
                <h2 className='text-gray-800 text-lg font-bold my-3 w-1/2 mx-auto'>Technical Analysis</h2>
            </div>
            <div className="relative h-[70vh] md:h-screen">
                <div className='tradingview-widget-container'>
                    <div id='tradingview_05fb2' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">Technical Analysis</span></a>
                    </div>
                </div>

                <img className="absolute bottom-[62px] left-2 h-10 bg-black w-10 rounded-full" src="/bglogoblack.jpg" alt="lets create idea" />
            </div>





            <Footer />

        </>
    );
}
