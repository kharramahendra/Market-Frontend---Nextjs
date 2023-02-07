import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { MdDateRange } from 'react-icons/md'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = ({ news, prices }) => {

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
        <title>कृषि क्षेत्र के लिए अद्यतन समाचार और मार्केट की जानकारी</title>
        <meta name="description" content="हमारे पूर्ण कृषि प्लेटफार्म पर, किसानों को सम्पूर्ण कृषि समाचार, फसल भाव, और स्रोतों की उपलब्धता प्रदान की जाती है। हमारी संलग्न समाचार विजेट, मौसम विजेट, और स्टॉक विजेट के साथ, उन्हें मौसम पूर्वानुमान, बाजार प्रवृत्तियों, और उद्योग विकास की ताजा जानकारी प्राप्त करने में मदद करते हैं। किसानों को सफल होने के लिए जरूरी जानकारी के साथ सशक्त करने का उद्देश्य, हमारी प्लेटफार्म पर।" />
        <link rel="icon" href="/mandi.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://livemandi.in/"></link>
        <meta property="og:title" content="कृषि क्षेत्र के लिए अद्यतन समाचार और मार्केट की जानकारी" />
        <meta property="og:description" content="हमारे पूर्ण कृषि प्लेटफार्म पर, किसानों को सम्पूर्ण कृषि समाचार, फसल भाव, और स्रोतों की उपलब्धता प्रदान की जाती है। हमारी संलग्न समाचार विजेट, मौसम विजेट, और स्टॉक विजेट के साथ, उन्हें मौसम पूर्वानुमान, बाजार प्रवृत्तियों, और उद्योग विकास की ताजा जानकारी प्राप्त करने में मदद करते हैं। किसानों को सफल होने के लिए जरूरी जानकारी के साथ सशक्त करने का उद्देश्य, हमारी प्लेटफार्म पर।" />
        <meta property="og:image" content="https://kisanbazaar.vercel.app/imagelight2.jpg" />
        <meta property="og:url" content="https://livemandi.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Livemandi.in" />
        <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
        <link rel="author" href="https://livemandi.in/"></link>
        <meta charSet="utf-8"></meta>
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
                      "description": "जौ",
                      "proName": "NCDEX:BARLEYJPR"
                    },
                    {
                      "description": "सरसों",
                      "proName": "NCDEX:RMSEED"
                    },
                    {
                      "description": "GUAR BIKANER",
                      "proName": "NCDEX:GUARSEDBKN"
                    },
                    {
                      "description": "GUAR JODHPUR",
                      "proName": "NCDEX:GUARSEED10"
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


        <a class="weatherwidget-io" href="https://forecast7.com/en/27d2073d75/nagaur/" data-label_1="NAGAUR" data-label_2="WEATHER" data-theme="pure" >NAGAUR WEATHER</a>
      </div>
      {/* </Link> */}



      {/* <!-- ====== Hero Section Start --> */}
      <div className="relative  bg-[url('/assets/images/hero.jpg')] bg-opacity-75 bg-hero bg-no-repeat bg-cover bg-center">
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


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">मंडी भाव</h1>

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


      {/* <!-- ====== news Section --> */}
      <section class="my-2">
        <div class="">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div class="mx-auto max-w-[510px] text-center ">
                <h3
                  class="my-4 text-lg font-semibold text-gray-900 sm:text-xl"
                >Kisan Market
                </h3>


              </div>
            </div>
          </div>


          <div class="flex justify-center flex-wrap items-center ">
            <div class="md:px-4 px-1 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-2 md:space-y-0 ">


              {news.map((post) => {
                return <div key={post._id} class="mx-2 flex justify-center">
                  <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                      {post.image != null && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={process.env.NEXT_PUBLIC_HOST + post.image} alt="tech" />}
                      {post.image == null && post.image_url != '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={post.image_url} alt="tech" />}
                      {post.image == null && post.image_url == '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src='../assets/images/news.jpg' alt="tech" />}
                    </a>
                    <div class="flex text-white items-center px-6 py-3 bg-gray-900">
                      {/* <svg class="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
                          <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                        </svg> */}
                      <MdDateRange className='text-rose-600' />
                      <h5 class="mx-3 text-white text-sm font-medium">
                        {post.timestamp}
                        {/* {Date(post.timestamp).toLocaleString('en-us', { month: 'short', year: 'numeric' }).slice(0, 16)} */}
                      </h5>
                    </div>
                    <div class="p-6">
                      <h2 class="text-gray-900  mb-2 font-semibold text-lg">{post.title}</h2>
                      <p class="text-rose-600 text-base mb-4">
                        {post.content.slice(0, 100).toString().replace(/<[^>]*>/g, '')}
                      </p>
                      <Link href={`/post/${post.slug}`}><button class="px-3 py-2 hover:shadow-md bg-gray-900 text-white text-xs font-bold uppercase rounded leading-tight hover:bg-gray-900 ">और अधिक जानें</button></Link>
                    </div>
                  </div>
                </div>
              })}


            </div>
          </div>

        </div>
      </section>
      {/* --------------------------------------- */}







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