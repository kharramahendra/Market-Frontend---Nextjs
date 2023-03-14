import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';


import { Markup } from 'interweave';
import 'highlight.js/styles/base16/seti-ui.css'
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);



import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import Script from 'next/script'
import Link from 'next/link'
import Router from 'next/router'


const Post = ({ post }) => {
    const [render, setRender] = useState(false);
    const [hidedropdown, setHidedrop] = useState(true)


    useEffect(() => {
        hljs.initHighlighting();
        // const script = document.createElement('script')
        // script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903'
        // script.async = true
        // script.crossOrigin = 'anonymous'
        // document.head.appendChild(script)

    }, [post]);

    return (<>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>{post.title}</title>
            <meta property="og:image" content="https://livemandi.in/assets/images/dailymandi.jpg" ></meta>
            <meta name="description" key="desc" content={`${post.title} - हमारी वेबसाइट पर, किसानों के लिए ताजा फसल मार्केट भाव और अन्य कृषि परिवर्तनों की जानकारी उपलब्ध है।`} />
            <link rel="icon" href="/mandi.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
            <link rel="canonical" href={`https://livemandi.in/blog/${post.slug}`}></link>
            <meta name="keywords" content='ipl bhav live,शेयर बाजार,मंडी भाव राजस्थान Today,राजस्थान मंडी भाव, सरसों,किसान मंडी भाव,e-mandi bhav mp,राजस्थान मंडी भाव टुडे | ग्वार का,livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,timeofrajasthan ,कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)' />
            <meta property="og:title" content={`${post.title}`} />
            <meta property="og:description" content={`${post.title} - हमारी वेबसाइट पर, किसानों के लिए ताजा फसल मार्केट भाव और अन्य कृषि परिवर्तनों की जानकारी उपलब्ध है।`} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://livemandi.in/post/${post.slug}`} />
            {post.image != null && <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOST + post.image}`} />}
            {post.image == null && post.image_url != '' && <meta property="og:image" content={post.image_url} />}
            {post.image == null && post.image_url == '' && <meta property="og:image" content="https://livemandi.in/assets/images/dailymandi.jpg" />}
            {/* <meta property="og:image" content="https://livemandi.in/assets/images/dailymandi.jpg" /> */}
            {/* <meta property="og:image:width" content="820" />
            <meta property="og:image:height" content="580" />
            <meta property="og:image:type" content="image/jpg" /> */}

            {/* {post.image != null && <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOST + post.image}}`} />}
            {post.image == null && post.image_url != '' && <meta property="og:image" content={post.image_url} />}
            {post.image == null && post.image_url == '' && <meta property="og:image" content="../assets/images/market.jpg" />} */}
            <meta charSet="utf-8"></meta>
            <meta property="og:site_name" content={post.slug} />
            <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
            <link rel="author" href="https://livemandi.in/about"></link>
            {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
                crossorigin="anonymous"></script> */}

        </Head>
        <Navbar />


        <div className='flex flex-col justify-items-end items-end fixed top-80 right-0'>
            <div className='rounded-xs'>

                <FacebookShareButton
                    url={`https://livemandi.in/post/${post.slug}`} >
                    <FacebookIcon size={42} className="rounded-l-md drop-shadow-xl" />
                </FacebookShareButton>
            </div>
            <div className='rounded-sm'>
                <WhatsappShareButton className="rounded-sm"
                    url={`https://livemandi.in/post/${post.slug}`}>
                    <WhatsappIcon size={42} className="rounded-l-md drop-shadow-xl" />
                </WhatsappShareButton></div>
            {/* <div>
                <LinkedinShareButton
                    url={`https://livemandi.in/post/${post.slug}`} >
                    <LinkedinIcon size={42} className="rounded-l-md drop-shadow-xl" />
                </LinkedinShareButton>
            </div> */}
        </div>

        {post.category == 'Price' &&
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-5 pb-2 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="my-2 rounded-lg justify-center py-1 px-3 text-xl font-bold mx-auto text-pink-700">{post.timestamp}</h1>

                    </div></div></section>}


        {post.category == 'Price' && <div className="flex justify-center sticky top-2 left-2 ml-2">
            <div>
                <div className="dropdown relative ml-2 my-0">
                    <button onClick={() => { setHidedrop(!hidedropdown) }} className="dropdown-toggle px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm leading-tight uppercase rounded shadow-md  hover:shadow-lg   transition duration-150 ease-in-out flex items-center " aria-expanded="false"> फसल
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            className="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                        </svg>
                    </button>
                    <ul hidden={hidedropdown} className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none " aria-labelledby="dropdownMenuButton2" >
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent mx-3 text-gray-700 hover:bg-gray-100 " href="#jeera" >जीरा</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#guar" >ग्वार</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#rayda" >सरसों</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#isabgul" >इसबगोल</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent mx-3 text-gray-700 hover:bg-gray-100 " href="#bajra" >बाजरा</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#wheat" >गेहूँ</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#barley" >जौ</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#moong" >मूंग</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent mx-3 text-gray-700 hover:bg-gray-100 " href="#methi" >मेथी</a>
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#chana" >चना</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#moath" >मोथ</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#taramira" >तारामिरा</a >
                        </li>


                    </ul>
                </div>
            </div>
        </div>}


        <section class="pt-8 pb-10  lg:pb-20 lg:mx-20 md:mx-10 mx-1 ">
            <div class="containery">

                <div class="flex flex-wrap ">

                    <div class="w-full">
                        <div class="flex justify-items-end items-end">
                            {/* {post.category == 'News' &&
                                <span
                                    class="my-2 inline-block rounded-lg  py-1 px-3 text-lg font-semibold text-pink-700"
                                >
                                    {post.timestamp}

                                </span>
                            } */}
                        </div>



                        {/* {post.category == 'News' && <h2 class="font-sans my-2 lg:my-4 text-2xl font-bold  text-gray-900 sm:text-4xl ">
                            {post.title}
                        </h2>} */}
                        {post.category != 'News' && <p class="font-sans mb-2 lg:my-4 text-lg font-semibold  text-gray-900 sm:text-xl ">
                            हमारी वेबसाइट पर आपको मूंग, मोठ, चना, जीरा, गवार, ईसबगोल, बाजरा, सरसों, मूंगफली, गेहूं, जौ, ज्वार, तारामीरा आदि फसलो के <span className='font-bold'>आज के मंडी भाव</span> मिल जाएंगे
                        </p>}
                        {post.category != 'News' && <span
                            class="inline-block mb-6 mt-2 md:mb-10 h-[1px] w-full bg-body-color"
                        ></span>}
                        <Markup class="overflox-x-hidden postp" content={post.content} />
                        <span
                            class="inline-block mb-6 mt-6 md:mb-10 h-[1px] w-full bg-body-color"
                        ></span>
                    </div>
                </div>
            </div>

        </section>





        <Footer />
    </>

    )
}


export async function getServerSideProps(context) {

    const data = { slug: context.query.slug }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/singlepost/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    const json_res = await res.json()
    let post = JSON.parse(JSON.stringify(json_res.post))
    console.log(post)
    return {
        props: { post: JSON.parse(JSON.stringify(post)) }
    }
}
export default Post
