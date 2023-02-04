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

    useEffect(() => {
        hljs.initHighlighting();


    }, [post]);

    return (<>
        <Head>

            <title>{post.title} - Tensorcodes.com</title>
            <meta name="description" content={`${post.content.slice(0, 300).toString().replace(/<[^>]*>/g, '')}`} />
            <link rel="icon" href="/favicon2.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="robots" content="index, follow"></meta>
            <link rel="canonical" href={`https://tensorcodes.com/post/${post.slug}`}></link>
            <meta name="keywords" content={`tensorcode,tensorcode.io,tensorcode io review,${post.keywords.toString()} ,real-world machine learning applications,data science case studies,machine learning projects for beginners,problem-solving with machine learning,real-world data science projects,machine learning in business,industry specific machine learning,machine learning for social good,machine learning in healthcare`} />
            <meta property="og:title" content={`${post.title} - Tensorcodes.com`} />
            <meta property="og:description" content={`${post.category} ${post.sub_category} ${post.content.slice(0, 300).toString().replace(/<[^>]*>/g, '')}`} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://tensorcodes.com/post/${post.slug}`} />
            {post.image != null && <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOST / post.image}}`} />}
            {post.image == null && post.image_url != '' && <meta property="og:image" content={post.image_url} />}
            {post.image == null && post.image_url == '' && <meta property="og:image" content="../assets/images/codes/temp4.jpg" />}
            <meta charSet="utf-8"></meta>
            <meta property="og:site_name" content="Tensorcodes posts" />
            <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
            <link rel="author" href="https://tensorcodes.com/about"></link>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
                crossorigin="anonymous"></script>

        </Head>
        <Navbar />

{/* 
        <section class="pt-8 pb-10  lg:pb-20 lg:mx-20 md:mx-10 mx-1 ">
            <div class="containery">

                <div class="flex flex-wrap ">

                    <div class="w-full">
                        <div class="flex justify-items-end items-end">
                            <span
                                class="my-2 inline-block rounded-lg bg-purple-700 py-1 px-3 text-sm font-semibold text-white"
                            >
                                {post.timestamp}

                            </span>
                            <div className=' justify-items-end items-end'>

                                <FacebookShareButton
                                    url={`https://tensorcodes.com/post/${post.slug}`} >
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                
                                <WhatsappShareButton
                                    url={`https://tensorcodes.com/post/${post.slug}`}>
                                    <WhatsappIcon size={32} round />
                                </WhatsappShareButton>
                                <LinkedinShareButton
                                    url={`https://tensorcodes.com/post/${post.slug}`} >
                                    <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                            </div>
                        </div>
                        <h2 class="font-sans my-2 lg:my-4 text-2xl font-bold  text-gray-900 sm:text-4xl md:text-[40px]">
                            {post.title}
                        </h2>

                        <span
                            class="inline-block mb-6 mt-2 md:mb-10 h-[1px] w-full bg-body-color"
                        ></span>
                        <Markup class="overflox-x-hidden postp" content={post.content} />
                        <span
                            class="inline-block mb-6 mt-6 md:mb-10 h-[1px] w-full bg-body-color"
                        ></span>
                    </div>
                </div>
            </div>

        </section> */}
