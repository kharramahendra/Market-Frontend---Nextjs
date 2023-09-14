// TradingViewWidget.js
import Navbar from '../components/navbar'
import Head from 'next/head'
import Footer from '../components/footer'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';
import Script from 'next/script';
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
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title> {Date().toString().slice(3, 15)} - मण्डी भाव - किसानों के लिए ताजा फसल मार्केट भाव |  Aaj Ke Mandi Bhav </title>
        <meta name="description" content="Mandi Bhav | Daily Mandi Bhav | Aaj Ke Mandi Bhav | Mandi Bhav in Hindi | मंडी भाव राजस्थान Today | मंडी भाव Today, किसानों के लिए ताजा फसल मंडी भाव की जानकारी उपलब्ध है। हम हर दिन मण्डी भाव की ताजा जानकारी अपडेट करते हैं, ताकि किसान समय पर अपने फसलों के लिए सही फायदेमंद मार्केट की तलाश कर सकें।" />
        <link rel="icon" href="/mandi.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="mandi de bhav punjab,mandi ke bhav punjab,Mandi Bhav Today,मंडी भाव राजस्थान Today,मंडी भाव,livemandi,live mandi,मंडी भाव राजस्थान Today,राजस्थान मंडी भाव, सरसों,किसान मंडी भाव,e-mandi bhav mp,राजस्थान मंडी भाव टुडे | ग्वार का,mandi bhav,live mandi bhav,aaj ke bhav,फसल भाव " />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://tensorcodes.com/"></link>
        <meta property="og:title" content="मण्डी भाव - किसानों के लिए ताजा फसल मार्केट भाव |  Aaj Ke Mandi Bhav " />
        <meta property="og:description" content="हमारी वेबसाइट पर, किसानों के लिए ताजा फसल मार्केट भाव और अन्य कृषि परिवर्तनों की जानकारी उपलब्ध है। हम हर दिन मण्डी भाव की ताजा जानकारी अपडेट करते हैं, ताकि किसान समय पर अपने फसलों के लिए सही फायदेमंद मार्केट की तलाश कर सकें।" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kaluramkharra/Data-Science-Learning-Codes/main/Plotly/Plotly%20charts/dailymandi.jpg" />
        <meta property="og:url" content="https://tensorcodes.com/mandi/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="tensorcodes.com" />
        <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
        <link rel="author" href="https://tensorcodes.com/"></link>
        <meta charSet="utf-8"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9133303325062307"
          crossorigin="anonymous"></script>
      </Head>
      <body>
        <Navbar />
        {/* <div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{Date().toString().slice(3, 15)} - मंडी भाव</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">सभी मंडी के भाव (mandi bhav) जानने के लिए नीचे दी गई तारीख पर क्लिक करें और <Link href={'/sharemarket'}><span className='font-bold text-black'> शेयर बाजार </span></Link> (share bazaar) पृष्ठ पर जाकर फसलों की लाइव आज के मंडी भाव (live mandi bhav) के बारे में जान सकते हैं।</p>
        </div> */}


        <section>
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="flex flex-col text-center w-full mb-8">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{Date().toString().slice(3, 15)} - मंडी भाव</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">सभी मंडी के भाव (mandi bhav) जानने के लिए नीचे दी गई तारीख पर क्लिक करें और <Link href={'/sharemarket'}><span className='font-bold text-black'> शेयर बाजार </span></Link> (share bazaar) पृष्ठ पर जाकर फसलों की लाइव आज के मंडी भाव (live mandi bhav) के बारे में जान सकते हैं।</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">


              {prices.map((price) => {
                return <div key={price._id} class="rounded overflow-hidden shadow-lg flex flex-col" >
                  {/* {postcontent ? postcontent.slice(0, -14) : "this post is deleted"} ... */}
                  {/* <a href={item.url}></a> */}
                  <div class="relative">

                    {price.image != null && <img alt="bhav" className="w-full max-h-56 object-cover" src={process.env.NEXT_PUBLIC_HOST + price.image} />}
                    {price.image == null && price.image_url != '' && <img className="w-full max-h-56 object-cover" src={price.image_url} alt="tech" />}
                    {price.image == null && price.image_url == '' && <img className="w-full max-h-56 object-cover" src='../assets/images/market.jpg' alt="tech" />}


                    <a >
                      <div
                        class="text-xs font-semibold absolute top-0 right-0 bg-pink-700 px-2 py-1 text-white mt-3 mr-3  transition duration-500 ease-in-out">
                        Tensorcodes
                      </div>
                    </a>
                  </div>
                  <div class="px-6 py-4 mb-auto">
                    <a
                      class="font-medium text-lg  hover:text-gray-800 transition duration-500 ease-in-out inline-block mb-2">{price.title}</a>
                    <p class="text-gray-500 text-sm flex ">
                      {price.timestamp} के सभी मंडी के सभी फसल के मंडी भाव ... {price.keywords[0]}, {price.keywords[1]}, {price.keywords[2]} ...
                    </p>

                  </div>
                  <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                    <span class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                      <svg height="13px" width="13px" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" viewBox="0 0 512 512"
                        space="preserve">
                        <g>
                          <g>
                            <path
                              d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                            </path>
                          </g>
                        </g>
                      </svg>
                      <span class="ml-1">{price.timestamp.slice(0, 12)}</span>
                    </span>

                    <WhatsappShareButton className='bg-[#128c7e]'
                      url={`https://tensorcodes.com/post/${price.slug}`}
                      title={`${price.title} + " ... click 👉 `}
                      separator=":: "
                    >
                      <div class="bg-[#128c7e] uppercase leading-normal text-white hover:bg-[#12aa98] rounded-sm px-6 py-[0.55rem]  transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 "
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </div>
                    </WhatsappShareButton>

                    <span class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                      <a href={`/post/${price.slug}`} class="inline-flex items-center rounded-sm border  bg-gray-900 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-800">Read More</a>
                    </span>
                  </div>
                </div>
              })}






            </div>

            {/* <div className="flex flex-col text-center mb-8">
          <Link href={`/mandi`}><button class="px-3 py-2 hover:shadow-md bg-gray-900 text-white text-xs font-bold uppercase rounded leading-tight hover:bg-gray-900 ">और अधिक</button></Link>
          </div> */}
          </div>
        </section>




        <Footer />
      </body>
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
