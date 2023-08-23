import { useEffect, useState } from 'react'

import Head from 'next/head'
// import "prismjs/themes/prism-tomorrow.css";
// import Footer from '../components/footer'
import { useRouter } from 'next/router'
// import Navbar from '../components/navbar'
import '../styles/globals.css'
import Script from 'next/script'
import LoadingBar from 'react-top-loading-bar'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
  },[router.query])

  return <>
  {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9133303325062307"
     crossorigin="anonymous"></script> */}
<Script  async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9133303325062307"
          crossorigin="anonymous"></Script>
<Script 
strategy='lazyOnload'
async src="https://www.googletagmanager.com/gtag/js?id=G-CKMDV7BLF8"/>
<Script strategy='lazyOnload'>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-CKMDV7BLF8');
  `}
  </Script>
  
  <LoadingBar
        color='#e91e63'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
  
  <Component {...pageProps} /> 
  </>
}

export default MyApp
