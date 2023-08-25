// TradingViewWidget.js
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { MdDateRange } from 'react-icons/md'
import Head from 'next/head'

const Copyright = () => {


    return (
        <>

            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Copyright - Tensorcodes.com</title>
                <meta name="description" content="कृषि खबरों का नवीनतम संग्रह, कृषि क्षेत्र में होने वाली हर घटना और बदलाव के बारे में। हमारी वेबसाइट पर आपको हमेशा अपडेट मिलेंगे।" />
                <link rel="icon" href="/mandi.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="शेयर बाजार,मंडी भाव राजस्थान Today,राजस्थान मंडी भाव, सरसों,किसान मंडी भाव,e-mandi bhav mp,राजस्थान मंडी भाव टुडे | ग्वार का,livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,शेयर मार्केट के अनुसार फसलों की मार्केट भाव,कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
                <meta name="robots" content="index, follow"></meta>
                <link rel="canonical" href="https://livemadni.in/"></link>
                <meta property="og:title" content="कृषि समाचार - फसलों से संबंधित ताज़ा खबरें और अपडेट्स" />
                <meta property="og:description" content="कृषि खबरों का नवीनतम संग्रह, कृषि क्षेत्र में होने वाली हर घटना और बदलाव के बारे में। हमारी वेबसाइट पर आपको हमेशा अपडेट मिलेंगे।" />
                <meta property="og:image" content="https://raw.githubusercontent.com/kaluramkharra/Data-Science-Learning-Codes/main/Plotly/Plotly%20charts/mandinews.jpg" />
                <meta property="og:url" content="https://tensorcodes.com/news/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="tensorcodes.com" />
                <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
                <link rel="author" href="https://tensorcodes.com/"></link>
                <meta charSet="utf-8"></meta>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9133303325062307"
                    crossorigin="anonymous"></script>
            </Head>

            <Navbar />



            <h1>DMCA policy</h1>
            <p>This Digital Millennium Copyright Act policy (&#8220;Policy&#8221;) applies to the <a href="https://www.tensorcodes.com">tensorcodes.com</a> website (&#8220;Website&#8221; or &#8220;Service&#8221;) and any of its related products and services (collectively, &#8220;Services&#8221;) and outlines how this Website operator (&#8220;Operator&#8221;, &#8220;we&#8221;, &#8220;us&#8221; or &#8220;our&#8221;) addresses copyright infringement notifications and how you (&#8220;you&#8221; or &#8220;your&#8221;) may submit a copyright infringement complaint.</p>
            <p>Protection of intellectual property is of utmost importance to us and we ask our users and their authorized agents to do the same. It is our policy to expeditiously respond to clear notifications of alleged copyright infringement that comply with the United States Digital Millennium Copyright Act (&#8220;DMCA&#8221;) of 1998, the text of which can be found at the U.S. Copyright Office <a href="https://www.copyright.gov" target="_blank" rel="nofollow noreferrer noopener external">website</a>. This DMCA policy was created with the help of <a href="https://www.websitepolicies.com/dmca-policy-generator" target="_blank">WebsitePolicies</a>.</p>
            <div class="wpembed-toc"><h3>Table of contents</h3><ol class="wpembed-toc"><li><a href="#what-to-consider-before-submitting-a-copyright-complaint">What to consider before submitting a copyright complaint</a></li><li><a href="#notifications-of-infringement">Notifications of infringement</a></li><li><a href="#changes-and-amendments">Changes and amendments</a></li><li><a href="#reporting-copyright-infringement">Reporting copyright infringement</a></li></ol></div><h2 id="what-to-consider-before-submitting-a-copyright-complaint">What to consider before submitting a copyright complaint</h2>
            <p>Please note that if you are unsure whether the material you are reporting is in fact infringing, you may wish to contact an attorney before filing a notification with us.</p>
            <p>The DMCA requires you to provide your personal information in the copyright infringement notification. If you are concerned about the privacy of your personal information, you may wish to <a href="https://www.copyrighted.com/professional-takedowns" target="_blank" ref="nofollow noreferrer noopener external">hire an agent</a> to report infringing material for you.</p>
            <h2 id="notifications-of-infringement">Notifications of infringement</h2>
            <p>If you are a copyright owner or an agent thereof, and you believe that any material available on our Services infringes your copyrights, then you may submit a written copyright infringement notification (&#8220;Notification&#8221;) using the contact details below pursuant to the DMCA. All such Notifications must comply with the DMCA requirements. You may refer to a <a href="https://www.copyrighted.com/dmca-notice-generator" target="_blank" ref="nofollow noreferrer noopener external">DMCA takedown notice generator</a> or other similar services to avoid making mistake and ensure compliance of your Notification.</p>
            <p>Filing a DMCA complaint is the start of a pre-defined legal process. Your complaint will be reviewed for accuracy, validity, and completeness. If your complaint has satisfied these requirements, our response may include the removal or restriction of access to allegedly infringing material.</p>
            <p>If we remove or restrict access to materials or terminate an account in response to a Notification of alleged infringement, we will make a good faith effort to contact the affected user with information concerning the removal or restriction of access.</p>
            <p>Notwithstanding anything to the contrary contained in any portion of this Policy, the Operator reserves the right to take no action upon receipt of a DMCA copyright infringement notification if it fails to comply with all the requirements of the DMCA for such notifications.</p>
            <p>The process described in this Policy does not limit our ability to pursue any other remedies we may have to address suspected infringement.</p>
            <h2 id="changes-and-amendments">Changes and amendments</h2>
            <p>We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we do, we will post a notification on the main page of the Website. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.</p>
            <p>An updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes.</p>
            <h2 id="reporting-copyright-infringement">Reporting copyright infringement</h2>
            <p>If you would like to notify us of the infringing material or activity, we encourage you to contact us using the details below:</p>
            <p><a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;mah&#101;n&#100;ra&#107;&#104;ar&#114;&#97;0&#50;&#64;gm&#97;i&#108;.c&#111;m">&#109;&#97;&#104;en&#100;r&#97;kh&#97;&#114;&#114;&#97;0&#50;&#64;g&#109;&#97;&#105;&#108;&#46;c&#111;m</a></p>
            <p>This document was last updated on August 25, 2023</p>

            
            <a href="//www.dmca.com/Protection/Status.aspx?ID=cb7f3c03-d630-4302-9524-0da8a8eae14d" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/dmca-badge-w200-5x1-10.png?ID=cb7f3c03-d630-4302-9524-0da8a8eae14d"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>



            <Footer />
        </>
    );
}


export default Copyright