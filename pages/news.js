import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { Markup } from 'interweave';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Script from 'next/script'
// import Ticker from '@/components/ticker';

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';



const time_keys = {
  '0.0': 'f54aca3df49a49ab96ee1fbee58952bd',
  '0.5': 'f54aca3df49a49ab96ee1fbee58952bd',
  '1.0': 'f54aca3df49a49ab96ee1fbee58952bd',
  '1.5': 'f54aca3df49a49ab96ee1fbee58952bd',
  '2.0': 'f54aca3df49a49ab96ee1fbee58952bd',
  '2.5': 'f54aca3df49a49ab96ee1fbee58952bd',
  '3.0': 'f54aca3df49a49ab96ee1fbee58952bd',
  '3.5': 'f54aca3df49a49ab96ee1fbee58952bd',
  '4.0': 'f54aca3df49a49ab96ee1fbee58952bd',
  '4.5': 'f54aca3df49a49ab96ee1fbee58952bd',
  '5.0': 'f54aca3df49a49ab96ee1fbee58952bd', // one api key from 12-5 am
  '5.5': '7de7ad5dcfe8406aab9ff32c97d6d14b',
  '6.0': '7de7ad5dcfe8406aab9ff32c97d6d14b',
  '6.5': '7de7ad5dcfe8406aab9ff32c97d6d14b',// 5-7
  '7.0': 'd0844aa8f94d4c8eb0eb1af20c86a814',
  '7.5': 'd0844aa8f94d4c8eb0eb1af20c86a814',
  '8.0': '9a868730c77b4400aac635938aa2d08b',
  '8.5': '9a868730c77b4400aac635938aa2d08b',
  '9.0': 'cb86642ca14c440c83981c6882f472db',
  '9.5': 'cb86642ca14c440c83981c6882f472db',
  '10.0': '70ac7ebede74414fa38b5e358ca9b662',
  '10.5': '70ac7ebede74414fa38b5e358ca9b662',
  '11.0': 'd6406f8e4b2c43d2b855218e5ce7ed12',
  '11.5': 'd6406f8e4b2c43d2b855218e5ce7ed12',
  '12.0': '3b23c600a77e44068710d0ffaaa08af1',
  '12.5': '3b23c600a77e44068710d0ffaaa08af1',
  '13.0': '2b07cc7c2f5643e7872b3d6f4abc390a',
  '13.5': '2b07cc7c2f5643e7872b3d6f4abc390a',
  '14.0': '1235314d91f84205996d10b89b028210',
  '14.5': '1235314d91f84205996d10b89b028210',
  '15.0': '4e1185919c7345c0bbfbd9d57944e658',
  '15.5': '4e1185919c7345c0bbfbd9d57944e658',
  '16.0': 'ddbfb921669c4f8ab717b22c217108dd',
  '16.5': 'ddbfb921669c4f8ab717b22c217108dd',
  '17.0': '8ff759f47e0c40f6b2b5e829f67d6bf0',
  '17.5': '8ff759f47e0c40f6b2b5e829f67d6bf0',
  '18.0': '5b1fc24b573c4241a8614855cc619daa',
  '18.5': '5b1fc24b573c4241a8614855cc619daa',
  '19.0': '1ef19819db0b4b80b8398d622cb1e2a1',
  '19.5': '1ef19819db0b4b80b8398d622cb1e2a1',
  '20.0': '8866f32d92684a728d937310129764ca',
  '20.5': '8866f32d92684a728d937310129764ca',
  '21.0': '448d7c509da74be69a3aad8dccaa6791',
  '21.5': '448d7c509da74be69a3aad8dccaa6791',
  '22.0': 'f0d5d5c783b84608a540d900f924e617',
  '22.5': 'f0d5d5c783b84608a540d900f924e617',
  '23.0': '',
  '23.5': ''
};
const currentdate = new Date();
const hours = currentdate.getHours()
const minutes = currentdate.getMinutes()
const api_key = time_keys[`${hours}.${minutes < 30 ? '0' : '5'}`]



const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(api_key);


import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Head from 'next/head';
import { useState } from 'react';

