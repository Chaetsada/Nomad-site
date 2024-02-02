"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Rotate as Hamburger } from "hamburger-react";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="fixed top-0 w-full z-[99] bg-main p-5 md:py-[32px] md:px-[92px] ">
      <div className="flex justify-between items-center relative">
        <div>
          <h2 className="text-primary-100 text-3xl font-bold">nomad.</h2>
        </div>
        <div>
          <Hamburger toggled={open} toggle={setOpen} />
        </div>
      </div>
      <nav className={` ${open ? "h-screen" : "h-0"} relative w-full z-[99] bg-main flex flex-col justify-center items-center gap-8 transition-all duration-700 ease-in-out overflow-hidden`}>
        <ul className="flex flex-col items-center justify-center gap-10 pb-32">
          <li className="flex items-center justify-center gap-5 group">
            <FaArrowRight className="hidden md:block -translate-x-4 opacity-0 w-12 h-12 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
            <Link className="text-5xl md:text-7xl font-bold" href="/about" onClick={()=>setOpen(!open)}>
              About
            </Link>
          </li>
          <li className="flex items-center justify-center gap-5 group">
            <FaArrowRight className="hidden md:block -translate-x-4 opacity-0 w-12 h-12 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
            <Link className="text-5xl md:text-7xl font-bold" href="/destinations" onClick={()=>setOpen(!open)}>
              Destinations
            </Link>
          </li>
          <li className="flex items-center justify-center gap-5 group">
            <FaArrowRight className="hidden md:block -translate-x-4 opacity-0 w-12 h-12 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
            <Link className="text-5xl md:text-7xl font-bold" href="/FAQ" onClick={()=>setOpen(!open)}>
              FAQs
            </Link>
          </li>
          <li className="flex items-center justify-center gap-5 group">
            <FaArrowRight className="hidden md:block -translate-x-4 opacity-0 w-12 h-12 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
            <Link className="text-5xl md:text-7xl font-bold" href="/contact" onClick={()=>setOpen(!open)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Navbar;
