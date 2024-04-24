import React from 'react'
import Navbar from '../component/Navbar'
import MianFooter from '@/app/pages/Footer/Page'
const page = () => {
  return (
    <>

      <Navbar/>
      <div className='h-[15vh]'></div>
      <div className='w-[70%] mx-auto h-[57vh]'>
<p className='text-[2rem] text-center my-[2rem] font-bold text-neutral-500'>About</p>
<p className='text-[0.9rem] text-neutral-500'> <span className='text-[1.5rem]'>O
  </span>ur journey began about 20 years ago in an India that was nascent to the concept of dry cleanliness and hygiene. With the intention to change the course of the country’s public health as well as habits and confident of the opening economy and the growing education rate, we pioneered the first step towards personal care and hygiene with Just in case hygiene tissue products.

We have come a long way since then and so has India. With Just in case box tissues gradually finding their place in homes, work places, cars and such, we soon introduced various other products like toilet rolls, kitchen towels and napkins and hoped to gradually integrate the products into the daily lives of the people. The growth in the awareness towards hygiene in India has been immensely promising and the shift in the behaviour patterns has been extremely encouraging.</p>
      </div>
<MianFooter/>
    </>
  )
}

export default page