const Home = ({ news }) => {
  const router = useRouter()
  const [modal, setModal] = useState(true)
  const [posttitle, setTitle] = useState('')
  const [postimageurl, setImageurl] = useState('')
  const [posturl, setUrl] = useState('')
  const [postdesc, setDesc] = useState('')
  const [posttime, setTime] = useState('')
  const [postcontent, setContent] = useState('')
  const [postauthor, setAuthor] = useState('')
  const [postsourcename, setSourcename] = useState('')

  const modalActivate = async (title, imageurl, url, author, sourcename, desc, time, content) => {
    console.log("everything is ok here")
    setAuthor(author)
    setContent(content)
    setDesc(desc)
    setImageurl(imageurl)
    setSourcename(sourcename)
    setTime(time)
    setTitle(title)
    setUrl(url)
    setModal(false)
  }



  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        {/* <meta name="google-site-verification" content="dU_ty8QD9RodTJtP0nzUZCOieMKGESG3th5u2vlhC2U" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Headlines - Tensorcodes</title>
        <meta name="description" content="NewsSocket brings you bite-sized news highlights for quick and easy updates. Stay informed with our snappy headlines and concise summaries covering trending topics, technology, politics, entertainment, and more. Get the latest news effortlessly and never miss a beat!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="Quick News Update, Bitesize News, Snappy Headlines, Trending Topics, Technology News, Political Updates, Entertainment News, Stay Informed, Click and Read, Concise Summaries, Current Events, Stay Updated, Effortless News, Brief Articles, Time-Saving Updates, Easy Reading, Latest Happenings, World News, Daily Highlights, Timely Information, News Provider, Online News Hub, Quick and Easy Updates, Trending Stories, In-the-Know, Stay Connected, Hassle-Free News" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://tensorcodes.com/"></link>
        <meta property="og:title" content="NewsSocket | Quick Headlines & Snappy News Summaries" />
        <meta property="og:description" content="NewsSocket brings you bite-sized news highlights for quick and easy updates. Stay informed with our snappy headlines and concise summaries covering trending topics, technology, politics, entertainment, and more. Get the latest news effortlessly and never miss a beat!" />
        <meta property="og:image" content="https://newssocket.tensorcodes.com/thumb3j.jpg" />
        <meta property="og:url" content="https://newssocket.tensorcodes.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NewsSocket.tensorcodes.com" />
        <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
        <link rel="author" href="https://newssocket.tensorcodes.com/"></link>
        <meta charSet="utf-8"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9133303325062307"
     crossorigin="anonymous"></script>
        {/* <meta name="google-site-verification" content="5xuVtd8xHhLkZJexi6H1FhYHSHtOEGLGH9KNOcMSFTY" /> */}
       </Head>
      


      <body>

        <Navbar />
        {/* <Ticker/> */}

        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

          <div class="border-b mb-5 flex justify-between text-sm">
            <div class="text-gray-800 flex items-center pb-2 pr-2 border-b-2 border-gray-800 uppercase">
              <svg class="h-6 mr-3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 455.005 455.005"
              >
                <g>
                  <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"> </path>
                  <path d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126 c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126 C350.916,232.303,352.298,232.676,353.664,232.676z"> </path>
                  <path d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82 c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905 C320.941,252.21,322.318,252.58,323.68,252.58z"> </path>
                  <path d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062 c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"> </path>
                  <path d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219 c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37 c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464 c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351 c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"> </path>
                  <path d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409 c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132 C266.219,292.387,268.669,291.131,270.089,288.846z"> </path>
                  <path d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132 c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455 C60.338,188.266,55.714,189.346,53.527,192.864z"> </path>
                </g>
              </svg>
              <a class="font-semibold inline-block">TOP Headlines</a>
            </div>
            {/* <a href="#">See All</a> */}
          </div>


          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {news.map((item) => {
              return <div key={item.id} class="rounded overflow-hidden shadow-lg flex flex-col" id={item.title ? item.title.slice(0,10).replace(" ", "np") : "noid"}>
                                                                               {/* {postcontent ? postcontent.slice(0, -14) : "this post is deleted"} ... */}
                <a href={item.url}></a>
                <div class="relative">
                  <img class="w-full max-h-56 object-cover" src={item.urlToImage} alt={item.title} />
                  {/* <div
                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                  </div> */}

                  <a >
                    <div
                      class="text-xs font-semibold absolute top-0 right-0 bg-pink-600 px-2 py-1 text-white mt-3 mr-3  transition duration-500 ease-in-out">
                      Tensorcodes
                    </div>
                  </a>
                </div>
                <div class="px-6 py-4 mb-auto">
                  <a
                    class="font-medium text-lg  hover:text-gray-800 transition duration-500 ease-in-out inline-block mb-2">{item.title}</a>
                  <p class="text-gray-500 text-sm flex ">
                  {item.description ? item.description.slice(0, 120) : "this post is deleted"} ...
                  </p>

                </div>
                <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                  <span class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg height="13px" width="13px" version="1.1" id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg" x="0px"
                      y="0px" viewBox="0 0 512 512"
                      space="preserve">
                      <g>
                        <g>
                          <path
                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                          </path>
                        </g>
                      </g>
                    </svg>
                    <span class="ml-1">{Date(item.publishedAt).toLocaleString('en-us', { month: 'short', year: 'numeric' }).slice(0, 10)}</span>
                  </span>

                  <WhatsappShareButton className='bg-[#128c7e]'
                    url={`https://tensorcodes.com/news${router.asPath.split('#')[0]}#${item.title ? item.title.slice(0,10).replace(" ","np") : "noid"}`}
                    title={`${item.title} + " ... click 👉 `}
                    separator=":: "
                  >
                    <div class="bg-[#128c7e] uppercase leading-normal text-white hover:bg-[#12aa98] rounded-sm px-6 py-[0.55rem]  transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 "
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                  </WhatsappShareButton>

                  <span class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <a onClick={() => { modalActivate(item.title, item.urlToImage, item.url, item.author, item.source.name, item.description, item.publishedAt, item.content) }}  class="inline-flex items-center rounded-sm border border-transparent bg-gray-900 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-800">Read More</a>
                  </span>
                </div>
              </div>
            })}





          </div>
        </div>


        {/* modal start */}
        <div class="relative z-10" hidden={modal} aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-90 transition-opacity"></div>

          <div class="fixed inset-0 pb-16 sm:py-4 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center px-4 text-center sm:items-center sm:p-0">
              <div class="relative  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4  sm:p-6 sm:pb-4">
                  <div class=" sm:items-start">
                    <div class="overflow-y-scroll mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div class="relative">
                        <img class="w-full max-h-56 object-cover" src={postimageurl} alt={posttitle} />
                        <a >
                          <div
                            class="text-xs font-semibold absolute top-0 right-0 bg-pink-600 px-2 py-1 text-white mt-3 mr-3  transition duration-500 ease-in-out">
                            Tensorcodes
                          </div>
                        </a>
                      </div>

                      <div class="px-6 py-3 flex flex-row items-center justify-between ">
                        <span class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                          <svg height="13px" width="13px" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" x="0px"
                            y="0px" viewBox="0 0 512 512"
                            space="preserve">
                            <g>
                              <g>
                                <path
                                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                </path>
                              </g>
                            </g>
                          </svg>
                          <span class="ml-1">{Date(posttime).toLocaleString('en-us', { month: 'short', year: 'numeric' }).slice(0, 16)}</span>
                        </span>

                        <span class="py-1 text-sm font-semibold text-green-800 mr-1 flex flex-row items-center">
                          {postauthor}
                        </span>
                      </div>

                      <div class=" py-4 mb-auto">
                        <a
                          class="font-medium text-lg  hover:text-gray-800 transition duration-500 ease-in-out inline-block mb-2">{posttitle}</a>
                        {/* <p class="text-gray-500 text-sm"> */}
                        <Markup class="overflox-x-hidden text-sm" content={postdesc} />
                        {/* </p> */}

                      </div>

                      <div class="mt-2">
                      <p class="text-sm text-gray-500">{postcontent ? postcontent.slice(0, -14) : "this post is deleted"} ...</p>
                        {/* <p class="text-sm text-gray-500">{postcontent.slice(0, -14)}</p> */}
                      </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      {/* <Link href={posturl}><button type="button" class="inline-flex my-2 sm:my-auto w-full justify-center rounded-md bg-green-200 px-3 sm:mx-2 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-green-300 sm:mt-0 sm:w-auto">Read Article</button></Link> */}
                      <button onClick={() => { setModal(true) }} class="my-auto  inline-flex w-full justify-center rounded-md bg-red-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-300 sm:ml-3 sm:w-auto">Close</button>
                    </div>
                  </div>
                </div>

              </div>




            </div>
          </div>
        </div>

        {/* modal end */}



        <Footer />
      </body >
    </>
  )
}


export const getServerSideProps = async () => {

  const res = await newsapi.v2.topHeadlines({
    // sources: 'bbc-news,the-verge',
    // q: 'bitcoin',
    // category: 'business',
    pageSize: 60,
    language: 'en',
    country: 'in',
    sortBy: 'popularity', //relevancy,
  })

  const news = res['articles']
  console.log(news)
  let cleared = []

  for (let item of news){
    if (item.title != null && item.description != null && item.content !=null ){
      cleared.push(item)
      
    }
  }

  return { props: { news: cleared } }
}


export default Home