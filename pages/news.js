// TradingViewWidget.js
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const News=({news})=> {

  return (
    <>

<Navbar />







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
  return {
    props: { news: JSON.parse(JSON.stringify(news)) }
  }
}

export default News