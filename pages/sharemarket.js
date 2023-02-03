// TradingViewWidget.js

import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
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

            {/* navbar */}
            <nav className="relative px-4 py-2 bg-gray-900 flex justify-between items-center ">

                <a className="text-3xl font-bold leading-none" href="#">
                    <img className="block h-10 w-auto " src="/logodark.png" alt="lets create idea" />
                </a>



                {/*  mobile search and hamburger menu  */}
                <div className="lg:hidden flex">
                    <button onClick={() => setHidesearch(!hidesearch)} type="button" className="mx-2 flex text-gray-100 rounded-full lg:hidden text-sm items-center" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">View notifications</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

                    </button>
                    <button onClick={() => setHidenav(!hidenotifications)} className="navbar-burger flex items-center text-gray-100 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                {/* end */}
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li><Link href='/' legacyBehavior><a href='/' className="text-sm text-gray-100 hover:text-gray-200 font-bold">Home</a></Link></li>
                    <li><Link href='/sharemarket' legacyBehavior><a href="/sharemarket" className="text-sm text-gray-100 hover:text-gray-200 font-bold" >Share Market</a></Link></li>
                    <li><Link href={'/mandi'} legacyBehavior><a href="/mandi" className="text-sm text-gray-100 hover:text-gray-200 font-bold">Mandi Bhav</a></Link></li>
                    {/* <li><Link href={'/codes'}><a class="text-sm text-gray-100 hover:text-gray-200 font-bold" href="#">Codes</a></Link></li> */}
                    <li><Link href='/news' legacyBehavior><a href="/news" className="text-sm text-gray-100 hover:text-gray-200 font-bold" >News</a></Link></li>
                    <li><Link href={'/about'} legacyBehavior><a className="text-sm text-gray-100 flex hover:text-gray-200 font-bold">About</a></Link></li>
                    {/* <li><Link href={'/privacy.html'}><a class="text-sm text-gray-100 flex hover:text-gray-200 font-bold">Privacy policy</a></Link></li> */}
                </ul>
                <button onClick={() => setHidesearch(!hidesearch)} type="button" className="rounded-full lg:block hidden text-sm focus:outline-none " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">View notifications</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

                </button>
            </nav>

            <div hidden={hidesearch} className="absolute right-0 z-50 mt-2 w-80 md:w-96 origin-bottom-right  rounded-lg bg-white  shadow-lg" role="menu" aria-orientation="vertical" >
                <form>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <input onChange={handlechange} type="search" value={query} name="query" id="query" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Codes, Projects..." required />
                        <Link href={`/search/${query}`}><button type="submit" className="text-gray-900 bg-white absolute right-2.5 bottom-2.5 border hover:bg-gray-900 hover:text-white border-gray-900  font-medium rounded-lg text-sm px-4 py-2 ">Search</button></Link>
                    </div>
                </form>

            </div>

            <div className="navbar-menu absolute z-50" hidden={hidenotifications} >
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-4 right-3 flex flex-col w-4/6 max-w-sm py-3 px-6 bg-white border-r rounded-lg  overflow-y-auto">
                    <div className="flex relative items-center mb-8">

                        <button className="absolute top-0 right-2 navbar-close" onClick={() => setHidenav(!hidenotifications)}>
                            <svg className="h-6 w-6 text-gray-900 cursor-pointer hover:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link href='/' legacyBehavior><a href='/' className="block p-2 text-sm font-semibold text-gray-800  rounded">Home</a></Link>
                            </li>

                            <li className="mb-1">
                                <Link href='/sharemarket' legacyBehavior><a href="/sharemarket" className="block p-2 text-sm font-semibold text-gray-800  rounded" >Share Market</a></Link>
                            </li>

                            <li className="mb-1">
                                <Link href={'/mandi'} legacyBehavior><a className="block p-2 text-sm font-semibold text-gray-800  rounded" >Mandi Bhav</a></Link>
                            </li>
                            <li className="mb-1">
                                <Link href='/news' legacyBehavior><a href='/news' className="block p-2 text-sm font-semibold text-gray-800  rounded" >News</a></Link>
                            </li>
                            <li className="mb-1 flex">
                                <Link href={'/about'} legacyBehavior><a className="flex p-2 text-sm font-semibold text-gray-800 rounded" >About</a></Link>
                            </li>


                        </ul>
                    </div>
                    <div className="mt-auto">

                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2023</span>
                        </p>
                    </div>
                </nav>
            </div>
            {/* navbar end */}








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
