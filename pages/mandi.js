// TradingViewWidget.js
import Navbar from '../components/navbar'
import Head from 'next/head'
import Footer from '../components/footer'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
let tvScriptLoadingPromise;

const Mandi = ({ prices }) => {
  const onLoadScriptRef = useRef();



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
        if (document.getElementById('tradingview_f875a') && 'TradingView' in window) {
          new window.TradingView.MediumWidget({
            symbols: [["MERTA MUNG BHAV", "NCDEX:MOONG|12M"], ["JAIPUR BAJRA", "NCDEX:BAJRA|12M"], ["GUAR JODHPUR", "NCDEX:GUARSEED10|12M"], ["GUAR BIKANER", "NCDEX:GUARSEDBKN|12M"], ["JEERA JODHPUR", "NCDEX:JEERAJDR|12M"], ["GUAR SEED", "NCDEX:GUARSEED10|12M"], ["GUAR JODHPUR", "NCDEX:GUARGUM5|12M"], ["CHANA BIKANER", "NCDEX:CHANA|12M"]],
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
            valuesTracking: "1",
            changeMode: "price-and-percent",
            chartType: "candlesticks",
            upColor: "#22ab94",
            downColor: "#f7525f",
            borderUpColor: "#22ab94",
            borderDownColor: "#f7525f",
            wickUpColor: "#22ab94",
            wickDownColor: "#f7525f",
            container_id: "tradingview_f875a"
          });
        }
      }
    },
    []
  );

  return (
    <>

      <Head>
        <title>मण्डी भाव - किसानों के लिए ताजा फसल मार्केट भाव</title>
        <meta name="description" content="हमारी वेबसाइट पर, किसानों के लिए ताजा फसल मार्केट भाव और अन्य कृषि परिवर्तनों की जानकारी उपलब्ध है। हम हर दिन मण्डी भाव की ताजा जानकारी अपडेट करते हैं, ताकि किसान समय पर अपने फसलों के लिए सही फायदेमंद मार्केट की तलाश कर सकें।" />
        <link rel="icon" href="/mandi.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://livemandi.in/"></link>
        <meta property="og:title" content="मण्डी भाव - किसानों के लिए ताजा फसल मार्केट भाव" />
        <meta property="og:description" content="हमारी वेबसाइट पर, किसानों के लिए ताजा फसल मार्केट भाव और अन्य कृषि परिवर्तनों की जानकारी उपलब्ध है। हम हर दिन मण्डी भाव की ताजा जानकारी अपडेट करते हैं, ताकि किसान समय पर अपने फसलों के लिए सही फायदेमंद मार्केट की तलाश कर सकें।" />
        <meta property="og:image" content="https://livemandi.in/imagelight2.jpg" />
        <meta property="og:url" content="https://livemandi.in/mandi" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Livemandi.in" />
        <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
        <link rel="author" href="https://livemandi.in/"></link>
        <meta charSet="utf-8"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
     crossorigin="anonymous"></script>
      </Head>

      <Navbar />






      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">मंडी भाव</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">राजस्थान के सभी बाजारों के भाव जानने के लिए नीचे दी गई तारीख पर क्लिक करें</p>
          </div>
          <div className="flex flex-wrap -m-2">

            {prices.map((price) => {
              return <Link key={price._id} href={`/post/${price.slug}`}><div className=" cursor-pointer p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center bg-gray-800  border p-4 rounded-lg">
                  {price.image != null && <img alt="bhav" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src={process.env.NEXT_PUBLIC_HOST + price.image} />}
                  {price.image == null && price.image_url != '' && <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src={price.image_url} alt="tech" />}
                  {price.image == null && price.image_url == '' && <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src='../assets/images/market.jpg' alt="tech" />}

                  {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="" /> */}
                  <div className="flex-grow">
                    <h2 className="text-white title-font text-lg font-bold">{price.timestamp}</h2>
                    <div class="flex">
                      <span class="text-sm inline-block py-1 px-2.5 mr-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded">{price.keywords[0]}</span>
                      {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded">Secondary</span> */}
                      <span class="text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-rose-600 text-white rounded">{price.keywords[1]}</span>
                      {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">Danger</span> */}
                      <span class="text-sm inline-block py-1 px-2.5 ml-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded">{price.keywords[2]}</span>
                      {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded">Info</span> */}
                      {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded">Light</span> */}
                      {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">Dark</span> */}
                    </div>
                  </div>
                </div>
              </div></Link>
            })}

          </div>
        </div>
      </section>

      {/* <div className='h-screen w-full'>
        <iframe height="100% " width="100%" src="https://visualize.data.gov.in/?inst=9ef84268-d588-465a-a308-a864a43d0070&vid=108216&embed=1" ></iframe>
        </div> */}



      <Footer/>

    </>
  );
}



export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/prices/`)
  const json_res = await res.json()
  let posts = JSON.parse(JSON.stringify(json_res))
  let prices = posts.posts
  console.log(prices)
  console.log("no error here")
  return {
    props: { prices: JSON.parse(JSON.stringify(prices)) }
  }
}

export default Mandi
