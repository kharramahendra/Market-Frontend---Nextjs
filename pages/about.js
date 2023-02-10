// TradingViewWidget.js
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
import { MdDateRange } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'




export default function TradingViewWidget() {



    return (
        <>
            <Head>
                <title>About Us - LiveMandi.in</title>
                <meta name="description" content="Discover all the latest news, commodity prices, and resources for farmers on our comprehensive agriculture platform. Stay up-to-date with weather forecasts, market trends, and industry developments with our integrated news widget, weather widget, and stock widget. Empowering farmers with the information they need to thrive, all in one place." />
                <link rel="icon" href="/mandi.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
                <meta name="robots" content="index, follow"></meta>
                <link rel="canonical" href="https://livemandi.in/"></link>
                <meta property="og:title" content="About Us - LiveMandi.in" />
                <meta property="og:description" content="Discover all the latest news, commodity prices, and resources for farmers on our comprehensive agriculture platform. Stay up-to-date with weather forecasts, market trends, and industry developments with our integrated news widget, weather widget, and stock widget. Empowering farmers with the information they need to thrive, all in one place." />
                <meta property="og:image" content="https://livemandi.in/imagelight2.jpg" />
                <meta property="og:url" content="https://livemandi.in/mandi" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Livemandi.in" />
                <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
                <link rel="author" href="https://livemandi.in/"></link>
                <meta charSet="utf-8"></meta>
            </Head>
            <Navbar />





            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="about" src="/logolight2.png" />
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"></h1>
                        <p class="mb-8 leading-relaxed">हमारी वेबसाइट livemandi.in कृषि व्यवसाय के प्रेरकों और उत्पादकों के लिए एक पूर्ण स्थान है। हमारे प्लेटफार्म पर, हम सभी तरह के कृषि उत्पादों और फसलों के लाइव मूल्यों की जानकारी प्रदान करते हुए किसानों को समय-समय पर अपडेट करते हैं।

                            हमारे प्लेटफार्म पर, हम किसानों के लिए मौसम और कृषि से जुड़े सभी ताजा खबरों को भी अपलोड करते हैं, जो उन्हें अपनी उत्पादन प्रक्रिया और विपणि प्रक्रिया में मदद करती हैं।

                            हमारे प्लेटफार्म के मुख्य उद्देश्य किसानों को उनके व्यवसाय में सफलता प्राप्त करने में मदद करना हैं।</p>
                        <div class="flex justify-center">
                            {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                        </div>
                    </div>
                </div>
            </section>





            <section class="text-gray-600 body-font">
                <div class="containerx px-5 pb-24 pt-16 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">A small group of dedicated individuals, making big things happen.</p>
                    </div>
                    <div class="flex flex-wrap mx-auto">
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" class="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/kharra.png" />
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Kalu Ram Kharra</h2>
                                    <h3 class="text-gray-500 mb-3">Web Developer</h3>
                                    <p class="mb-4">Empowering the digital world,<br /> one line of code at a time.</p>
                                    <span class="inline-flex">
                                        <a class="ml-2 text-blue-600" href='https://www.linkedin.com/in/kaluram-kharra/' target="_blank">
                                            <BsLinkedin />
                                        </a>
                                        <a class="ml-2 text-black" href='https://github.com/kaluramkharra' target="_blank">
                                            <BsGithub />
                                        </a>
                                        <a class="ml-2 text-blue-700" href='https://www.facebook.com/kaluram.kharra' target="_blank">
                                            <BsFacebook />
                                        </a>
                                        <a class="ml-2 text-pink-600" href='https://www.instagram.com/kharra_kaluram/' target="_blank">
                                            <BsInstagram />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" class="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/dhaka.jpg" />
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Mukesh Dhaka</h2>
                                    <h3 class="text-gray-500 mb-3">Content creator</h3>
                                    <p class="mb-4">Crafting stories for the digital age,<br /> with passion and creativity.</p>
                                    <span class="inline-flex">
                                        <a class="ml-2 text-blue-600" href='https://www.linkedin.com/in/mukesh-dhaka-54148721b' target="_blank">
                                            <BsLinkedin />
                                        </a>
                                        {/* <a class="ml-2 text-black" href='https://github.com/kaluramkharra' target="_blank">
                                            <BsGithub />
                                        </a> */}
                                        <a class="ml-2 text-blue-700" href='https://www.facebook.com/rakeshchoudhary.teja' target="_blank">
                                            <BsFacebook />
                                        </a>
                                        <a class="ml-2 text-pink-600" href='https://www.instagram.com/mukeshdhaka1729/' target="_blank">
                                            <BsInstagram />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">A small group of dedicated individuals, making big things happen.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" class="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/kharra.png" />
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Kalu Ram Kharra</h2>
                                    <h3 class="text-gray-500 mb-3">Web Developer</h3>
                                    <p class="mb-4">Empowering the digital world,one line of code at a time.</p>
                                    <span class="inline-flex">
                                        <a class="ml-2 text-blue-600" href='https://www.linkedin.com/in/kaluram-kharra/' target="_blank">
                                            <BsLinkedin />
                                        </a>
                                        <a class="ml-2 text-black" href='https://github.com/kaluramkharra' target="_blank">
                                            <BsGithub />
                                        </a>
                                        <a class="ml-2 text-blue-700" href='https://www.facebook.com/kaluram.kharra' target="_blank">
                                            <BsFacebook />
                                        </a>
                                        <a class="ml-2 text-pink-600" href='https://www.instagram.com/kharra_kaluram/' target="_blank">
                                            <BsInstagram />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" class="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/dhaka.jpg" />
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Mukesh Dhaka</h2>
                                    <h3 class="text-gray-500 mb-3">Content Creator</h3>
                                    <p class="mb-4">Crafting stories for the digital age, with passion and creativity.</p>
                                    <span class="inline-flex">
                                        <a class="ml-2 text-blue-600" href='https://www.linkedin.com/in/mukesh-dhaka-54148721b' target="_blank">
                                            <BsLinkedin />
                                        </a>
                                        {/* <a class="ml-2 text-black" href='https://github.com/kaluramkharra' target="_blank">
                                            <BsGithub />
                                        </a> */}
                                        <a class="ml-2 text-blue-700" href='https://www.facebook.com/rakeshchoudhary.teja' target="_blank">
                                            <BsFacebook />
                                        </a>
                                        <a class="ml-2 text-pink-600" href='https://www.instagram.com/mukeshdhaka1729/' target="_blank">
                                            <BsInstagram />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





            <Footer />








        </>
    );
}
