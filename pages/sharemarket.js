// TradingViewWidget.js
// import createDOMPurify from 'dompurify'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '@/components/navbar';
let tvScriptLoadingPromise;
import Head from 'next/head'
import Footer from '@/components/footer';
import Script from 'next/script';

export default function TradingViewWidget() {
    const onLoadScriptRef = useRef();
    const [hidesearch, setHidesearch] = useState(true)
    const [hidenotifications, setHidenav] = useState(true)
    const [hidedropdown, setHidedrop] = useState(true)
    const [query, setQuery] = useState('data science');
    const obj = {
        "symbols": [
            {
                "description": "GUAR ",
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
                "description": "गेहूं",
                "proName": "NCDEX:WHEATFAQ"
            },
            {
                "description": "सरसों",
                "proName": "NCDEX:RMSEED"
            },
            {
                "description": "MOONG",
                "proName": "NCDEX:MOONG"
            },
            {
                "description": "CHANA",
                "proName": "NCDEX:CHANA"
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
                        symbols: [["GUAR", "NCDEX:GUARSEED10|3M"], ["JEERA JODHPUR", "NCDEX:JEERAJDR|3M"], ["जौ ", "NCDEX:BARLEYJPR|3M"], ["सरसों", "NCDEX:RMSEED|3M"], ["JEERA UNJHA", "NCDEX:JEERAUNJHA|3M"], [" गेहूं", "NCDEX:WHEATFAQ|3M"], ["BAJRA", "NCDEX:BAJRA|3M"], ["CHANA", "NCDEX:CHANA|3M"], ["MOONG", "NCDEX:MOONG|3M"]],
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

            }
        },
        []
    );

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>मण्डी भाव विश्लेषण - शेयर मार्केट के अनुसार फसलों की मार्केट भाव</title>
                <meta name="description" content="हमारी वेबसाइट पर, किसानों के लिए शेयर मार्केट के अनुसार फसलों की मार्केट भाव का ग्राफिकल प्रतिनिधित्व उपलब्ध है। हमारी वेबसाइट पर, किसानों को पूर्ण और स्पष्ट प्रतिनिधित्व मिलेगा, ताकि वे अपने फसलों के लिए शेयर मार्केट की तलाश कर सकें।" />
                <link rel="icon" href="/mandi.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="शेयर बाजार,मंडी भाव राजस्थान Today,राजस्थान मंडी भाव, सरसों,किसान मंडी भाव,e-mandi bhav mp,राजस्थान मंडी भाव टुडे | ग्वार का,livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,शेयर मार्केट के अनुसार फसलों की मार्केट भाव,कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
                <meta name="robots" content="index, follow"></meta>
                <link rel="canonical" href="https://livemadni.in/"></link>
                <meta property="og:title" content="मण्डी भाव विश्लेषण - शेयर मार्केट के अनुसार फसलों की मार्केट भाव" />
                <meta property="og:description" content="हमारी वेबसाइट पर, किसानों के लिए शेयर मार्केट के अनुसार फसलों की मार्केट भाव का ग्राफिकल प्रतिनिधित्व उपलब्ध है। हमारी वेबसाइट पर, किसानों को पूर्ण और स्पष्ट प्रतिनिधित्व मिलेगा, ताकि वे अपने फसलों के लिए शेयर मार्केट की तलाश कर सकें।" />
                <meta property="og:image" content="https://raw.githubusercontent.com/kaluramkharra/Data-Science-Learning-Codes/main/Plotly/Plotly%20charts/sharemarket%20(2).jpg" />
                <meta property="og:url" content="https://livemandi.in/sharemarket/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Livemandi.in/ShareMarket" />
                <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
                <link rel="author" href="https://livemandi.in/"></link>
                <meta charSet="utf-8"></meta>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
                    crossorigin="anonymous"></script>

            </Head>
            <body>
                <Navbar />


                <div class="tradingview-widget-container top-1 right-1 absolute" id='widget-ticker-tape-container'>
                    <div class="tradingview-widget-container__widget" ></div>
                    {/* <div class="tradingview-widget-copyright"></div> */}
                    <Script type="text/javascript" id='new_trading_widget' src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                        {JSON.stringify({
                            "symbols": [
                                {
                                    "description": "GUAR ",
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
                                    "description": "गेहूं",
                                    "proName": "NCDEX:WHEATFAQ"
                                },
                                {
                                    "description": "सरसों",
                                    "proName": "NCDEX:RMSEED"
                                },
                                {
                                    "description": "MOONG",
                                    "proName": "NCDEX:MOONG"
                                },
                                {
                                    "description": "CHANA",
                                    "proName": "NCDEX:CHANA"
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
                        })}
                
                    </Script>
                </div>




               
                <div className="relative h-[70vh] md:h-screen">

                    <div className='tradingview-widget-container'>
                        <div id='tradingview_549eb' />
                        <div className="tradingview-widget-copyright">
                            <a rel="noopener" target="_blank"><span className="blue-text">Share Market</span></a>
                        </div>
                    </div>

                    <img className="absolute bottom-[56px] left-2 h-10 bg-black w-10 rounded-full" src="/bglogoblack.jpg" alt="" />
                </div>






                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">

                        <div class="text-center lg:w-2/3 w-full">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">शेयर बाजार</h1>
                            <h2 class="mb-8 leading-relaxed">आप हमारी वेबसाइट के शेयर बाजार पृष्ठ पर जाकर फसलों की लाइव कीमतों के बारे में जान सकते हैं। हमारी वेबसाइट आपके लिए शेयर बाजार में निवेश करने से पहले फसलों के मूल्यों के बारे में सटीक और ताजा जानकारी प्रदान करती है। हम निरंतर फसलों की कीमतों को अपडेट करते रहते हैं ताकि आप फसलों की बेहतर बिक्री के लिए सही समय चुन सकें। हम आपको शेयर बाजार के लिए फसलों के वर्तमान और भविष्य के मूल्यों के बारे में समय समय पर जानकारी उपलब्ध कराते रहते हैं। इससे आप अपने निवेश को सटीकता और उन्नति के साथ सम्पन्न कर सकते हैं।</h2>
                            <div class="flex justify-center">
                                {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </body>
        </>
    );
}
