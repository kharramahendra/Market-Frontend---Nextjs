import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = ({ news,prices }) => {
  
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

      <Navbar />


      


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
              <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
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
              </script>
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
      <Footer />

    </>
  );
}


export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/home/`)
  const json_res = await res.json()
  let posts = JSON.parse(JSON.stringify(json_res))
  let news = posts.news
  let prices = posts.prices
  console.log(prices)
  return {
    props: { news: JSON.parse(JSON.stringify(news)), prices: JSON.parse(JSON.stringify(prices)) }
  }
}

export default Home