import React from 'react'
import Videosection from '@/app/pages/video/Video'
import Navbar from '../component/Navbar'
import MianFooter from '@/app/pages/Footer/Page'

const page = () => {
  return (
    <div className='bg-white'>
    <Navbar/>
        <Videosection/>
        <MianFooter/>
    </div>
  )
}

export default page