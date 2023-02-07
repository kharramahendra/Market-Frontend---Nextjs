// TradingViewWidget.js
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
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
                <meta property="og:image" content="https://kisanbazaar.vercel.app/imagelight.jpg" />
                <meta property="og:url" content="https://livemandi.in/mandi" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Livemandi.in" />
                <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
                <link rel="author" href="https://livemandi.in/"></link>
                <meta charSet="utf-8"></meta>
            </Head>
            <Navbar />





            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
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





            <Footer />








        </>
    );
}
