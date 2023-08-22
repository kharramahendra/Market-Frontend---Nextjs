import React from 'react'
// export const config = { amp: true }
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
   


    useEffect(() => {
        hljs.initHighlighting();
        // const script = document.createElement('script')
        // script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903'
        // script.async = true
        // script.crossOrigin = 'anonymous'
        // document.head.appendChild(script);

    }, [post]);

    return (<>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>{post.title}</title>
            <meta property="og:image" content="https://tensorcodes.com/assets/images/dailymandi.jpg" ></meta>
            <meta name="description" key="desc" content={`${post.title} - हमारी वेबसाइट पर, किसानों के लिए ताजा फसल मार्केट भाव और अन्य कृषि परिवर्तनों की जानकारी उपलब्ध है।`} />
            <link rel="icon" href="/mandi.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href={`https://tensorcodes.com/blog/${post.slug}`}></link>
            <meta name="keywords" content='ipl bhav live,शेयर बाजार,मंडी भाव राजस्थान Today,राजस्थान मंडी भाव, सरसों,किसान मंडी भाव,e-mandi bhav mp,राजस्थान मंडी भाव टुडे | ग्वार का,livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,timeofrajasthan ,कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)' />
            <meta property="og:title" content={`${post.title}`} />
            <meta property="og:description" content={`${post.title} - हमारी वेबसाइट पर, किसानों के लिए ताजा फसल मार्केट भाव और अन्य कृषि परिवर्तनों की जानकारी उपलब्ध है।`} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://tensorcodes.com/post/${post.slug}`} />
            {post.image != null && <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOST + post.image}`} />}
            {post.image == null && post.image_url != '' && <meta property="og:image" content={post.image_url} />}
            {post.image == null && post.image_url == '' && <meta property="og:image" content="https://tensorcodes.com/assets/images/dailymandi.jpg" />}

            <meta charSet="utf-8"></meta>
            <meta property="og:site_name" content={post.slug} />
            <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
            <link rel="author" href="https://tensorcodes.com/about"></link>

            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
          crossorigin="anonymous"></Script>
        </Head>

        <body>

            <Navbar />

            
            <div className='flex flex-col justify-items-end items-end fixed top-80 right-0'>
                <div className='rounded-sm'>
                    <WhatsappShareButton className="rounded-sm"
                        url={`https://tensorcodes.com/post/${post.slug}`}>
                        <WhatsappIcon size={42} className="rounded-l-md drop-shadow-xl" />
                    </WhatsappShareButton></div>
                <div className='rounded-xs'>
                    <FacebookShareButton
                        url={`https://tensorcodes.com/post/${post.slug}`} >
                        <FacebookIcon size={42} className="rounded-l-md drop-shadow-xl" />
                    </FacebookShareButton>
                </div>
            </div>




            <section class="pt-8 pb-10  lg:pb-20 lg:mx-20 md:mx-10 mx-1 ">
                <div class="containery">

                    <div class="flex flex-wrap ">

                        <div class="w-full">

                            {/* {post.category == 'News' && <h2 class="font-sans my-2 lg:my-4 text-2xl font-bold  text-gray-900 sm:text-4xl ">
                            {post.title}
                        </h2>} */}


                            {/* <Markup class="overflox-x-hidden postp" content={post.content} /> */}

                            <div class="overflox-x-hidden" dangerouslySetInnerHTML={{ __html: post.content }} />
                            

                            <span
                                class="inline-block mb-6 mt-6 md:mb-10 h-[1px] w-full bg-body-color"
                            ></span>
                        </div>
                    </div>
                </div>

            </section>


            {/* <div class="h-[30vh] md:h-[50vh] lg:h-[70vh] max-h-screen"><iframe width="100%" height="100%" class="w-full min-h-full" src="https://www.youtube.com/embed/zMZ6IBCQCm8" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div> */}



            <Footer />
        </body>
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
