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
import Ticker from '@/components/ticker';





const ShareMarket = () => {
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
                <title>कृषि शेयर बाजार - शेयर मार्केट के अनुसार फसलों के मार्केट भाव</title>
                <meta name="description" content="किसानों के लिए शेयर मार्केट के अनुसार फसलों की मार्केट भाव का ग्राफिकल प्रतिनिधित्व उपलब्ध है। हमारी वेबसाइट पर, किसानों को पूर्ण और स्पष्ट प्रतिनिधित्व मिलेगा, ताकि वे अपने फसलों के लिए शेयर मार्केट की तलाश कर सकें।" />
                <link rel="icon" href="/mandi.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="live mandi bhav,मंडी भाव शेयर बाजार, शेयर बाजार मंडी भाव, मंडी भाव राजस्थान Today, राजस्थान मंडी भाव, किसान मंडी भाव, राजस्थान मंडी भाव टुडे ,livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,शेयर मार्केट के अनुसार फसलों की मार्केट भाव," />
                <meta name="robots" content="index, follow"></meta>
                <link rel="canonical" href="https://livemadni.in/"></link>
                <meta property="og:title" content="कृषि शेयर बाजार - शेयर मार्केट के अनुसार फसलों के मार्केट भाव" />
                <meta property="og:description" content="किसानों के लिए शेयर मार्केट के अनुसार फसलों की मार्केट भाव का ग्राफिकल प्रतिनिधित्व उपलब्ध है। हमारी वेबसाइट पर, किसानों को पूर्ण और स्पष्ट प्रतिनिधित्व मिलेगा, ताकि वे अपने फसलों के लिए शेयर मार्केट की तलाश कर सकें।" />
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

            <Navbar />



            <Ticker />



            <div className="relative h-[70vh] md:h-screen">

                <div className='tradingview-widget-container'>
                    <div id='tradingview_549eb' />
                    <div className="tradingview-widget-copyright">
                        <a rel="noopener" target="_blank"><span className="blue-text">शेयर मार्केट के अनुसार फसलों के मार्केट भाव</span></a>
                    </div>
                </div>

                <img className="absolute bottom-[56px] left-2 h-10 bg-black w-10 rounded-full" src="/bglogoblack.jpg" alt="" />
            </div>



            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">आज के <span className='font-bold text-rose-500'>लाइव </span> मंडी भाव - {Date().toString().slice(3, 15)}</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">सभी मंडी के आज के लाइव भाव (live mandi bhav) जानने के लिए नीचे दी गई फसल पर क्लिक करें</p>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://4.imimg.com/data4/QN/HG/MY-15510094/guar-gum-seed-500x500.jpg"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">ग्वार (GUAR) KE BHAV</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://bl-i.thgim.com/public/incoming/lx7sba/article66329939.ece/alternates/FREE_1200/IMG_BL10-JEERA8_3_1_E68TMDDE.jpg"/>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">जीरा (JEERA) ke bhav</h2>
                                    <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://cdn.healthybazar.com/images/product/large/healthybazar_16324129260.jpg"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">इसबगोल (ISABGUL) bhav today</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://tiimg.tistatic.com/fp/1/002/891/barley-seeds-889.jpg"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">जौ (BARLEY) mandi bhav</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://5.imimg.com/data5/ANDROID/Default/2022/5/SE/QN/HG/89593328/uc0feb89e1d70497fa5c42f9a5df6e2d9u-jpg-250x250.jpg"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">गेहूँ (WHEAT) ke bhav</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://5.imimg.com/data5/MX/BG/FQ/SELLER-66914748/black-mustard-seed-rayda-brassica-nigra-500x500.jpg"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">सरसो (Musturd) bhav</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://2.wlimg.com/product_images/bc-full/dir_137/4084520/taramira-seeds-1493784716-2825705.jpeg"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">तारामीरा (TARAMIRA) bhav</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://sofindia.co.in/wp-content/uploads/2022/07/kala-chana.png"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">चना (CHANA) ke bhav</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVke65fbP-15GeKWRmmsX25ICLjQnGHYRkg&usqp=CAU"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">मूंग (MOONG) today bhav</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_w1JM_a9Zec5W7hU6xc3axb634kdhhSxGpiY5YWZE_dsNjgTQtCdJuLN0N4mVxGLUCqs&usqp=CAU"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">मोठ (MOATH) ke bhav</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtsP-EKmMNccn0mDJWAciukKlSY1Okr2hBw&usqp=CAU"/>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">मेथी (METHI) bhav</h2>
                                        <Link href={'/mandi'}><a class="mt-3 text-indigo-500 inline-flex items-center font-semibold cursor-pointer">लाइव मंडी भाव
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a></Link>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>






            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="about" src="/logolight2.png" />

                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">शेयर मार्केट के अनुसार फसलों के मार्केट भाव</h1>
                        <h2 class="mb-8 leading-relaxed text-gray-800">शेयर मार्केट के अनुसार फसलों के मार्केट भाव लाइव (live mandi bhav) देख सकते हैं। हमारी वेबसाइट आपके लिए बेचने से पहले फसलों के Mandi Bhav के बारे में सटीक और ताजा जानकारी प्रदान करती है। हम निरंतर फसलों की कीमतों को अपडेट करते रहते हैं ताकि आप फसलों की बेहतर बिक्री के लिए सही समय चुन सकें। हम आपको शेयर बाजार (share market) के लिए फसलों के वर्तमान और भविष्य के मूल्यों (mandi bhav) के बारे में समय समय पर जानकारी उपलब्ध कराते रहते हैं। इससे आप अपने निवेश को सटीकता और उन्नति के साथ सम्पन्न कर सकते हैं।</h2>
                        <div class="flex justify-center">
                            {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                        </div>
                    </div>
                </div>
            </section>



            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="भविष्य की कीमतें" src="/assets/images/sharebeche.jpg" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            भविष्य के मार्केट भाव कैसे समझे
                        </h1>
                        <p class="mb-8 leading-relaxed">एक उपयोगी सुझाव हम दे सकते हैं कि मंडियों में आमतौर पर bhav स्टॉक मार्केट से कुछ कम होते हैं, क्योंकि मंडियों में दाम बाजार से सीधे किसानों से तय किए जाते हैं और इसमें बिचौलियों की बड़ी संख्या शामिल नहीं होती है।</p>

                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}


export default ShareMarket