// TradingViewWidget.js

import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '@/components/navbar';
let tvScriptLoadingPromise;

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
                if (document.getElementById('tradingview_afaa7') && 'TradingView' in window) {
                    new window.TradingView.MediumWidget({
                        symbols: [["JEERA", "NCDEX:JEERAJDR|3M"], ["GUAR", "NCDEX:GUARSEED10|3M"]],
                        chartOnly: false,
                        width: "100%",
                        height: "100%",
                        locale: "in",
                        colorTheme: "light",
                        autosize: true,
                        showVolume: false,
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
                        container_id: "tradingview_afaa7"
                    });
                }
                if (document.getElementById('tradingview_97945') && 'TradingView' in window) {
                    new window.TradingView.MediumWidget({
                        symbols: [["CHANA", "NCDEX:CHANA|3M"], ["GUAR", "NCDEX:GUARSEDBKN|3M"]],
                        chartOnly: false,
                        width: "100%",
                        height: "100%",
                        locale: "in",
                        colorTheme: "light",
                        autosize: true,
                        showVolume: false,
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
                        container_id: "tradingview_97945"
                    });
                }
                if (document.getElementById('tradingview_5e64a') && 'TradingView' in window) {
                    new window.TradingView.MediumWidget({
                        symbols: [["जौ ", "NCDEX:BARLEYJPR|3M"], ["BAJRA", "NCDEX:BAJRA|12M"], ["सरसों", "NCDEX:RMSEED|3M"]],
                        chartOnly: false,
                        width: "100%",
                        height: "100%",
                        locale: "in",
                        colorTheme: "light",
                        autosize: true,
                        showVolume: false,
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
                        container_id: "tradingview_5e64a"
                    });
                }
                if (document.getElementById('tradingview_549eb') && 'TradingView' in window) {
                    new window.TradingView.MediumWidget({
                        symbols: [["जौ ", "NCDEX:BARLEYJPR|3M"], ["सरसों", "NCDEX:RMSEED|3M"], ["JEERA UNJHA", "NCDEX:JEERAUNJHA|3M"], ["JEERA JODHPUR", "NCDEX:JEERAJDR|3M"], [" गेहूं", "NCDEX:WHEATFAQ|3M"], ["कपास", "NCDEX:COTTON|3M"], ["BAJRA", "NCDEX:BAJRA|3M"], ["CHANA", "NCDEX:CHANA|3M"], ["MOONG", "NCDEX:MOONG|3M"], ["GUAR", "NCDEX:GUARSEED10|3M"]],
                        chartOnly: false,
                        width: "100%",
                        height: "100%",
                        locale: "in",
                        colorTheme: "dark",
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

            <Navbar/>








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
            <div className="h-screen my-20">
                <div className='tradingview-widget-container'>
                    <div id='tradingview_afaa7' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">JODHPUR MANDI</span></a>
                    </div>
                </div>
            </div>



            {/* BIKANER MANDI */}
            <div className="h-screen my-20">
                <div className='tradingview-widget-container'>
                    <div id='tradingview_97945' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">Bikaner Mandi</span></a>
                    </div>
                </div>
            </div>

            {/* JAIPUR MANDI */}
            <div className="h-screen my-20">
                <div className='tradingview-widget-container'>
                    <div id='tradingview_5e64a' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">JAIPUR MANDI</span></a>
                    </div>
                </div>
            </div>
        </>
    );
}
