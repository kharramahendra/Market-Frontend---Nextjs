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


    }, [post]);

    return (<>
        <Head>

            <title>{post.title} - Kisan Market</title>
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


        <div className='flex flex-col justify-items-end items-end fixed top-80 right-0'>
            <div className='rounded-xs'>

                <FacebookShareButton
                    url={`https://tensorcodes.com/post/${post.slug}`} >
                    <FacebookIcon size={42} className="rounded-sm bg-rose-500" />
                </FacebookShareButton>
            </div>
            <div className='rounded-sm'>
                <WhatsappShareButton className="rounded-sm"
                    url={`https://tensorcodes.com/post/${post.slug}`}>
                    <WhatsappIcon size={42} className="rounded-sm" />
                </WhatsappShareButton></div>
            <div>
                <LinkedinShareButton
                    url={`https://tensorcodes.com/post/${post.slug}`} >
                    <LinkedinIcon size={42} className="rounded-sm" />
                </LinkedinShareButton>
            </div>
        </div>

        {post.category == 'Price' &&
            <div className='justify-center'>
                <span class="my-2 inline-block rounded-lg justify-center py-1 px-3 text-xl font-bold mx-auto text-pink-700">
                    {post.timestamp}
                </span>
            </div>
        }

        {post.category == 'Price' && <div className="flex justify-center sticky top-2 left-2 ml-2">
            <div>
                <div className="dropdown relative ml-2 my-2">
                    <button onClick={() => { setHidedrop(!hidedropdown) }} className="dropdown-toggle px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm leading-tight uppercase rounded shadow-md  hover:shadow-lg   transition duration-150 ease-in-out flex items-center " aria-expanded="false"> Commodity
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
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent mx-3 text-gray-700 hover:bg-gray-100 " href="#jeera" >JEERA</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#guar" >GUAR</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#rayda" >RAYDA</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#isabgul" >ISABGUL</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent mx-3 text-gray-700 hover:bg-gray-100 " href="#bajra" >BAJRA</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#wheat" >WHEAT</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#barley" >BARLEY</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#moong" >MOONG</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent mx-3 text-gray-700 hover:bg-gray-100 " href="#methi" >METHI</a>
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#chana" >CHANA</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#moath" >MOATH</a >
                        </li>
                        <li>
                            <a onClick={() => { setHidedrop(!hidedropdown) }} className=" dropdown-item mx-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#taramira" >TARAMIRA</a >
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
                            {post.category == 'News' &&
                                <span
                                    class="my-2 inline-block rounded-lg  py-1 px-3 text-lg font-semibold text-pink-700"
                                >
                                    {post.timestamp}

                                </span>
                            }
                        </div>



                        {post.category == 'News' && <h2 class="font-sans my-2 lg:my-4 text-2xl font-bold  text-gray-900 sm:text-4xl ">
                            {post.title}
                        </h2>}

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