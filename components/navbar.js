import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import Script from 'next/dist/client/script';
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { BiCategoryAlt, BiCodeBlock } from 'react-icons/bi'

const Navbar = () => {


  const [hidesearch, setHidesearch] = useState(true)
  const [hidenotifications, setHidenav] = useState(true)

  const [query, setQuery] = useState('bhav');
  const handlechange = (e) => {
    if (e.target.name == 'query') {
      setQuery(e.target.value)
    }
  }

  return (
    <>

      {/* navbar */}
      <nav className="relative px-4 py-2 mx-3 my-2 rounded-md bg-gray-200 flex shadow-lg justify-between items-center ">

        <a className="text-3xl font-bold leading-none" href="#">
          <img className="block h-10 w-auto " src="/logolight2.png" alt="MANDI" />
        </a>



        {/*  mobile search and hamburger menu  */}
        <div className="lg:hidden flex">
          <button onClick={() => setHidesearch(!hidesearch)} type="button" className="mx-2 flex text-gray-800 rounded-full lg:hidden text-sm items-center" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <span className="sr-only">View notifications</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

          </button>
          <button onClick={() => setHidenav(!hidenotifications)} className="navbar-burger flex items-center text-gray-800 p-3">
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        {/* end */}
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li><a href='/' className="text-sm text-gray-800 hover:text-gray-900 font-bold">Home</a></li>
          <li><a href="/sharemarket" className="text-sm text-gray-800 hover:text-gray-900 font-bold" >Share Market</a></li>
          <li><a href="/mandi" className="text-sm text-gray-800 hover:text-gray-900 font-bold">Mandi Bhav</a></li>
          {/* <li><Link href={'/codes'}><a class="text-sm text-gray-800 hover:text-gray-200 font-bold" href="#">Codes</a></Link></li> */}
          <li><a href="/news" className="text-sm text-gray-800 hover:text-gray-900 font-bold" >News</a></li>
          <li><a href="/about" className="text-sm text-gray-800 flex hover:text-gray-900 font-bold">About</a></li>
          <li><a href="/contact" className="text-sm text-gray-800 flex hover:text-gray-900 font-bold">Contact Us</a></li>
          <li><a href="/privacy.html" className="text-sm text-gray-800 flex hover:text-gray-900 font-bold">Privacy policy</a></li>
          {/* <li><Link href={'/privacy.html'}><a class="text-sm text-gray-800 flex hover:text-gray-200 font-bold">Privacy policy</a></Link></li> */}
        </ul>
        <button onClick={() => setHidesearch(!hidesearch)} type="button" className="rounded-full lg:block hidden text-sm focus:outline-none " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
          <span className="sr-only">View notifications</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

        </button>
      </nav>

      <div hidden={hidesearch} className="absolute right-0 z-50 mt-2 w-80 md:w-96 origin-bottom-right  rounded-lg bg-white  shadow-lg" role="menu" aria-orientation="vertical" >
        <form>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
          <div className="relative">
            <input onChange={handlechange} type="search" value={query} name="query" id="query" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Codes, Projects..." required />
            <Link href={`/search/${query}`}><button type="submit" className="text-gray-900 bg-white absolute right-2.5 bottom-2.5 border hover:bg-gray-900 hover:text-white border-gray-900  font-medium rounded-lg text-sm px-4 py-2 ">Search</button></Link>
          </div>
        </form>

      </div>

      <div className="navbar-menu absolute z-50" hidden={hidenotifications} >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-4 right-3 flex flex-col w-4/6 max-w-sm py-3 px-6 bg-white border-r rounded-lg  overflow-y-auto">
          <div className="flex relative items-center mb-8">

            <button className="absolute top-0 right-2 navbar-close" onClick={() => setHidenav(!hidenotifications)}>
              <svg className="h-6 w-6 text-gray-900 cursor-pointer hover:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a href='/' className="block p-2 text-sm font-semibold text-gray-800  rounded">होम पेज</a>
              </li>

              <li className="mb-1">
                <a href="/sharemarket" className="block p-2 text-sm font-semibold text-gray-800  rounded" >कृषि शेयर बाजार</a>
              </li>

              <li className="mb-1">
                <a href='/mandi' className="block p-2 text-sm font-semibold text-gray-800  rounded" >मंडी भाव</a>
              </li>
              <li className="mb-1">
                <a href='/news' className="block p-2 text-sm font-semibold text-gray-800  rounded" >कृषि समाचार</a>
              </li>
              <li className="mb-1 flex">
                <a href='/about' className="flex p-2 text-sm font-semibold text-gray-800 rounded" >About Us</a>
              </li>
              <li className="mb-1 flex">
                <a href='/contact' className="flex p-2 text-sm font-semibold text-gray-800 rounded" >Contact Us</a>
              </li>
              <li className="mb-1 flex">
                <a href='/privacy.html' className="flex p-2 text-sm font-semibold text-gray-800 rounded" >Privacy Policy</a>
              </li>


            </ul>
          </div>
          <div className="mt-auto">

            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
      {/* navbar end */}

    </>
  )
}

export default Navbar