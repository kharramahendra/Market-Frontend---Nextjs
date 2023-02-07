// TradingViewWidget.js

import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '@/components/navbar';
let tvScriptLoadingPromise;
import Head from 'next/head'

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
                // if (document.getElementById('tradingview_afaa7') && 'TradingView' in window) {
                //     new window.TradingView.MediumWidget({
                //         symbols: [["JEERA", "NCDEX:JEERAJDR|3M"], ["GUAR", "NCDEX:GUARSEED10|3M"]],
                //         chartOnly: false,
                //         width: "100%",
                //         height: "100%",
                //         locale: "in",
                //         colorTheme: "light",
                //         autosize: true,
                //         showVolume: false,
                //         hideDateRanges: false,
                //         hideMarketStatus: false,
                //         hideSymbolLogo: false,
                //         scalePosition: "right",
                //         scaleMode: "Normal",
                //         fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
                //         fontSize: "10",
                //         noTimeScale: false,
                //         valuesTracking: "2",
                //         changeMode: "price-and-percent",
                //         chartType: "candlesticks",
                //         timeHoursFormat: "12-hours",
                //         upColor: "#22ab94",
                //         downColor: "#f7525f",
                //         borderUpColor: "#22ab94",
                //         borderDownColor: "#f7525f",
                //         wickUpColor: "#22ab94",
                //         wickDownColor: "#f7525f",
                //         container_id: "tradingview_afaa7"
                //     });
                // }
                // if (document.getElementById('tradingview_97945') && 'TradingView' in window) {
                //     new window.TradingView.MediumWidget({
                //         symbols: [["CHANA", "NCDEX:CHANA|3M"], ["GUAR", "NCDEX:GUARSEDBKN|3M"]],
                //         chartOnly: false,
                //         width: "100%",
                //         height: "100%",
                //         locale: "in",
                //         colorTheme: "light",
                //         autosize: true,
                //         showVolume: false,
                //         hideDateRanges: false,
                //         hideMarketStatus: false,
                //         hideSymbolLogo: false,
                //         scalePosition: "right",
                //         scaleMode: "Normal",
                //         fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
                //         fontSize: "10",
                //         noTimeScale: false,
                //         valuesTracking: "2",
                //         changeMode: "price-and-percent",
                //         chartType: "candlesticks",
                //         timeHoursFormat: "12-hours",
                //         upColor: "#22ab94",
                //         downColor: "#f7525f",
                //         borderUpColor: "#22ab94",
                //         borderDownColor: "#f7525f",
                //         wickUpColor: "#22ab94",
                //         wickDownColor: "#f7525f",
                //         container_id: "tradingview_97945"
                //     });
                // }
                // if (document.getElementById('tradingview_5e64a') && 'TradingView' in window) {
                //     new window.TradingView.MediumWidget({
                //         symbols: [["जौ ", "NCDEX:BARLEYJPR|3M"], ["BAJRA", "NCDEX:BAJRA|12M"], ["सरसों", "NCDEX:RMSEED|3M"]],
                //         chartOnly: false,
                //         width: "100%",
                //         height: "100%",
                //         locale: "in",
                //         colorTheme: "light",
                //         autosize: true,
                //         showVolume: false,
                //         hideDateRanges: false,
                //         hideMarketStatus: false,
                //         hideSymbolLogo: false,
                //         scalePosition: "right",
                //         scaleMode: "Normal",
                //         fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
                //         fontSize: "10",
                //         noTimeScale: false,
                //         valuesTracking: "2",
                //         changeMode: "price-and-percent",
                //         chartType: "candlesticks",
                //         timeHoursFormat: "12-hours",
                //         upColor: "#22ab94",
                //         downColor: "#f7525f",
                //         borderUpColor: "#22ab94",
                //         borderDownColor: "#f7525f",
                //         wickUpColor: "#22ab94",
                //         wickDownColor: "#f7525f",
                //         container_id: "tradingview_5e64a"
                //     });
                // }
                if (document.getElementById('tradingview_549eb') && 'TradingView' in window) {
                    new window.TradingView.MediumWidget({
                        symbols: [["जौ ", "NCDEX:BARLEYJPR|3M"], ["सरसों", "NCDEX:RMSEED|3M"], ["JEERA UNJHA", "NCDEX:JEERAUNJHA|3M"], ["JEERA JODHPUR", "NCDEX:JEERAJDR|3M"], [" गेहूं", "NCDEX:WHEATFAQ|3M"], ["कपास", "NCDEX:COTTON|3M"], ["BAJRA", "NCDEX:BAJRA|3M"], ["CHANA", "NCDEX:CHANA|3M"], ["MOONG", "NCDEX:MOONG|3M"], ["GUAR", "NCDEX:GUARSEED10|3M"]],
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
                        fontSize: "10",
                        noTimeScale: false,
                        valuesTracking: "2",
                        changeMode: "price-and-percent",
                        chartType: "candlesticks",
                        timeHoursFormat: "12-hours",
                        upColor: "#22ab94",
                        downColor: "#f7525f",
                        borderUpColor: "#22ab94",
                        borderDownColor: "#f7525f",
                        wickUpColor: "#22ab94",
                        wickDownColor: "#f7525f",
                        container_id: "tradingview_549eb"
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
                <meta property="og:image" content="https://kisanbazaar.vercel.app/imagelight2.jpg" />
                <meta property="og:url" content="https://livemandi.in/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Livemandi.in" />
                <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
                <link rel="author" href="https://livemandi.in/"></link>
                <meta charSet="utf-8"></meta>
            </Head>
            <Navbar />








            {/* OVERALL */}
            <div className="h-screen mb-20">
                <div className='tradingview-widget-container'>
                    <div id='tradingview_549eb' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">Share Market</span></a>
                    </div>
                </div>
            </div>


            {/* JODHPUR MANDI */}
            {/* <div className="h-screen my-20">
                <div className='tradingview-widget-container'>
                    <div id='tradingview_afaa7' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">JODHPUR MANDI</span></a>
                    </div>
                </div>
            </div> */}



            {/* BIKANER MANDI */}
            {/* <div className="h-screen my-20">
                <div className='tradingview-widget-container'>
                    <div id='tradingview_97945' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">Bikaner Mandi</span></a>
                    </div>
                </div>
            </div> */}

            {/* JAIPUR MANDI */}
            {/* <div className="h-screen my-20">
                <div className='tradingview-widget-container'>
                    <div id='tradingview_5e64a' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">JAIPUR MANDI</span></a>
                    </div>
                </div>
            </div> */}








        </>
    );
}
