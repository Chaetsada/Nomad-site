"use client";
import React from "react";
import Image from "next/image";
//import data
import { headerImages as images } from "../libs/data";
//import swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperButton from "./SwiperButton";

const Header = () => {
  return (
    <div className="h-screen ">
      <div className="pt-[130px] pb-[80px] container px-5 h-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          speed={1500}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="fixed h-full w-full rounded-2xl"
        >
          {images.map((item)=>(
            <SwiperSlide key={item.city} className="w-full h-full ">
              <Image
                className="object-cover rounded-2xl"
                src={item.src}
                alt="Image-slide"
                fill
              />
            </SwiperSlide>
          ))}

          <div className="w-full h-full absolute top-0 left-0 z-10 rounded-2xl bg-gradient-to-t from-[#0009] to-[#0000]" />

          <div className="absolute bottom-20 left-10 z-20 flex flex-col gap-5">
            <h2 className="text-white text-3xl md:text-6xl font-bold">
              Work from anywhere.
            </h2>
            <p className="text-white md:text-xl max-w-2xl">
              Work remotely, explore various destinations, and make lasting
              memories with a comminity of digital nomads
            </p>
          </div>

          <div className="absolute bottom-5 right-1/2 translate-x-1/2 md:translate-x-0 md:right-14  z-20">
            <SwiperButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
