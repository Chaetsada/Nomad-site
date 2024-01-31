import React from 'react'
import { useSwiper } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const SwiperButton = () => {
    const swiper = useSwiper();
  return (
    <div className='flex gap-2'>
        <button
            className='w-[90px] h-[90px] flex justify-center items-center rounded-full bg-white bg-opacity-60 active:scale-95' 
            onClick={() => swiper.slidePrev()}
        >
            <FaArrowLeft className='w-5 h-5 text-primary-100' />
        </button>
        <button
            className='w-[90px] h-[90px] flex justify-center items-center rounded-full bg-white bg-opacity-60 active:scale-95' 
            onClick={() => swiper.slideNext()}
        >
            <FaArrowRight className='w-5 h-5 text-primary-100' />
        </button>
    </div>
  )
}

export default SwiperButton