<section class="pt-8 pb-10  lg:pb-20 lg:mx-20 md:mx-10 mx-1 ">
            <div class="containery">

                <div class="flex flex-wrap ">

                    <div class="w-full">
                        <div class="mb-8 w-full">
                            <div
                                class="rounded-lg border border-light  py-3 px-4 shadow-sm sm:px-6 md:px-8 md:py-5"
                            >
                                <ul class="flex items-center">
                                    <li class="flex items-center">
                                        <a
                                            href="javascript:void(0)"
                                            class="flex items-center text-base font-semibold text-gray-900 hover:text-opacity-80"
                                        >
                                            <span class="pr-2">
                                                <svg width="15" height="15" viewBox="0 0 15 15" class="fill-current">
                                                    <path d="M13.3503 14.6503H10.2162C9.51976 14.6503 8.93937 14.0697 8.93937 13.3729V10.8182C8.93937 10.5627 8.73043 10.3537 8.47505 10.3537H6.54816C6.29279 10.3537 6.08385 10.5627 6.08385 10.8182V13.3497C6.08385 14.0464 5.50346 14.627 4.80699 14.627H1.62646C0.929989 14.627 0.349599 14.0464 0.349599 13.3497V5.24431C0.349599 4.89594 0.535324 4.5708 0.837127 4.385L6.96604 0.506501C7.29106 0.297479 7.73216 0.297479 8.05717 0.506501L14.1861 4.385C14.4879 4.5708 14.6504 4.89594 14.6504 5.24431V13.3265C14.6504 14.0697 14.07 14.6503 13.3503 14.6503ZM6.52495 9.54086H8.45184C9.14831 9.54086 9.7287 10.1215 9.7287 10.8182V13.3497C9.7287 13.6052 9.93764 13.8142 10.193 13.8142H13.3503C13.6057 13.8142 13.8146 13.6052 13.8146 13.3497V5.26754C13.8146 5.19786 13.7682 5.12819 13.7218 5.08174L7.61608 1.20324C7.54643 1.15679 7.45357 1.15679 7.40714 1.20324L1.27822 5.08174C1.20858 5.12819 1.18536 5.19786 1.18536 5.26754V13.3729C1.18536 13.6284 1.3943 13.8374 1.64967 13.8374H4.80699C5.06236 13.8374 5.2713 13.6284 5.2713 13.3729V10.8182C5.24809 10.1215 5.82848 9.54086 6.52495 9.54086Z" />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M7.51145 1.55106L13.465 5.33294V13.3497C13.465 13.412 13.4126 13.4644 13.3503 13.4644H10.193C10.1307 13.4644 10.0783 13.412 10.0783 13.3497V10.8182C10.0783 9.92832 9.34138 9.19112 8.45184 9.19112H6.52495C5.63986 9.19112 4.89529 9.92522 4.9217 10.8237V13.3729C4.9217 13.4352 4.86929 13.4877 4.80699 13.4877H1.64967C1.58738 13.4877 1.53496 13.4352 1.53496 13.3729V5.33311L7.51145 1.55106ZM1.27822 5.08174L7.40714 1.20324C7.45357 1.15679 7.54643 1.15679 7.61608 1.20324L13.7218 5.08174C13.7682 5.12819 13.8146 5.19786 13.8146 5.26754V13.3497C13.8146 13.6052 13.6057 13.8142 13.3503 13.8142H10.193C9.93764 13.8142 9.7287 13.6052 9.7287 13.3497V10.8182C9.7287 10.1215 9.14831 9.54086 8.45184 9.54086H6.52495C5.82848 9.54086 5.24809 10.1215 5.2713 10.8182V13.3729C5.2713 13.6284 5.06236 13.8374 4.80699 13.8374H1.64967C1.3943 13.8374 1.18536 13.6284 1.18536 13.3729V5.26754C1.18536 5.19786 1.20858 5.12819 1.27822 5.08174ZM13.3503 15H10.2162C9.32668 15 8.58977 14.2628 8.58977 13.3729V10.8182C8.58977 10.7559 8.53735 10.7035 8.47505 10.7035H6.54816C6.48587 10.7035 6.43345 10.7559 6.43345 10.8182V13.3497C6.43345 14.2396 5.69654 14.9768 4.80699 14.9768H1.62646C0.736911 14.9768 0 14.2396 0 13.3497V5.24431C0 4.77131 0.251303 4.33591 0.651944 4.08836L6.77814 0.211575C7.21781 -0.0705255 7.80541 -0.0705251 8.24508 0.211576C8.24546 0.211821 8.24584 0.212066 8.24622 0.212311L14.3713 4.08838C14.7853 4.34424 15 4.78759 15 5.24431V13.3265C15 14.2587 14.2671 15 13.3503 15ZM14.1861 4.385L8.05717 0.506501C7.73216 0.297479 7.29106 0.297479 6.96604 0.506501L0.837127 4.385C0.535324 4.5708 0.349599 4.89594 0.349599 5.24431V13.3497C0.349599 14.0464 0.929989 14.627 1.62646 14.627H4.80699C5.50346 14.627 6.08385 14.0464 6.08385 13.3497V10.8182C6.08385 10.5627 6.29279 10.3537 6.54816 10.3537H8.47505C8.73043 10.3537 8.93937 10.5627 8.93937 10.8182V13.3729C8.93937 14.0697 9.51976 14.6503 10.2162 14.6503H13.3503C14.07 14.6503 14.6504 14.0697 14.6504 13.3265V5.24431C14.6504 4.89594 14.4879 4.5708 14.1861 4.385Z"
                                                    />
                                                </svg>
                                            </span>
                                            Home
                                        </a>
                                        <span class="px-3 text-gray-900">
                                            <svg
                                                width="7"
                                                height="12"
                                                viewBox="0 0 7 12"
                                                class="fill-current"
                                            >
                                                <path
                                                    d="M0.879233 11.4351C0.808625 11.4351 0.720364 11.3998 0.667408 11.3469C0.543844 11.2233 0.543844 11.0291 0.649756 10.9056L5.09807 6.17483C5.18633 6.08657 5.18633 5.92771 5.09807 5.82179L0.649756 1.09105C0.526192 0.967487 0.543844 0.773315 0.667408 0.649751C0.790972 0.526187 0.985145 0.543839 1.10871 0.667403L5.55702 5.39815C5.85711 5.73353 5.85711 6.26309 5.55702 6.58083L1.10871 11.3292C1.0381 11.3998 0.967493 11.4351 0.879233 11.4351Z"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M0.229332 10.5281L4.48868 5.99831L0.24288 1.48294C-0.133119 1.09849 -0.0312785 0.549591 0.267983 0.25033C0.652758 -0.134445 1.2069 -0.0332381 1.50812 0.267982L1.52041 0.280272L5.9781 5.02138C6.46442 5.56491 6.47872 6.42661 5.96853 6.96778V6.96778L1.50834 11.7289C1.36051 11.8767 1.15353 12 0.879227 12C0.660517 12 0.428074 11.9064 0.267983 11.7463C-0.0719543 11.4064 -0.0699959 10.8773 0.220873 10.538L0.229332 10.5281ZM5.55702 6.58083C5.85711 6.26309 5.85711 5.73353 5.55702 5.39815L1.10871 0.667403C0.985145 0.543839 0.790972 0.526187 0.667408 0.649751C0.543844 0.773315 0.526192 0.967487 0.649756 1.09105L5.09807 5.82179C5.18633 5.92771 5.18633 6.08657 5.09807 6.17483L0.649756 10.9056C0.543844 11.0291 0.543844 11.2233 0.667408 11.3469C0.720364 11.3998 0.808625 11.4351 0.879233 11.4351C0.967493 11.4351 1.0381 11.3998 1.10871 11.3292L5.55702 6.58083Z"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li class="flex items-center">
                                        <a
                                            href="javascript:void(0)"
                                            class="text-base font-semibold text-gray-900 hover:text-opacity-80"
                                        >
                                            {post.category}
                                        </a>
                                        <span class="px-3 text-gray-900">
                                            <svg
                                                width="7"
                                                height="12"
                                                viewBox="0 0 7 12"
                                                class="fill-current"
                                            >
                                                <path
                                                    d="M0.879233 11.4351C0.808625 11.4351 0.720364 11.3998 0.667408 11.3469C0.543844 11.2233 0.543844 11.0291 0.649756 10.9056L5.09807 6.17483C5.18633 6.08657 5.18633 5.92771 5.09807 5.82179L0.649756 1.09105C0.526192 0.967487 0.543844 0.773315 0.667408 0.649751C0.790972 0.526187 0.985145 0.543839 1.10871 0.667403L5.55702 5.39815C5.85711 5.73353 5.85711 6.26309 5.55702 6.58083L1.10871 11.3292C1.0381 11.3998 0.967493 11.4351 0.879233 11.4351Z"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M0.229332 10.5281L4.48868 5.99831L0.24288 1.48294C-0.133119 1.09849 -0.0312785 0.549591 0.267983 0.25033C0.652758 -0.134445 1.2069 -0.0332381 1.50812 0.267982L1.52041 0.280272L5.9781 5.02138C6.46442 5.56491 6.47872 6.42661 5.96853 6.96778V6.96778L1.50834 11.7289C1.36051 11.8767 1.15353 12 0.879227 12C0.660517 12 0.428074 11.9064 0.267983 11.7463C-0.0719543 11.4064 -0.0699959 10.8773 0.220873 10.538L0.229332 10.5281ZM5.55702 6.58083C5.85711 6.26309 5.85711 5.73353 5.55702 5.39815L1.10871 0.667403C0.985145 0.543839 0.790972 0.526187 0.667408 0.649751C0.543844 0.773315 0.526192 0.967487 0.649756 1.09105L5.09807 5.82179C5.18633 5.92771 5.18633 6.08657 5.09807 6.17483L0.649756 10.9056C0.543844 11.0291 0.543844 11.2233 0.667408 11.3469C0.720364 11.3998 0.808625 11.4351 0.879233 11.4351C0.967493 11.4351 1.0381 11.3998 1.10871 11.3292L5.55702 6.58083Z"
                                                />
                                            </svg>
                                        </span>
                                    </li>
                                    <li class="text-base font-semibold text-gray-900 text-opacity-80">
                                        {post.sub_category}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div class=""> */}
                        <span
                            class="my-2 inline-block rounded-lg bg-blue-500 py-1 px-3 text-sm font-semibold text-white"
                        >
                            {post.timestamp}

                        </span>
                        <h2 class="font-sans my-2 lg:my-4 text-3xl font-bold  text-gray-900 sm:text-5xl md:text-[40px]">
                            {post.title}
                        </h2>
                        <div className='my-3 justify-items-end items-end'>

                            <FacebookShareButton
                                url={`https://tensorcodes.com/post/${post.slug}`} >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            <PinterestShareButton
                                url={`https://tensorcodes.com/post/${post.slug}`} >
                                <PinterestIcon size={32} round />
                            </PinterestShareButton>
                            <RedditShareButton
                                url={`https://tensorcodes.com/post/${post.slug}`}>
                                <RedditIcon size={32} round />
                            </RedditShareButton>
                            <WhatsappShareButton
                                url={`https://tensorcodes.com/post/${post.slug}`}>
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                            <LinkedinShareButton
                                url={`https://tensorcodes.com/post/${post.slug}`} >
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                        </div>
                        <span
                            class="inline-block mb-6 mt-2 md:mb-10 h-[1px] w-full bg-body-color"
                        ></span>
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