// TradingViewWidget.js
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function TradingViewWidget() {
   
   

    return (
        <>
<Navbar/>





<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"></h1>
      <p class="mb-8 leading-relaxed">हमारी वेबसाइट KisanBazaar.in कृषि व्यवसाय के प्रेरकों और उत्पादकों के लिए एक पूर्ण स्थान है। हमारे प्लेटफार्म पर, हम सभी तरह के कृषि उत्पादों और फसलों के लाइव मूल्यों की जानकारी प्रदान करते हुए किसानों को समय-समय पर अपडेट करते हैं।

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
