"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { mostPopularImage as images } from "../libs/data";
import { FaArrowRight } from "react-icons/fa";

const Popular = () => {
  const [isHovered, setIsHovered] = useState('');
  const animVarient = {
    initial:{
      scale:0,
      opacity:0,
      rotate:'-90deg',
      y:250,
      x:100
    },
    hover:{
      scale:1,
      opacity:1,
      rotate:'0deg',
      y:0,
      x:50,
    }
  }

  return (
    <main className="min-h-screen px-5">
      <section className="container">
        <header className="mb-20 ">
          <span className="text-primary-100 block mb-5">Destinations</span>
          <h2 className="text-primary-100 text-4xl md:text-6xl font-bold mb-8">
            Our most popular destinations
          </h2>
          <Link
            className="flex items-center text-primary-100 gap-3 hover:underline"
            href="/"
          >
            <span className="bg-primary-100 text-white w-[40px] h-[40px] rounded-full flex  justify-center items-center ">
              <FaArrowRight className="w-3 h-3" />
            </span>
            View all destinations
          </Link>
        </header>
        <div>
          {images.map((item) => (
            <div
              key={item.id}
              onMouseEnter={()=>setIsHovered(item.id)}
              onMouseLeave={()=>setIsHovered('')}
              className="p-3 flex border-b border-slate-400 relative"
            >
              <span>{item.id}</span>
              <h4 className="text-5xl md:text-8xl font-bold text-primary-100">
                {item.city}
              </h4>
              <motion.img               
                variants={animVarient}
                animate={isHovered === item.id ? 'hover':'initial'}
                transition={{ type: "spring" }}
                className="absolute z-20 -top-16 left-1/2 rounded-lg object-cover shadow-2xl w-23 h-32 md:h-72 md:w-80"
                src={item.img}
                alt={item.city}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Popular;