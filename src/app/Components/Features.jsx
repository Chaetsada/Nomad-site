"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
//import component
import ButtonLink from "./ButtonLink";
//import data
import { featuresImages as images } from "../Utils/data";
//import icon
import { IoHomeOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";


const Features = () => {
  const [index, setIndex] = useState(0);
  const timeOutRef = useRef(null);
  const delay = 3000;

  //Clear Interval function
  const resetTimeout = () =>{
    if(timeOutRef.current){
      clearTimeout(timeOutRef.current)
    }
  }
  
  useEffect(()=>{
    resetTimeout();
    timeOutRef.current = setTimeout(()=>{
        setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    },delay);
  
  },[index])
  
  return (
    <main className="min-h-fit md:h-screen mb-20 md:mb-0">
      <div className="container px-5">
        <header className="mb-14">
          <span className="text-primary-100 block mb-5">What’s included?</span>
          <h2 className="text-primary-100 text-4xl font-cal md:text-6xl font-bold mb-8">Work remotely. Travel the world.</h2>
            <Link href="/about" className="flex items-center gap-3 group">
              <ButtonLink/>
              Learn how it works
            </Link>
        </header>
        {/* IMAGE SLIDER */}
        <section className="w-full h-[120vh] md:h-fit  relative ">
          <div className="hidden lg:block w-full h-[700px] rounded-2xl overflow-hidden relative">
            <Image 
              className="object-cover" 
              src={images[index]}  
              alt="features-image" 
              fill 
            />           
            </div>
            <div className="absolute top-0 w-full h-full md:grid md:grid-cols-2 lg:grid-cols-4 lg:place-content-end lg:p-5 gap-4 ">
              {/* GRID CONTENT - ACCOMMODATIONS */}
              <div 
                className={` ${index === 0 ? 'bg-primary-100':'bg-white'} h-[270px] bg-opacity-90 mb-2 rounded-xl p-7 hover:cursor-pointer`}
                onClick={()=>setIndex(0)}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <IoHomeOutline className={` ${index === 0 ? 'text-white':'text-primary-100'} w-10 h-10 `} />
                  </div>
                  <div>
                    <h4 className={` ${index === 0 ? 'text-white':'text-primary-100'} text-2xl font-bold`}>Accommodations</h4>
                    <p className={` ${index === 0 ? 'text-white':'text-primary-100'} `}>Centrally located, aprtment or condo accomodations.</p>
                  </div>
                </div>
              </div>
              {/* GRID CONTENT - CO-WORKING */}
              <div 
                className={` ${index === 1 ? 'bg-primary-100':'bg-white'} h-[270px] bg-opacity-90 mb-2 rounded-xl p-7 hover:cursor-pointer`}
                onClick={()=>setIndex(1)}
              >
                <div className="flex flex-col h-full justify-between">
                <div>
                    <RiComputerLine className={` ${index === 1 ? 'text-white':'text-primary-100'} w-10 h-10 `} />
                  </div>
                  <div>
                    <h4 className={` ${index === 1 ? 'text-white':'text-primary-100'} text-2xl font-bold`}>Co-working spaces</h4>
                    <p className={` ${index === 1 ? 'text-white':'text-primary-100'} `}>24/7 access to co-working space with strong WiFi.</p>
                  </div>
                </div>
              </div>
              {/* GRID CONTENT - COMMUNITY */}
              <div 
                className={` ${index === 2 ? 'bg-primary-100':'bg-white'} h-[270px] bg-opacity-90 mb-2 rounded-xl p-7 hover:cursor-pointer`}
                onClick={()=>setIndex(2)}
              >
                <div className="flex flex-col h-full justify-between">
                <div>
                    <IoPersonOutline className={` ${index === 2 ? 'text-white':'text-primary-100'} w-10 h-10 `} />
                  </div>
                  <div>
                    <h4 className={` ${index === 2 ? 'text-white':'text-primary-100'} text-2xl font-bold`}>Community</h4>
                    <p className={` ${index === 2 ? 'text-white':'text-primary-100'} `}>Like-minded nomads working and traveling the world.</p>
                  </div>
                </div>
              </div>
              {/* GRID CONTENT - LOCAL EX */}
              <div 
                className={` ${index === 3 ? 'bg-primary-100':'bg-white'} h-[270px] bg-opacity-90 mb-2 rounded-xl p-7 hover:cursor-pointer`}
                onClick={()=>setIndex(3)}
              >
                <div className="flex flex-col h-full justify-between">
                <div>
                    <CiLocationOn className={` ${index === 3 ? 'text-white':'text-primary-100'} w-10 h-10 `} />
                  </div>
                  <div>
                    <h4 className={` ${index === 3 ? 'text-white':'text-primary-100'} text-2xl font-bold`}>Local Experiences</h4>
                    <p className={` ${index === 3 ? 'text-white':'text-primary-100'} `}>Make memories with inclusive local experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </main>
  );
};

export default Features;
