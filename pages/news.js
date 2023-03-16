// TradingViewWidget.js
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { MdDateRange } from 'react-icons/md'
import Head from 'next/head'

const News = ({ news }) => {

  return (
    <>

      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>कृषि समाचार - फसलों से संबंधित ताज़ा खबरें और अपडेट्स</title>
        <meta name="description" content="कृषि खबरों का नवीनतम संग्रह, कृषि क्षेत्र में होने वाली हर घटना और बदलाव के बारे में। हमारी वेबसाइट पर आपको हमेशा अपडेट मिलेंगे।" />
        <link rel="icon" href="/mandi.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="शेयर बाजार,मंडी भाव राजस्थान Today,राजस्थान मंडी भाव, सरसों,किसान मंडी भाव,e-mandi bhav mp,राजस्थान मंडी भाव टुडे | ग्वार का,livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,शेयर मार्केट के अनुसार फसलों की मार्केट भाव,कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://livemadni.in/"></link>
        <meta property="og:title" content="कृषि समाचार - फसलों से संबंधित ताज़ा खबरें और अपडेट्स" />
        <meta property="og:description" content="कृषि खबरों का नवीनतम संग्रह, कृषि क्षेत्र में होने वाली हर घटना और बदलाव के बारे में। हमारी वेबसाइट पर आपको हमेशा अपडेट मिलेंगे।" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kaluramkharra/Data-Science-Learning-Codes/main/Plotly/Plotly%20charts/mandinews.jpg" />
        <meta property="og:url" content="https://livemandi.in/news/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Livemandi.in" />
        <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
        <link rel="author" href="https://livemandi.in/"></link>
        <meta charSet="utf-8"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
          crossorigin="anonymous"></script>
      </Head>

      <Navbar />

      <rssapp-ticker id="tkKdUMdkPHQo3jJp"></rssapp-ticker><script src="https://widget.rss.app/v1/ticker.js" type="text/javascript" async></script>
      {/* <rssapp-ticker id="toqVbAD3l5eo7qIF"></rssapp-ticker><script src="https://widget.rss.app/v1/ticker.js" type="text/javascript" async></script> */}

      <rssapp-carousel id="aFzgdWlnby7T6BHd"></rssapp-carousel><script src="https://widget.rss.app/v1/carousel.js" type="text/javascript" async></script>


      {/* <!-- ====== news Section --> */}
      <section class="my-2">
        <div class="">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div class="mx-auto max-w-[510px] text-center ">
                {/* <h3
                  class="my-2 text-lg font-semibold text-gray-900 sm:text-xl"
                >Kisan Market
                </h3> */}


              </div>
            </div>
          </div>


          <div class="flex justify-center flex-wrap items-center ">
            <div class="md:px-4 px-1 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-2 md:space-y-0 ">


              {news.map((post) => {
                return <div key={post._id} class="mx-2 flex justify-center">
                  <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      {post.image != null && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={process.env.NEXT_PUBLIC_HOST + post.image} alt="tech" />}
                      {post.image == null && post.image_url != '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={post.image_url} alt="tech" />}
                      {post.image == null && post.image_url == '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src='../assets/images/news.jpg' alt="tech" />}
                    </a>
                    <div class="flex text-white items-center px-6 py-3 bg-gray-800">
                      {/* <svg class="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
                          <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                        </svg> */}
                      <MdDateRange className='text-rose-500' />
                      <h5 class="mx-3 text-white text-sm font-medium">
                        {post.timestamp}
                        {/* {Date(post.timestamp).toLocaleString('en-us', { month: 'short', year: 'numeric' }).slice(0, 16)} */}
                      </h5>
                    </div>
                    <div class="p-6">
                      <h2 class="text-gray-900  mb-2 font-semibold text-lg">{post.title}</h2>
                      <p class="text-rose-600 text-base mb-4">
                        {/* {post.content.slice(0, 100).toString().replace(/<[^>]*>/g, '')} */}
                      </p>
                      <Link href={`/blog/${post.slug}`}><button class="px-3 py-2 hover:shadow-md bg-gray-900 text-white text-xs font-bold uppercase rounded leading-tight hover:bg-gray-900 ">और अधिक जानें</button></Link>
                    </div>
                  </div>
                </div>
              })}


            </div>
          </div>

        </div>
      </section>
      {/* --------------------------------------- */}



      <section class="text-gray-600 body-font">
        <div class="containerx px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">

            {news.map((post) => {
              return <div key={post._id} class="sm:w-1/2 mb-7 mx-2 bg-gray-100 md:mx-0  w-full md:w-1/2 rounded shadow-lg flex card text-grey-darkest">
                {post.image != null && <img class="w-1/2 h-full object-cover object-center rounded-l-lg" src={process.env.NEXT_PUBLIC_HOST + post.image} alt="tech" />}
                {post.image == null && post.image_url != '' && <img class="lw-1/2 h-full object-cover object-center rounded-l-lg" src={post.image_url} alt="tech" />}
                {post.image == null && post.image_url == '' && <img class="w-1/2 h-full object-cover object-center rounded-l-lg" src='../assets/images/news.jpg' alt="tech" />}
                {/* <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room Image" /> */}
                <div class="w-1/2 flex flex-col">
                  <div class="p-2 pb-0 flex-col">

                    <span class="text-md md:text-lg lg:text-xl font-semibold md:font-bold text-black">{post.title.slice(0, 70)} ...</span>
                    {/* <div class="flex items-center mt-4">
                      <div class="pr-2 text-xs">
                        <i class="fas fa-wifi text-green"></i> Free WiFi
                      </div>
                      <div class="px-2 text-xs">
                        <i class="text-grey-darker far fa-building"></i> 2mins to center
                      </div>
                    </div> */}
                    <Link href={`/blog/${post.slug}`}><button class="px-2 md:px-3 md:py-2 ml-2 my-1 py-1 hover:shadow-md bg-gray-800 text-white text-xs font-bold uppercase rounded leading-tight hover:bg-gray-900 ">और अधिक जानें</button></Link>

                  </div>
                  {/* <div
                    class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                    Read More
                    <i class="fas fa-chevron-right"></i>
                  </div> */}
                </div>
              </div>
            })}


            {/* <div id="app" class="sm:w-1/2 mb-7  bg-white w-full md:w-1/2 rounded shadow-md flex card text-grey-darkest">
              <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room Image" />
              <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">

                  <span class="text-2xl text-grey-darkest">£63.00<span class="text-lg">/PPPN</span></span>
                  <div class="flex items-center mt-4">
                    <div class="pr-2 text-xs">
                      <i class="fas fa-wifi text-green"></i> Free WiFi
                    </div>
                    <div class="px-2 text-xs">
                      <i class="text-grey-darker far fa-building"></i> 2mins to center
                    </div>
                  </div>
                </div>
                <div
                  class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                  Book Now
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
            <div id="app" class="sm:w-1/2 mb-7  bg-white w-full md:w-1/2 rounded shadow-md flex card text-grey-darkest">
              <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room Image" />
              <div class="w-1/2 flex flex-col">
                <div class="p-4 pb-0 flex-1">

                  <span class="text-3xl text-grey-darkest">£63.00<span class="text-lg">/PPPN</span></span>
                  <div class="flex items-center mt-4">
                    <div class="pr-2 text-xs">
                      <i class="fas fa-wifi text-green"></i> Free WiFi
                    </div>
                    <div class="px-2 text-xs">
                      <i class="text-grey-darker far fa-building"></i> 2mins to center
                    </div>
                  </div>
                </div>
                <div
                  class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                  Book Now
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
            <div id="app" class="sm:w-1/2 mb-7  bg-white w-full md:w-1/2 rounded shadow-md flex card text-grey-darkest">
              <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room Image" />
              <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">

                  <span class="text-2xl text-grey-darkest">£63.00<span class="text-lg">/PPPN</span></span>
                  <div class="flex items-center mt-4">
                    <div class="pr-2 text-xs">
                      <i class="fas fa-wifi text-green"></i> Free WiFi
                    </div>
                    <div class="px-2 text-xs">
                      <i class="text-grey-darker far fa-building"></i> 2mins to center
                    </div>
                  </div>
                </div>
                <div
                  class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                  Book Now
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>




      <rssapp-wall id="tkKdUMdkPHQo3jJp"></rssapp-wall><script src="https://widget.rss.app/v1/wall.js" type="text/javascript" async></script>
      {/* <rssapp-wall id="toqVbAD3l5eo7qIF"></rssapp-wall><script src="https://widget.rss.app/v1/wall.js" type="text/javascript" async></script> */}



      <Footer />

    </>
  );
}


export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/news/`)
  const json_res = await res.json()
  let posts = JSON.parse(JSON.stringify(json_res))
  let news = posts.posts
  console.log(news)
  console.log("here are all news")
  return {
    props: { news: JSON.parse(JSON.stringify(news)) }
  }
}

export default News