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




<div class="dark:text-white dark:bg-gray-800">
<div class="container mx-auto py-8 px-2 md:px-0">
<h1 class="text-4xl font-bold mb-6">Terms and Conditions</h1>
<h2 class="text-2xl font-semibold mb-4">1. Introduction</h2>
<p class="mb-4">Welcome to Codeswear! These terms and conditions (&quot;Terms&quot;) govern your access to and use of our ecommerce website (the &quot;Website&quot;). By using the Website, you agree to be bound by these Terms. If you do not agree with these Terms, please refrain from using our Website.</p><h2 class="text-2xl font-semibold mb-4">2. Intellectual Property</h2><p class="mb-4">All intellectual property rights, including but not limited to trademarks, logos, and designs, displayed on the Website are the property of Codeswear. You are prohibited from using, copying, or distributing any content from the Website without our prior written consent.</p><h2 class="text-2xl font-semibold mb-4">3. Product Information</h2><p class="mb-4">We make every effort to provide accurate and up-to-date information about our products on the Website. However, we do not guarantee the accuracy, completeness, or reliability of any product information. You acknowledge that the actual colors, dimensions, and specifications of products may differ from the images and descriptions displayed on the Website.</p><h2 class="text-2xl font-semibold mb-4">4. Order Acceptance and Pricing</h2><p class="mb-4">All orders placed through the Website are subject to our acceptance. We reserve the right to refuse or cancel any order at any time for any reason. In the event of a pricing error on the Website, we may refuse or cancel any such orders, even if the order has been confirmed and payment has been made. We will notify you of any changes or cancellations related to your order.</p><h2 class="text-2xl font-semibold mb-4">5. Limitation of Liability</h2><p class="mb-4">To the extent permitted by applicable law, Codeswear shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages, including but not limited to loss of profits, data, or business opportunities arising out of your use of the Website or any products purchased from us.</p><h2 class="text-2xl font-semibold mb-4">6. Governing Law</h2><p class="mb-4">These Terms shall be governed by and construed in accordance with the laws of Uttar Pradesh, India. Any legal action or proceeding arising out of or relating to these Terms shall be exclusively brought in the courts located in Uttar Pradesh, India.</p><h2 class="text-2xl font-semibold mb-4">7. Changes to the Terms and Conditions</h2><p class="mb-4">We reserve the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website after the posting of changes constitutes your acceptance of the revised Terms.</p><h2 class="text-2xl font-semibold mb-4">8. Contact Us</h2><p class="mb-4">If you have any questions or concerns regarding these Terms, please contact us at:</p><p class="mb-4">CWH Solutions<br/>94, Ghair Saifuddin Domehla Road,<br/>Rampur, Uttar Pradesh, 244901<br/>Customer Support: Call/Whatsapp: +91 707 807 3838<br/>Email: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fc9f9d8e99bc9f9398998f8b999d8ed29592">[email&#160;protected]</a><br/>Support Hours: 10 AM - 6 PM (Morning)</p></div></div>




                <Footer />








            </>
                );
}
