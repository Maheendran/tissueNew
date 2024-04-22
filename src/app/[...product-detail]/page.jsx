"use client"
import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
// import { useRouter } from "next/navigation";
const Page = () => {

  const currentURL = window.location.href;
  const splitArray = currentURL.split("/");

  console.log(splitArray[splitArray.length-1],'name')
  return (<>
     <Navbar/>
     <div className='w-full h-[180vh] border bg-red-300'>

</div>
     <Footer/>
  </>
 
  )
}

export default Page