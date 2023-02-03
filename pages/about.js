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






            {/* <!-- ====== Hero Section Start --> */}

            <div className="relative  bg-[url('/p/market/hero.jpg')] bg-opacity-75 bg-hero bg-no-repeat bg-cover bg-center">
                <div className="pt-[100px] pb-[110px] lg:pt-[100px]  bg-gray-900 bg-opacity-50">
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






            <Footer />








        </>
    );
}
