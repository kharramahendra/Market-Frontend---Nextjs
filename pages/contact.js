import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Script from 'next/script'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Link from 'next/link'
import { GrReactjs, GrArticle, GrTechnology } from 'react-icons/gr'
import { DiDjango, DiJavascript1 } from 'react-icons/di'
import { SiNextdotjs, SiTailwindcss, SiPython, SiJavascript } from 'react-icons/si'
import { AiOutlineShoppingCart, AiOutlineComment } from 'react-icons/ai'
import { MdCastForEducation } from 'react-icons/md'
import { FaNewspaper, FaMicroblog } from 'react-icons/fa'
import { GiTechnoHeart } from 'react-icons/gi'

export default function Contact() {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()

    const handleChange = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value)
        } else if (e.target.name == 'name') {
            setName(e.target.value)
        } else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        } else if (e.target.name == 'message') {
            setMessage(e.target.value)
        }
    }

    const sendMessage = async (e) => {
        setIsLoading(true)
        e.preventDefault()
        //const data = {email,password}
        if (phone.length != 10) {
            toast.error("10 Digit Phone number required!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            const data = { email: email, name: name, phone: phone, message: message }
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/contact/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            let responce = await res.json()
            setEmail('')
            setPhone('')
            setMessage('')
            setName('')
            setIsLoading(false)
            if (responce.success) {
                toast.success('Message send successfuly', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            }
            else {
                toast.error(responce.message, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }


    }


    return (
        <>

            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Contact Us - tensorcodes.com</title>
                <meta name="description" content="Discover all the latest news, commodity prices, and resources for farmers on our comprehensive agriculture platform. Stay up-to-date with weather forecasts, market trends, and industry developments with our integrated news widget, weather widget, and stock widget. Empowering farmers with the information they need to thrive, all in one place." />
                <link rel="icon" href="/mandi.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="livemandi,live mandi,mandi bhav,live mandi bhav,aaj ke bhav,bhav,aaj ke mandi bhav,live mandi bhav,कृषि समाचार (Agriculture news),फसल भाव (Crop prices),विविध उपज मार्केट,मौसम पूर्वानुमान (Weather forecast),वैज्ञानिक कृषि (Scientific agriculture),कृषि प्रोफेशनल्स (Agriculture professionals),कृषि सम्पर्क (Agriculture connections),कृषि तकनीक (Agriculture technology),कृषि उत्पादों (Agricultural products),कृषि उद्योग (Agriculture industry)" />
                <meta name="robots" content="index, follow"></meta>
                <link rel="canonical" href="https://tensorcodes.com/"></link>
                <meta property="og:title" content="Contact Us - tensorcodes.com" />
                <meta property="og:description" content="Discover all the latest news, commodity prices, and resources for farmers on our comprehensive agriculture platform. Stay up-to-date with weather forecasts, market trends, and industry developments with our integrated news widget, weather widget, and stock widget. Empowering farmers with the information they need to thrive, all in one place." />
                <meta property="og:image" content="https://tensorcodes.com/imagelight2.jpg" />
                <meta property="og:url" content="https://tensorcodes.com/mandi" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="tensorcodes.com" />
                <link rel="publisher" href="https://www.linkedin.com/in/kaluram-kharra/"></link>
                <link rel="author" href="https://tensorcodes.com/"></link>
                <meta charSet="utf-8"></meta>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9133303325062307"
     crossorigin="anonymous"></script>
            </Head>


            <div class="">
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <Navbar />

                <div class="container my-24 px-6 mx-auto">

                    <section class="mb-32 text-gray-800">
                        <div class="flex justify-center">
                            <div class="text-center lg:max-w-3xl md:max-w-xl">
                                <h2 class="text-3xl font-bold mb-12 px-6">Contact us</h2>
                            </div>
                        </div>

                        <div class="flex flex-wrap">
                            <div class="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                                <form>
                                    <div class="form-group mb-6">
                                        <input value={name} onChange={handleChange} id="name" name="name" type="text" placeholder="Your Name"
                                            class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-[#1a237e] outline-none focus:border-primary focus-visible:shadow-none" required />
                                    </div>
                                    <div class="form-group mb-6">
                                        <input value={phone} onChange={handleChange} id="phone" name="phone" type="text" placeholder="Your Phone"
                                            class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-[#1a237e] outline-none focus:border-primary focus-visible:shadow-none" required />
                                    </div>
                                    <div class="form-group mb-6">
                                        <input value={email} onChange={handleChange} id="email" name="email" type="email" placeholder="Your Email"
                                            class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-[#1a237e] outline-none focus:border-primary focus-visible:shadow-none" required />
                                    </div>

                                    <div class="form-group mb-6">
                                        <textarea value={message} onChange={handleChange} id="message" name="message" rows="6" placeholder="Your Message"
                                            class="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-[#1a237e] outline-none focus:border-primary focus-visible:shadow-none" required></textarea>
                                    </div>

                                    <div>
                                        <a onClick={sendMessage}
                                            class="block w-full rounded-md border bg-gradient-to-tr from-pink-500 to-rose-600 shadow-[#1a237e]/25 hover:bg-pink-600 p-4 text-center text-base font-semibold text-white transition ">
                                            Send Message
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                                <div class="flex flex-wrap">
                                    <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                        <div class="flex items-start">
                                            <div class="shrink-0">
                                                <div class="p-4 bg-pink-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" class="w-5 text-white"
                                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="grow ml-6">
                                                <p class="font-bold mb-1">Technical support</p>
                                                {/* <p class="text-gray-500">kharrakalu@gmail.com</p> */}
                                                <p class="text-gray-500">+91 7425967649</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                        <div class="flex items-start">
                                            <div class="shrink-0">
                                                <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign"
                                                        class="w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                                                        <path fill="currentColor"
                                                            d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="grow ml-6">
                                                <p class="font-bold mb-1">Sales questions</p>
                                                <p class="text-gray-500">sales@example.com</p>
                                                <p class="text-gray-500">+1 234-567-89</p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                        <div class="flex align-start">
                                            <div class="shrink-0">
                                                <div class="p-4 bg-pink-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                                                        class="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor"
                                                            d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="grow ml-6">
                                                <p class="font-bold mb-1">Content related</p>
                                                <p class="text-gray-500">mukeshdhaka673@gmail.com</p>
                                                <p class="text-gray-500">+91 8459665696</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                        <div class="flex align-start">
                                            <div class="shrink-0">
                                                <div class="p-4 bg-pink-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" class="w-5 text-white"
                                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="grow ml-6">
                                                <p class="font-bold mb-1">Bug report</p>
                                                {/* <p class="text-gray-500">kharrakalu@gmail.com</p> */}
                                                <p class="text-gray-500">+91 7425967649</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>



                <Footer />
            </div>

        </>
    );
}
