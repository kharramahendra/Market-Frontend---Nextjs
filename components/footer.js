import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    const [news, setData] = useState()

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/footer/`)
        const json_res = await res.json()
        let posts = JSON.parse(JSON.stringify(json_res))
        let news = posts.news

        setData(news)
    }

    return (
        <>

            <a href="//www.dmca.com/Protection/Status.aspx?ID=cb7f3c03-d630-4302-9524-0da8a8eae14d" title="DMCA.com Protection Status" class="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-10.png?ID=cb7f3c03-d630-4302-9524-0da8a8eae14d" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>




            <footer class="text-gray-600 body-font bg-gray-100">
                <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                    <div class="containerx">
                        <div class="-mx-4 flex flex-wrap justify-center">
                            <div class="w-full px-4">
                                <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                    <span class="mb-2 block text-lg font-semibold text-tensor">
                                    ये भी पढ़े
                                    </span>

                                </div>
                            </div>
                        </div>

                        <div class="-mx-4 flex flex-wrap">

                            {news.map((post) => {
                                return <div ey={post._id} class="md:w-1/2 w-full mx-auto px-4">
                                    <div class="w-full py-6">
                                        <div class="flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
                                            {post.image != null && <div class="w-1/3 bg-cover" style={{ backgroundImage: "url(" + process.env.NEXT_PUBLIC_HOST / post.image + ")", }}></div>}
                                            {post.image == null && post.image_url != '' && <div class="w-1/3 bg-cover" style={{ backgroundImage: "url(" + post.image_url + ")", }}></div>}
                                            {post.image == null && post.image_url == '' && <div class="w-1/3 bg-cover" style={{ backgroundImage: "url(" + '../assets/images/codes/temp4.jpg' + ")", }}></div>}


                                            <div class="w-2/3 p-4">
                                                {/* <h1 class="text-rose-600 font-bold text-sm">{post.category}</h1> */}
                                                <p class=" text-gray-900 text-md font-semibold">{post.title}</p>
                                                <div class="flex item-center mt-2">
                                                    <p class="text-base leading-relaxed text-gray-800">
                                                        {post.timestamp}
                                                    </p>

                                                </div>
                                                <div class="flex item-center justify-between mt-3">
                                                    <h1 class="text-rose-700 font-bold text-md">कृषि समाचार</h1>
                                                    <Link href={`/post/${post.slug}`}><button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">अधिक जानें</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}



                        </div>
                    </div>
                </section>
               



                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a class="max-w-[160px] flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        {/* <a href="/" class="mb-6 inline-block max-w-[160px]"> */}
                        <img src="/logolight2.png" alt="logo" class="max-w-full" />

                    </a>
                    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 tensorcodes.com
                        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"></a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://www.facebook.com/kharra.mahendra"
                            class="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-tensor hover:text-tensor sm:mr-4 lg:mr-3 xl:mr-4">
                            <svg width="8" height="16" viewBox="0 0 8 16" class="fill-current">
                                <path
                                    d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/tensorcodes/"
                            class="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-tensor hover:text-tensor sm:mr-4 lg:mr-3 xl:mr-4">
                            <AiFillInstagram />

                        </a>
                        <a href="https://github.com/kaluramkharra"
                            class="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-tensor hover:text-tensor sm:mr-4 lg:mr-3 xl:mr-4">
                            {/* <svg width="16" height="12" viewBox="0 0 16 12" class="fill-current">
                                            <path
                                                d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                                        </svg> */}
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/mahendra-kharra/"
                            class="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-tensor hover:text-tensor sm:mr-4 lg:mr-3 xl:mr-4">
                            <svg width="14" height="14" viewBox="0 0 14 14" class="fill-current">
                                <path
                                    d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>

        </>
    )
}

export default Footer