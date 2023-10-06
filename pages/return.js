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




<div class="dark:text-white dark:bg-gray-800"><div class="container mx-auto py-8 px-2 md:px-0"><h1 class="text-4xl font-bold mb-6">Refund and Cancellation Policy</h1><h2 class="text-2xl font-semibold mb-4">Refund Policy</h2><p class="mb-4">At Tensorcodes.com, our primary focus is customer satisfaction, which is why we strive to provide the best products and services. Please note that product images on our website are for representational purposes only and may vary slightly due to lighting conditions or other factors.</p><p class="mb-4">If you are unsatisfied with a product due to a major defect, we will review your case and provide a refund. The following conditions apply to our refund policy:</p><ul class="list-disc ml-8 mb-4"><li>Items can only be returned within a 7-day window from the date of delivery.</li><li>To initiate a return request, customers can visit <a href="https://codeswear.com/contact" class="text-blue-500">tensorcodes.com/return</a>.</li><li>A valid reason is required for returning an item.</li><li>Repeatedly returning items as an abuse of our return policy may result in declined return requests.</li><li>Customers cannot apply for a full refund if the item is part of a &quot;Deal of the Day&quot; offer.</li><li>In some cases where there is a slight mismatch between the product pictures and the actual product, return requests related to such mismatches may be rejected.</li><li>In rare cases where return pickup is not available with our courier partner, the customer is responsible for sending the product back to us for refund or replacement processing.</li></ul><h2 class="text-2xl font-semibold mb-4">Cancellation Policy</h2><p class="mb-4">To cancel your order, please contact us using the provided contact link. Orders can be canceled until they are shipped from our warehouse. Requests received more than 7 business days prior to the product delivery date will not be processed.</p><p class="mb-4">If you have any questions or concerns regarding our Refund and Cancellation Policy, please contact us at:</p><p class="mb-4">Call/Whatsapp: +91 7425967649<br/>Email: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="117270637451727e757462667470633f787f">mahendrakharra02@gmail.com</a><br/>Support Hours: 10 AM - 6 PM</p></div></div>

                <Footer />








            </>
                );
}
