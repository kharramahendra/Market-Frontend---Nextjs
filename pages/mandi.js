// TradingViewWidget.js

import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const [hidesearch, setHidesearch] = useState(true)
  const [hidenotifications, setHidenav] = useState(true)
  const [hidedropdown, setHidedrop] = useState(true)
  const [query, setQuery] = useState('data science');
  const handlechange = (e) => {
    if (e.target.name == 'query') {
      setQuery(e.target.value)
    }
  }
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




      <div className="flex justify-center">
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
      </div>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Mandi Bhav</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lates prices of commodities in various local mandis.</p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">2 Feb 2023</h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">1 Feb 2023</h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">31 Dec 2023</h2>
                  <p className="text-gray-500">Founder</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                  <p className="text-gray-500">DevOps</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                  <p className="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                  <p className="text-gray-500">QA Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                  <p className="text-gray-500">System</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                  <p className="text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
