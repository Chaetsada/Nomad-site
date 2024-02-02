'use client'
import React from 'react'
import { motion } from 'framer-motion'


const animVarient = {
  initial:{
    scale:0.2,
    opacity:0,
  },
  animate:{
    scale:1,
    opacity:1,
  }
}

const Newsletter = () => {
  
  return (
    <main className='h-[90vh]'>
        <div className='container h-full flex justify-center items-center px-5'>
            <div className='h-fit w-full px-5 py-20 md:py-32 flex flex-col justify-center items-center bg-secondary-100 rounded-2xl relative'>
                <span className='text-primary-100 font-semibold mb-5'>comunity</span>
                <h4 className='text-3xl text-center md:text-5xl font-bold text-primary-100 mb-5'>Subscribe to our Newsletter.</h4>
                <p className='md:text-xl text-primary-100 max-w-4xl text-center mb-10'>Join a group of like-minded digital nomads working and traveling the world together. Get updates on new deals and discounts for every destination.</p>
                <div className='flex flex-col md:flex-row gap-3'>
                    <input className='px-5 py-4 rounded-md w-full md:w-[400px] outline-none' type="email" placeholder='Enter your email'/>
                    <button className='px-5 py-4 w-full md:w-fit text-white bg-primary-100 font-bold rounded-md hover:opacity-80 active:scale-90'>Subscribe</button>
                </div>
                {/* STAT */}
                <motion.div 
                  variants={animVarient} initial='initial' whileInView='animate' viewport={{ once:true }} transition={{ type:"spring"}}  
                  className='hidden md:block absolute -top-10 -right-10 z-10 w-60 h-60 bg-primary-100 shadow-2xl rounded-full '
                >
                  <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                    <h4 className='text-6xl font-bold text-white'>88%</h4>
                    <span className='text-xl font-bold text-white'>Traveling alone</span>
                  </div>
                </motion.div>
                <motion.div 
                  variants={animVarient} initial='initial' whileInView='animate' viewport={{ once:true }} transition={{ type:"spring"}}  
                  className='hidden md:block absolute -top-32 -left-10 z-10 w-72 h-72 bg-primary-100 shadow-xl rounded-full '
                >
                  <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                    <h4 className='text-6xl font-bold text-white'>92%</h4>
                    <span className='text-xl font-bold text-white'>21-52 years old</span>
                  </div>
                </motion.div>
                <motion.div 
                  variants={animVarient} initial='initial' whileInView='animate' viewport={{ once:true }} transition={{ type:"spring"}}  
                  className='hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 z-10 w-52 h-52 bg-primary-100 shadow-2xl rounded-full '
                >
                  <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                    <h4 className='text-6xl font-bold text-white'>92%</h4>
                    <span className='text-xl font-bold text-white'>21-52 years old</span>
                  </div>
                </motion.div>
                <motion.div 
                  variants={animVarient} initial='initial' whileInView='animate' viewport={{ once:true }} transition={{ type:"spring"}}  
                  className='hidden md:block absolute -bottom-20 left-20 z-10 w-60 h-60 bg-primary-100 shadow-2xl rounded-full '
                >
                  <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                    <h4 className='text-6xl font-bold text-white'>72%</h4>
                    <span className='text-xl font-bold text-white'>Work in tech</span>
                  </div>
                </motion.div>
                <motion.div 
                  variants={animVarient} initial='initial' whileInView='animate' viewport={{ once:true }} transition={{ type:"spring"}}  
                  className='hidden md:block absolute -bottom-20 right-20 z-10 w-52 h-52 bg-primary-100 shadow-2xl rounded-full '
                >
                  <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                    <h4 className='text-6xl font-bold text-white'>9%</h4>
                    <span className='text-xl font-bold text-white'>Founders <br /> and CEOs</span>
                  </div>
                </motion.div>
            </div>
        </div>
    </main>
  )
}

export default Newsletter