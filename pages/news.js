// TradingViewWidget.js
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { MdDateRange } from 'react-icons/md'

const News = ({ news }) => {

  return (
    <>

      <Navbar />


      {/* <!-- ====== Blogs Section --> */}
      <section class="pt-16 pb-10 lg:pt-[100px] lg:pb-20">
        <div class="containerx">
          <div class="-mx-4 flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div class="mx-auto max-w-[510px] text-center ">
                <h3
                  class="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl"
                >
                  <span class=" text-tensor">Kisan Market</span>
                </h3>
                <div class="w-24 h-1 bg-tensor rounded mt-2 mb-4 mx-auto"></div>

              </div>
            </div>
          </div>


          <div class="min-h-screen  flex justify-center flex-wrap items-center my-20">
            <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 ">


              {news.map((post) => {
                return <div key={post._id} class="flex justify-center">
                  <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      {post.image != null && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={process.env.NEXT_PUBLIC_HOST / post.image} alt="tech" />}
                      {post.image == null && post.image_url != '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={post.image_url} alt="tech" />}
                      {post.image == null && post.image_url == '' && <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src='../assets/images/codes/temp4.jpg' alt="tech" />}
                    </a>
                    <div class="flex text-white items-center px-6 py-3 bg-gray-900">
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
                      <Link href={`/post/${post.slug}`}><button class="px-3 py-2 hover:shadow-md bg-gray-800 text-white text-xs font-bold uppercase rounded leading-tight hover:bg-gray-900 ">Learn More</button></Link>
                    </div>
                  </div>
                </div>
              })}


            </div>
          </div>


          {/* <div class="-mx-4 flex flex-wrap justify-center">
              <div class="w-full px-4">
                <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <Link href={'/data-science/Blog'}><a class="inline-flex items-center justify-center rounded-md border border-black py-2 px-6 text-center text-base text-white transition hover:bg-gray-800 bg-gray-900 lg:px-4 xl:px-6">View All</a></Link>

                </div>
              </div>
            </div> */}
        </div>
      </section>
      {/* --------------------------------------- */}





      <rssapp-ticker id="toqVbAD3l5eo7qIF"></rssapp-ticker><script src="https://widget.rss.app/v1/ticker.js" type="text/javascript" async></script>
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