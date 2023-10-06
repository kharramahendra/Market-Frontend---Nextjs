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

import Script from 'next/script'


export default function TradingViewWidget() {



    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>About Us - tensorcodes.com</title>
                <meta name="description" content="Discover all the latest news, commodity prices, and resources for farmers on our comprehensive agriculture platform. Stay up-to-date with weather forecasts, market trends, and industry developments with our integrated news widget, weather widget, and stock widget. Empowering farmers with the information they need to thrive, all in one place." />
                <link rel="icon" href="/mandi.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
                <meta name="robots" content="index, follow"></meta>
                <link rel="canonical" href="https://tensorcodes.com/"></link>
                <meta property="og:title" content="About Us - tensorcodes.com" />
                <meta property="og:description" content="Discover all the latest news, commodity prices, and resources for farmers on our comprehensive agriculture platform. Stay up-to-date with weather forecasts, market trends, and industry developments with our integrated news widget, weather widget, and stock widget. Empowering farmers with the information they need to thrive, all in one place." />
                <meta property="og:image" content="https://tensorcodes.com/imagelight2.jpg" />
                <meta property="og:url" content="https://tensorcodes.com/mandi" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="tensorcodes.com" />
                <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
                <link rel="author" href="https://tensorcodes.com/"></link>
                <meta charSet="utf-8"></meta>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9133303325062307"
                    crossorigin="anonymous"></script>
            </Head>
            <Navbar />




            <div class="container mx-auto py-8">
  <h2 class="text-2xl font-semibold mb-4">Shipping Policy for TensorCodes.com</h2>

  <p class="mb-4">
    At TensorCodes.com, we are committed to providing our customers with a seamless and reliable shopping experience. This Shipping Policy outlines the important information regarding shipping, delivery, and related processes. Please take a moment to review this policy before making a purchase on our website.
  </p>

  <h3 class="text-xl font-semibold mb-2">1. Shipping Methods and Timeframes:</h3>
  <p class="mb-4">
    We offer a variety of shipping methods to cater to your specific needs. The available shipping options and estimated delivery times will be displayed at the checkout page. Please note that delivery times may vary depending on your location and the shipping method selected. We make every effort to meet or exceed the estimated delivery times.
  </p>

  <h3 class="text-xl font-semibold mb-2">2. Shipping Costs:</h3>
  <p class="mb-4">
    Shipping costs are calculated based on the weight, dimensions, and destination of your order. The shipping charges will be clearly displayed during the checkout process. Occasionally, we may offer free shipping promotions, which will be clearly communicated on our website.
  </p>

  <h3 class="text-xl font-semibold mb-2">3. Order Processing:</h3>
  <p class="mb-4">
    We strive to process and ship orders as quickly as possible. Typically, orders are processed within 1-2 business days after payment is received. However, processing times may be longer during high-demand periods or due to circumstances beyond our control.
  </p>

  <h3 class="text-xl font-semibold mb-2">4. Shipping Partners:</h3>
  <p class="mb-4">
    We work with trusted shipping partners to ensure the safe and timely delivery of your orders. Once your order is shipped, you will receive a tracking number via email, allowing you to track the status of your shipment.
  </p>

  {/* <!-- Continue the rest of the content in a similar manner --> */}

</div>


            </>
                );
}
