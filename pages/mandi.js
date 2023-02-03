// TradingViewWidget.js
import Navbar from '../components/navbar'
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

      <Navbar />



      {/* <div className="flex justify-center">
        <div>
          <div className="dropdown relative">
            <button onClick={() => { setHidedrop(!hidedropdown) }} className="dropdown-toggle px-6 py-2.5 bg-blue-900 hover:bg-gray-800 text-white font-medium text-sm leading-tight uppercase rounded shadow-md  hover:shadow-lg   transition duration-150 ease-in-out flex items-center " aria-expanded="false"> Commodity
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul hidden={hidedropdown} className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none " aria-labelledby="dropdownMenuButton2" >
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent mx-3 text-gray-700 hover:bg-gray-100 " href="#jeera" >JEERA</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#guar" >GUAR</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#rayda" >RAYDA</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#isabgul" >ISABGUL</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent mx-3 text-gray-700 hover:bg-gray-100 " href="#bajra" >BAJRA</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#wheat" >WHEAT</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#barley" >BARLEY</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#moong" >MOONG</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent mx-3 text-gray-700 hover:bg-gray-100 " href="#methi" >METHI</a>
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#chana" >CHANA</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#moath" >MOATH</a >
              </li>
              <li>
                <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#taramira" >TARAMIRA</a >
              </li>


            </ul>
          </div>
        </div>
      </div> */}


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Mandi Bhav</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lates prices of commodities in various local mandis.</p>
          </div>
          <div className="flex flex-wrap -m-2">

            {prices.map((price) => {
              return <Link key={price._id} href={`/post/${price.slug}`}><div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  {price.image != null && <img alt="bhav" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src={process.env.NEXT_PUBLIC_HOST / price.image} />}
                  {price.image == null && price.image_url != '' && <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src={price.image_url} alt="tech" />}
                  {price.image == null && price.image_url == '' && <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src='../assets/images/codes/temp4.jpg' alt="tech" />}

                  {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="" /> */}
                  <div className="flex-grow">
                    <h2 className="text-green-900 title-font text-lg font-bold">{price.timestamp}</h2>
                    <div class="flex">
                    <span class="text-sm inline-block py-1 px-2.5 mr-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded">{price.keywords[0]}</span>
                      {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded">Secondary</span> */}
                      <span class="text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-900 rounded">{price.keywords[1]}</span>
                      {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">Danger</span> */}
                      <span class="text-sm inline-block py-1 px-2.5 ml-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">{price.keywords[2]}</span>
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
      <Footer />

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