import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';


const Home = ({ }) => {

  const router = useRouter();
  const [hidesearch, setHidesearch] = useState(true)
  const [hidenotifications, setHidenav] = useState(true)
  const [hidedropdown, setHidedrop] = useState(true)
  const [query, setQuery] = useState('data science');

  const handlechange = (e) => {
    if (e.target.name == 'query') {
      setQuery(e.target.value)
    }
  }

  useEffect(() => {

    var js, fjs = document.getElementsByTagName('script')[0];
    if (!document.getElementById('weatherwidget-io-js')) {
      js = document.createElement('script');
      js.id = 'weatherwidget-io-js';
      js.src = 'https://weatherwidget.io/js/widget.min.js';
      fjs.parentNode.insertBefore(js, fjs);
    }
  })


  return (
    <>
      <Head>
        <title>Kisan Market</title>
        <meta name="description" content="Welcome to Tensorcodes! My name is Kalu Ram Kharra and I am the creator and sole operator of this website.
            I am passionate about using technology to solve real-world problems and help businesses and organizations reach their goals.
            On my site, you can find a variety of data science and machine learning projects and code examples that I have created. I believe in the
            power of education and am commited to sharing my knowledge and experience with others.
            In addition to my educational content, I also offer web development services to help clients build and maintain their own websites.
            I have a wealth of experience in this field and am ready to take on projects of any size.
            Thank you for visiting Tensorcodes. I hope you find my site helpful and informative, and I look forward to working with you in the future." />
        <link rel="icon" href="/favicon2.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="tensorcode,tensorcode.io,tensorcode io review,data science ,machine learning,deep learning, neural networks ,react django ,Rest framework ,tailwind css,nextjs django combination," />
        <meta property="og:title" content="Tensorcodes - Code editor" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
        <meta charSet="utf-8"></meta>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
          crossOrigin="anonymous"></script>
          
      </Head>




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


      {/* <Link href={'/p/market/sharemarket'}> */}
      <div className="relative cursor-pointer">

        <div className="absolute bg-black bg-opacity-0 w-full h-20 md:h-16 z-20 top-0 right-0">
          <h className="text-white text-lg"></h>
        </div>

        <div className="w-full z-10 overflow-x-hidden overflow-y-hidden h-20 lg:h-12">
          <div className="-mr-10 overflow-hidden overflow-y-hidden overflow-x-hidden">
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget">

              </div>

              <div className="tradingview-widget-copyright"></div>
              {/* <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                {JSON.stringify({
                  "symbols": [
                    {
                      "description": "GUAR BIKANER",
                      "proName": "NCDEX:GUARSEDBKN"
                    },
                    {
                      "description": "GUAR JODHPUR",
                      "proName": "NCDEX:GUARGUM5"
                    },
                    {
                      "description": "JEERA JODHPUR",
                      "proName": "NCDEX:JEERAJDR"
                    },
                    {
                      "description": "CAHANA BIKANER",
                      "proName": "NCDEX:CHANA"
                    },
                    {
                      "description": "BAJRA JAIPUR SPOT",
                      "proName": "NCDEX:BAJRA"
                    },
                    {
                      "description": "MOONG MERTA CITY SPOT",
                      "proName": "NCDEX:MOONG"
                    }
                  ],
                  "showSymbolLogo": true,
                  "colorTheme": "light",
                  "isTransparent": false,
                  "displayMode": "adaptive",
                  "locale": "in"
                })}
              </script> */}
            </div>
          </div>
          </div>


        <a className="weatherwidget-io z-10" href="https://forecast7.com/en/27d2073d75/nagaur/" data-label_1="NAGAUR" data-label_2="WEATHER" data-theme="original" data-basecolor="#111828" >NAGAUR WEATHER</a>

      </div>
      {/* </Link> */}



      {/* <!-- ====== Hero Section Start --> */}

      <div className="relative  bg-[url('/p/market/hero.jpg')] bg-opacity-75 bg-hero bg-no-repeat bg-cover bg-center">
        <div className="pt-[100px] pb-[110px] lg:pt-[100px] bg-gray-900  bg-opacity-50">
          <div className="flex flex-wrap">
            <div className="w-full lg:pt-20 px-4 lg:w-1/2 mx-auto">
              <div className="hero-content text-center ">
                <h1
                  className="font-sans font-bold text-4xl text-gray-100 mb-3  leading-snug  sm:text-[42px] lg:text-[40px] xl:text-[56px]"
                >
                  फसलों के मंडी मूल्यों, <br />
                  किसानों की तकनीकी <br />
                  और सरकारी समाचार
                </h1>
                <p className="mb-8 text-xl font-semibold text-gray-200">
                  {/* Welcome to our website,where you can find a collection of data science and machine learning codes,blogs and real-world projects that are designed to solve business problems. */}
                </p>



              </div>
            </div>
            {/* <div class="hidden px-4 lg:block lg:w-1/12"></div> */}

          </div>
        </div>
      </div>

      {/* <!-- ====== Hero Section End --> */}








      <div>
        <rssapp-imageboard id="toqVbAD3l5eo7qIF"></rssapp-imageboard><script src="https://widget.rss.app/v1/imageboard.js" type="text/javascript" async></script>

      </div>


    </>
  );
}


export async function getServerSideProps(context) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/home/`)
  // const json_res = await res.json()
  // let posts = JSON.parse(JSON.stringify(json_res))
  // let blogs = posts.blogs
  // let projects = posts.projects
  // let codes = posts.codes
  // console.log(blogs)
  // console.log(projects)
  // console.log(codes)
  return {
    props: { blogs: "nothing" }
    // props: { blogs: JSON.parse(JSON.stringify(blogs)), projects: JSON.parse(JSON.stringify(projects)), codes: JSON.parse(JSON.stringify(codes)) }
  }
}

export default Home