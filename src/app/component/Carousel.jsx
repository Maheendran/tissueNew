import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full h-full'>
            <img className='w-full h-full' src="https://www.mockupdaddy.com/wp-content/uploads/edd/2019/08/Premium-Vinyl-Banner-Mockup.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full'>
            <img className='w-full h-full' src="https://www.mockupdaddy.com/wp-content/uploads/edd/2019/05/Banner-500x331.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full'>
            <img className='w-full h-full' src="https://www.mockupdaddy.com/wp-content/uploads/edd/2019/08/Premium-Vinyl-Banner-Mockup.jpg" alt="" />
          </div>
        </SwiperSlide>
      
      
      </Swiper>
    </>
  );
}
