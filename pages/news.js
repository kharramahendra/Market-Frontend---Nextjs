// TradingViewWidget.js
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { MdDateRange } from 'react-icons/md'
import Head from 'next/head'

const News = ({ news }) => {

  return (
    <>

      <Head>
        <title>News - Kisan Market</title>
        <meta name="description" content="Welcome to Tensorcodes! My name is Kalu Ram Kharra and I am the creator and sole operator of this website.
            I am passionate about using technology to solve real-world problems and help businesses and organizations reach their goals.
            On my site, you can find a variety of data science and machine learning projects and code examples that I have created. I believe in the
            power of education and am commited to sharing my knowledge and experience with others.
            In addition to my educational content, I also offer web development services to help clients build and maintain their own websites.
            I have a wealth of experience in this field and am ready to take on projects of any size.
            Thank you for visiting Tensorcodes. I hope you find my site helpful and informative, and I look forward to working with you in the future." />
        <link rel="icon" href="/favicon2.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="tensorcode,tensorcode.io,tensorcode io review,data science ,machine learning,deep learning, neural networks ,react django ,Rest framework ,tailwind css,nextjs django combination," />
        <meta property="og:title" content="Tensorcodes - Code editor" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
        <meta charSet="utf-8"></meta>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
          crossOrigin="anonymous"></script>

      </Head>

      <Navbar />
      <rssapp-ticker id="toqVbAD3l5eo7qIF"></rssapp-ticker><script src="https://widget.rss.app/v1/ticker.js" type="text/javascript" async></script>


      {/* <!-- ====== news Section --> */}
      <section class="">
        <div class="">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div class="mx-auto max-w-[510px] text-center ">
                <h3
                  class="my-2 text-lg font-semibold text-gray-900 sm:text-xl"
                >Kisan Market
                </h3>


              </div>
            </div>
          </div>


          <div class="flex justify-center flex-wrap items-center ">
            <div class="md:px-4 px-1 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-2 md:space-y-0 ">


              {news.map((post) => {
                return <div key={post._id} class="flex justify-center">
                  <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      {post.image != null && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={process.env.NEXT_PUBLIC_HOST / post.image} alt="tech" />}
                      {post.image == null && post.image_url != '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={post.image_url} alt="tech" />}
                      {post.image == null && post.image_url == '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src='../assets/images/codes/temp4.jpg' alt="tech" />}
                    </a>
                    <div class="flex text-white items-center px-6 py-3 bg-gray-800">
                      {/* <svg class="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
                          <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                        </svg> */}
                      <MdDateRange className='text=white' />
                      <h5 class="mx-3 text-white text-sm font-medium">
                        {post.timestamp}
                        {/* {Date(post.timestamp).toLocaleString('en-us', { month: 'short', year: 'numeric' }).slice(0, 16)} */}
                      </h5>
                    </div>
                    <div class="p-6">
                      <h2 class="text-gray-900  mb-2 font-semibold text-lg">{post.title}</h2>
                      <p class="text-gray-700 text-base mb-4">
                        {post.content.slice(0, 100).toString().replace(/<[^>]*>/g, '')}
                      </p>
                      <Link href={`/post/${post.slug}`}><button class="px-3 py-2 hover:shadow-md bg-gray-800 text-white text-xs font-bold uppercase rounded leading-tight hover:bg-gray-900 ">और अधिक जानें</button></Link>
                    </div>
                  </div>
                </div>
              })}


            </div>
          </div>

        </div>
      </section>
      {/* --------------------------------------- */}





      <rssapp-wall id="toqVbAD3l5eo7qIF"></rssapp-wall><script src="https://widget.rss.app/v1/wall.js" type="text/javascript" async></script>



      <Footer />

    </>
  );
}


export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/news/`)
  const json_res = await res.json()
  let posts = JSON.parse(JSON.stringify(json_res))
  let news = posts.posts
  console.log(news)
  console.log("here are all news")
  return {
    props: { news: JSON.parse(JSON.stringify(news)) }
  }
}

export default News