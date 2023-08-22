import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { useState } from 'react';
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const Home = ({ posts }) => {


  return (<>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>मण्डी भाव - किसानों के लिए ताजा फसल मार्केट भाव</title>
      <meta name="description" content="हमारी वेबसाइट पर, किसानों के लिए ताजा फसल मार्केट भाव और अन्य कृषि परिवर्तनों की जानकारी उपलब्ध है। हम हर दिन मण्डी भाव की ताजा जानकारी अपडेट करते हैं, ताकि किसान समय पर अपने फसलों के लिए सही फायदेमंद मार्केट की तलाश कर सकें।" />
      <link rel="icon" href="/mandi.ico" />
      <meta name="keywords" content="livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,कृषि समाचार ,फसल भाव,विविध उपज मार्केट,मौसम पूर्वानुमान ,वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
      <meta name="robots" content="index, follow"></meta>
      <link rel="canonical" href="https://tensorcodes.com/"></link>
      <meta property="og:title" content="मण्डी भाव - किसानों के लिए ताजा फसल मार्केट भाव" />
      <meta property="og:description" content="हमारी वेबसाइट पर, किसानों के लिए ताजा फसल मार्केट भाव और अन्य कृषि परिवर्तनों की जानकारी उपलब्ध है। हम हर दिन मण्डी भाव की ताजा जानकारी अपडेट करते हैं, ताकि किसान समय पर अपने फसलों के लिए सही फायदेमंद मार्केट की तलाश कर सकें।" />
      <meta property="og:image" content="https://tensorcodes.com/assets/images/dailymandi.jpg" />
      <meta property="og:url" content="https://tensorcodes.com/mandi" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tensorcodes.com" />
      <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
      <link rel="author" href="https://tensorcodes.com/"></link>
      <meta charSet="utf-8"></meta>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1407891328744169"
          crossorigin="anonymous"></script>
    </Head>
    <Navbar />
    <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div class="containerx">
        <div class="-mx-4 flex flex-wrap justify-center">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span class="mb-2 block text-lg font-semibold text-tensor">
                Search Results
              </span>

            </div>
          </div>
        </div>

        <div class="-mx-4 flex flex-wrap">

          {posts.map((post) => {
            return <div ey={post._id} class="md:w-1/2 w-full mx-auto px-4">
              <div class="w-full py-6">
                <div class="flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  {post.image != null && <div class="w-1/3 bg-cover" style={{ backgroundImage: "url(" + process.env.NEXT_PUBLIC_HOST / post.image + ")", }}></div>}
                  {post.image == null && post.image_url != '' && <div class="w-1/3 bg-cover" style={{ backgroundImage: "url(" + post.image_url + ")", }}></div>}
                  {post.image == null && post.image_url == '' && <div class="w-1/3 bg-cover" style={{ backgroundImage: "url(" + '../assets/images/codes/temp4.jpg' + ")", }}></div>}


                  <div class="w-2/3 p-4">
                    <h1 class="text-rose-600 font-bold text-sm">{post.category}</h1>
                    <p class=" text-gray-900 text-md font-semibold">{post.title}</p>
                    <div class="flex item-center mt-2">
                      <p class="text-base leading-relaxed text-gray-800">
                        {post.timestamp}
                      </p>

                    </div>
                    <div class="flex item-center justify-between mt-3">
                      <h1 class="text-gray-700 font-bold text-md">{post.keywords[0]}</h1>
                      <Link href={`/post/${post.slug}`}><button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Learn More</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })}



        </div>
      </div>
    </section>
    <Footer />
  </>

  )
}


export async function getServerSideProps(context) {
  const data = { slug: context.query.slug }
  let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/search/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  const json_res = await res.json()
  let posts = JSON.parse(JSON.stringify(json_res.posts))
  console.log(posts)
  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) }
  }
}
export default Home