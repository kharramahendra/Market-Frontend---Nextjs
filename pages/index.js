import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { MdDateRange } from 'react-icons/md'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Ticker from '@/components/ticker';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';


import Script from 'next/script';
let tvScriptLoadingPromise;
// { news, prices }
const Home = ({ news, prices }) => {
  // const news = []
  // const prices = []
  useEffect(() => {

    // var js, fjs = document.getElementsByTagName('script')[0];
    // if (!document.getElementById('weatherwidget-io-js')) {
    //   js = document.createElement('script');
    //   js.id = 'weatherwidget-io-js';
    //   js.src = 'https://weatherwidget.io/js/widget.min.js';
    //   fjs.parentNode.insertBefore(js, fjs);
    // }


  })


  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>कृषि बाजार की ताज़ा खबरें - मंडियों और शेयर बाजार के आधार पर</title>
        <meta name="description" content="हमारे पूर्ण कृषि प्लेटफार्म पर, किसानों को सम्पूर्ण कृषि समाचार, फसल भाव, और स्रोतों की उपलब्धता प्रदान की जाती है। हमारी संलग्न समाचार विजेट, मौसम विजेट, और स्टॉक विजेट के साथ, उन्हें मौसम पूर्वानुमान, बाजार प्रवृत्तियों, और उद्योग विकास की ताजा जानकारी प्राप्त करने में मदद करते हैं। किसानों को सफल होने के लिए जरूरी जानकारी के साथ सशक्त करने का उद्देश्य, हमारी प्लेटफार्म पर।" />
        <link rel="icon" href="/mandi.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="मंडी भाव राजस्थान Today,राजस्थान मंडी भाव, सरसों,किसान मंडी भाव,e-mandi bhav mp,राजस्थान मंडी भाव टुडे | ग्वार का,Mandi Bhav up,livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,कृषि समाचार,फसल भाव ,विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://tensorcodes.com/"></link>
        <meta property="og:title" content="कृषि बाजार की ताज़ा खबरें - मंडियों और शेयर बाजार के आधार पर" />
        <meta property="og:description" content="हमारे पूर्ण कृषि प्लेटफार्म पर, किसानों को सम्पूर्ण कृषि समाचार, फसल भाव, और स्रोतों की उपलब्धता प्रदान की जाती है। हमारी संलग्न समाचार विजेट, मौसम विजेट, और स्टॉक विजेट के साथ, उन्हें मौसम पूर्वानुमान, बाजार प्रवृत्तियों, और उद्योग विकास की ताजा जानकारी प्राप्त करने में मदद करते हैं। किसानों को सफल होने के लिए जरूरी जानकारी के साथ सशक्त करने का उद्देश्य, हमारी प्लेटफार्म पर।" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kaluramkharra/Data-Science-Learning-Codes/main/Plotly/Plotly%20charts/1675701771339.jpg" />
        <meta property="og:url" content="https://tensorcodes.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="tensorcodes.com" />
        <link rel="publisher" href="https://www.linkedin.com/in/mahendra-kharra/"></link>
        <link rel="author" href="https://tensorcodes.com/"></link>
        <meta charSet="utf-8"></meta>
        <meta name='dmca-site-verification' content='QzJiL1B0bUZjYTZaOHNSdFFHb3JJUT090' />
        <meta name="google-site-verification" content="5xuVtd8xHhLkZJexi6H1FhYHSHtOEGLGH9KNOcMSFTY" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9133303325062307"
          crossorigin="anonymous"></script>
      </Head>

      <Navbar />
      <Ticker />




      {/* <Link href={'/p/market/sharemarket'}> */}
      {/* <div className="relative cursor-pointer">
        <a class="weatherwidget-io" href="https://forecast7.com/en/27d2073d75/nagaur/" data-label_1="NAGAUR" data-label_2="WEATHER" data-theme="pure" >NAGAUR WEATHER</a>
      </div> */}
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


      <section>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">मंडी भाव</h1>
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
                      class="text-xs font-semibold absolute top-0 right-0 bg-[#e87109] px-2 py-1 text-white mt-3 mr-3  transition duration-500 ease-in-out">
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
                    <span class="ml-1">{price.timestamp.slice(0,12)}</span>
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


      {/* <!-- ====== news Section --> */}
      <section class="my-2">
        <div class="">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div class="mx-auto max-w-[510px] text-center ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">कृषि समाचार</h1>


              </div>
            </div>
          </div>


          <div class="flex justify-center flex-wrap items-center ">
            <div class="md:px-4 px-1 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-2 md:space-y-0 ">


              {news.map((post) => {
                return <div key={post._id} class="mx-2 flex justify-center">
                  <div class="rounded-sm shadow-lg bg-white max-w-sm">
                    <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                      {post.image != null && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={process.env.NEXT_PUBLIC_HOST + post.image} alt="tech" />}
                      {post.image == null && post.image_url != '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={post.image_url} alt="tech" />}
                      {post.image == null && post.image_url == '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src='../assets/images/news.jpg' alt="tech" />}
                    </a>
                    <div class="flex text-black items-center px-6 py-3 bg-gray-100">
                      {/* <svg class="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
                          <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                        </svg> */}
                      <MdDateRange className='text-rose-600' />
                      <h5 class="mx-3 text-gray-900 text-sm font-medium">
                        {post.timestamp}
                        {/* {Date(post.timestamp).toLocaleString('en-us', { month: 'short', year: 'numeric' }).slice(0, 16)} */}
                      </h5>
                    </div>
                    <div class="p-6">
                      <h2 class="text-gray-900  mb-2 font-semibold text-lg">{post.title}</h2>
                      {/* <p class="text-rose-600 text-base mb-4">
                        {post.content.slice(0, 100).toString().replace(/<[^>]*>/g, '')}
                      </p> */}
                      <a href={`/blog/${post.slug}`} class="px-3 py-2 hover:shadow-md mt-auto bg-gray-900 text-white text-xs font-bold uppercase rounded-sm leading-tight hover:bg-gray-800 ">और अधिक जानें</a>
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
        <div class="container px-5 pt-24 pb-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">आज के <span className='font-bold text-rose-500'>लाइव </span> मंडी भाव - {Date().toString().slice(3, 15)}</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">सभी मंडी के आज के लाइव भाव (live mandi bhav) जानने के लिए नीचे दी गई फसल पर क्लिक करें</p>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://4.imimg.com/data4/QN/HG/MY-15510094/guar-gum-seed-500x500.jpg" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://bl-i.thgim.com/public/incoming/lx7sba/article66329939.ece/alternates/FREE_1200/IMG_BL10-JEERA8_3_1_E68TMDDE.jpg" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://cdn.healthybazar.com/images/product/large/healthybazar_16324129260.jpg" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://tiimg.tistatic.com/fp/1/002/891/barley-seeds-889.jpg" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://5.imimg.com/data5/ANDROID/Default/2022/5/SE/QN/HG/89593328/uc0feb89e1d70497fa5c42f9a5df6e2d9u-jpg-250x250.jpg" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://5.imimg.com/data5/MX/BG/FQ/SELLER-66914748/black-mustard-seed-rayda-brassica-nigra-500x500.jpg" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://2.wlimg.com/product_images/bc-full/dir_137/4084520/taramira-seeds-1493784716-2825705.jpeg" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://sofindia.co.in/wp-content/uploads/2022/07/kala-chana.png" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVke65fbP-15GeKWRmmsX25ICLjQnGHYRkg&usqp=CAU" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_w1JM_a9Zec5W7hU6xc3axb634kdhhSxGpiY5YWZE_dsNjgTQtCdJuLN0N4mVxGLUCqs&usqp=CAU" />
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
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtsP-EKmMNccn0mDJWAciukKlSY1Okr2hBw&usqp=CAU" />
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
        <div class="container mx-auto flex px-5 pt-8 items-center justify-center flex-col">
          {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="about" src="" /> */}
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"></h1>
            <h2 class="mb-8 text-lg sm:text:xl leading-relaxed text-gray-800 font-medium">आज के समय में भारत की अर्थव्यवस्था का बड़ा हिस्सा किसानों पर आधारित है। हम जानते हैं कि किसानों की बिक्री कीमतें सही न होने के कारण वे फायदे में नहीं रह पाते हैं। हमारी वेबसाइट एक ऐसी पहल है जो किसानों को उनकी फसल की सटीक बिक्री कीमतें प्रदान करती है।

              हमारी वेबसाइट पर आपको ग्वार सीड, जीरा, चना, बाजरा, सरसों, जौ, गेहूं जैसी कई फसलों की ताजा बिक्री कीमतें मिलेंगी। इससे आप अपनी फसल की सही बिक्री कीमतें तय कर सकते हैं और इससे आपके पैसे की बचत होगी।

              इसके अलावा, हमारी वेबसाइट आपको फसलों की भविष्यवाणी भी प्रदान करती है। हमारे चार्ट आपको फसलों के दरों के बारे में जानकारी प्रदान करते हैं और आप अपने फसल को उस समय बेच सकते हैं जब उसकी कीमत सबसे अधिक होती है।

              इससे आपके लिए नुकसान की संभावना कम होगी और आप फसलों की सही मूल्य के साथ फायदा उठा सकेंगे।

            </h2>
            <div class="flex justify-center">
              {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
        </div>
      </section>




      <div>

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