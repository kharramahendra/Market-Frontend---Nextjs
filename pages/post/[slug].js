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


        <section class="pt-8 pb-10  lg:pb-20 lg:mx-20 md:mx-10 mx-1 ">
            <div class="containery">

                <div class="flex flex-wrap ">

                    <div class="w-full">
                        
                        <span
                            class="my-2 inline-block rounded-lg bg-purple-700 py-1 px-3 text-sm font-semibold text-white"
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