import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { MdDateRange } from 'react-icons/md'
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

const Home = ({ username }) => {

  console.log(username)

  const [name, setName] = useState('YOUR NAME')

  // const handlechange = async (e)=>{
  //     if (e.target.name=='name'){
  //         setName(e.target.value)
  //     }

  // }



  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>कृषि बाजार की ताज़ा खबरें - मंडियों और शेयर बाजार के आधार पर</title>
        <meta name="description" content="हमारे पूर्ण कृषि प्लेटफार्म पर, किसानों को सम्पूर्ण कृषि समाचार, फसल भाव, और स्रोतों की उपलब्धता प्रदान की जाती है। हमारी संलग्न समाचार विजेट, मौसम विजेट, और स्टॉक विजेट के साथ, उन्हें मौसम पूर्वानुमान, बाजार प्रवृत्तियों, और उद्योग विकास की ताजा जानकारी प्राप्त करने में मदद करते हैं। किसानों को सफल होने के लिए जरूरी जानकारी के साथ सशक्त करने का उद्देश्य, हमारी प्लेटफार्म पर।" />
        <link rel="icon" href="/mandi.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="मंडी भाव राजस्थान Today,राजस्थान मंडी भाव, सरसों,किसान मंडी भाव,e-mandi bhav mp,राजस्थान मंडी भाव टुडे | ग्वार का,Mandi Bhav up,livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,कृषि समाचार,फसल भाव ,विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://livemandi.in/"></link>
        <meta property="og:title" content="कृषि बाजार की ताज़ा खबरें - मंडियों और शेयर बाजार के आधार पर" />
        <meta property="og:description" content="हमारे पूर्ण कृषि प्लेटफार्म पर, किसानों को सम्पूर्ण कृषि समाचार, फसल भाव, और स्रोतों की उपलब्धता प्रदान की जाती है। हमारी संलग्न समाचार विजेट, मौसम विजेट, और स्टॉक विजेट के साथ, उन्हें मौसम पूर्वानुमान, बाजार प्रवृत्तियों, और उद्योग विकास की ताजा जानकारी प्राप्त करने में मदद करते हैं। किसानों को सफल होने के लिए जरूरी जानकारी के साथ सशक्त करने का उद्देश्य, हमारी प्लेटफार्म पर।" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kaluramkharra/Data-Science-Learning-Codes/main/Plotly/Plotly%20charts/1675701771339.jpg" />
        <meta property="og:url" content="https://livemandi.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Livemandi.in" />
        <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
        <link rel="author" href="https://livemandi.in/"></link>
        <meta charSet="utf-8"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8245105696445903"
          crossorigin="anonymous"></script>
      </Head>

      <div class="h-screen w-screen bg-gradient-to-t from-green-300 via-transparent to-orange-300">
      </div>

    </>
  );
}


export async function getServerSideProps(context) {
  const name = context.query.slug
  console.log(name)

  return {
    props: { username: name }
  }
}

export default Home