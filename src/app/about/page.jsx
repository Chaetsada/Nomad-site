'use client'
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Newsletter from "../Components/Newsletter";
import { teamMembers } from "../libs/data";

const About = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start end","end end"]
  });

  const h1 = useTransform(scrollYProgress,[0.1,0.2],['0','100%']);
  const h2 = useTransform(scrollYProgress,[0.25,0.4],['0','100%']);
  const h3 = useTransform(scrollYProgress,[0.4,0.6],['0','100%']); //ACCOMUDATION
  const h4 = useTransform(scrollYProgress,[0.6,0.7],['0','100%']);//CO-WORKING
  const h5 = useTransform(scrollYProgress,[0.75,0.85 ],['0','100%']);
  const h6 = useTransform(scrollYProgress,[0.85,1],['0','100%']);

  const o1 = useTransform(scrollYProgress,[0,0.1],[0,1]);
  const o2 = useTransform(scrollYProgress,[0.1,0.2],[0,1]);
  const o3 = useTransform(scrollYProgress,[0.2,0.3],[0,1]);
  const o4 = useTransform(scrollYProgress,[0.4,0.5],[0,1]);
  const o5 = useTransform(scrollYProgress,[0.6,0.7],[0,1]);
  const o6 = useTransform(scrollYProgress,[0.8,0.9],[0,1]);
  const o7 = useTransform(scrollYProgress,[0.9,1],[0,1]);

  const animVarient= {
    initial:{
      y:100,
      opacity:0.2
    },
    animate:{
      y:0,
      opacity:1,
    },
    transition:{
      duration:5
    },
  }

  

  return (
    <div className="min-h-screen bg-main">
      <div className="container px-3">
        <div className=" pt-[130px] pb-20">
          <h1 className="text-4xl md:text-[150px] text-primary-100 font-bold text-center leading-[90%] tracking-wide mb-5">
            What is nomad?
          </h1>
          <div className="h-[300px] md:h-[700px] w-full relative">
            <Image
              className="w-full h-full object-cover rounded-2xl"
              src='https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="header-image"
              fill
            />
          </div>
          <div className="flex  md:justify-end mt-16">
            <p className="md:text-2xl font-semibold max-w-2xl text-center md:text-start">
              Nomad is a travel startup providing travel programs and group work
              for digital nomads. Traveling solo can be daunting, so why not
              work remotely and explore the world with other like-minded
              members. Bring your self and your work. We'll take care of
              everything else.
            </p>
          </div>
        </div>

        <section className="min-h-fit flex flex-col gap-[80px]  ">
          <header className="flex justify-start ">
            <h2 className="text-4xl md:text-6xl font-bold max-w-2xl ">
              What to expect after booking...
            </h2>
          </header>
          <motion.div ref={ref} className="flex flex-col min-h-fit">
            {/* WEBINAR  */}
            <div className="flex gap-5 md:gap-20 h-fit">
              <div className="hidden md:block flex-1 min-h-fit max-w-[640px] pb-[128px]"></div>
              <div className="flex flex-col items-center">
                <div className="md:p-5 flex justify-center items-center ">
                  <motion.div style={{opacity:o1}} className="w-5 h-5 rounded-full bg-black" />
                </div>
                <motion.div style={{height:h1}} className="w-[4px]  bg-black" ></motion.div>
              </div>
              <div className="flex-1  min-h-fit flex justify-center  pb-[50px]">
                <motion.div 
                  variants={animVarient} initial="initial" whileInView="animate" transition="transition" 
                  className="flex  flex-col w-full min-h-fit bg-secondary-100 p-5 md:p-10 gap-10 rounded-2xl"
                >
                  <div className="flex flex-col gap-5">
                    <h4 className="text-xl md:text-3xl font-bold">Online Webinar</h4>
                    <p className="md:text-xl">
                      Meet and get familiar with your local leader and other
                      nomads coming on the trip through an online webinar.
                    </p>
                  </div>
                  <div  className="h-[200px] md:h-[350px] w-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-xl"
                      src='https://images.unsplash.com/photo-1563986768817-257bf91c5753?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt="developer-image"
                      fill
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            {/* PRIVATE TRANFER */}
            <div className="flex gap-5 md:gap-20 h-fit">
              <div className=" flex-1 min-h-fit flex justify-center pb-[50px] order-2 md:order-none">
                <motion.div 
                  variants={animVarient} initial="initial" whileInView="animate" transition="transition" 
                  className="flex  flex-col w-full min-h-fit bg-secondary-100 p-5 md:p-10 gap-10 rounded-2xl "
                >
                  <div className="flex flex-col gap-5">
                    <h4 className="text-xl md:text-3xl font-bold">Private Transfer</h4>
                    <p className="md:text-xl">
                    We will pick you up from the airport in a private transfer and bring you to your accommodations.
                    </p>
                  </div>
                  <div className="h-[200px] md:h-[350px] w-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-xl"
                      src='https://images.unsplash.com/photo-1608748534664-912c712263dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt="plane-image"
                      fill
                    />
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col items-center ">
                <div className="md:p-5 flex justify-center items-center ">
                  <motion.div style={{opacity:o2}} className="w-5 h-5 rounded-full bg-black" />
                </div>
                <motion.div style={{height:h2}} className="w-[4px]  bg-black" />
              </div>
              <div className="hidden md:block  flex-1 min-h-fit max-w-[640px] pb-[128px]"></div>
            </div>
            {/* ACCOMUDATION */}
            <div className="flex gap-5 md:gap-20 h-fit">
              <div className="hidden md:block flex-1 min-h-fit max-w-[640px] pb-[128px]"></div>
              <div className="flex flex-col items-center">
                <div className="md:p-5 flex justify-center items-center">
                  <motion.div style={{opacity:o3}} className="w-5 h-5 rounded-full bg-black" />
                </div>
                <motion.div style={{height:h3}} className="w-[4px]  bg-black" />
              </div>
              <div className="flex-1  min-h-fit flex justify-center  pb-[50px]">
                <motion.div 
                  variants={animVarient} initial="initial" whileInView="animate" transition="transition" 
                  className="flex  flex-col w-full min-h-fit bg-secondary-100 p-5 md:p-10 gap-10 rounded-2xl"
                >
                  <div className="flex flex-col gap-5">
                    <h4 className="text-xl md:text-3xl font-bold">Accommodations</h4>
                    <p className="md:text-xl">
                      Unpack, relax, and settle into your centrally located accommodation.
                    </p>
                  </div>
                  <div className="h-[200px] md:h-[350px] w-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-xl"
                      src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt="Accommodations-image"
                      fill
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            {/* CO-WORKING */}
            <div className="flex gap-5 md:gap-20 h-fit">
              <div className="flex-1  min-h-fit flex justify-center pb-[50px] order-2 md:order-none">
                <motion.div 
                  variants={animVarient} initial="initial" whileInView="animate" transition="transition" 
                  className="flex  flex-col w-full min-h-fit bg-secondary-100 p-5 md:p-10 gap-10 rounded-2xl"
                >
                  <div className="flex flex-col gap-5">
                    <h4 className="text-xl md:text-3xl font-bold">Co-working Space</h4>
                    <p className="md:text-xl">
                      Work remotely in your designated workspace.
                    </p>
                  </div>
                  <div className="h-[200px] md:h-[350px] w-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-xl"
                      src='https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt="Co-working-image"
                      fill
                    />
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col items-center">
                <div className="md:p-5 flex justify-center items-center">
                  <motion.div style={{opacity:o4}} className="w-5 h-5 rounded-full bg-black" />
                </div>
                <motion.div style={{height:h4}} className="w-[4px]  bg-black" />
              </div>
              <div className="hidden md:block flex-1 min-h-fit max-w-[640px] pb-[128px]"></div>
            </div>
            {/* GUIDE TOUR */}
            <div className="flex gap-5 md:gap-20 h-fit">
              <div className="hidden md:block flex-1 min-h-fit max-w-[640px] pb-[128px]"></div>
              <div className="flex flex-col items-center">
                <div className="md:p-5 flex justify-center items-center">
                  <motion.div style={{opacity:o5}} className="w-5 h-5 rounded-full bg-black" />
                </div>
                <motion.div style={{height:h5}} className="w-[4px]  bg-black" />
              </div>
              <div className="flex-1  min-h-fit flex justify-center  pb-[50px]">
                <motion.div variants={animVarient} initial="initial" whileInView="animate" transition="transition" className="flex  flex-col w-full min-h-fit bg-secondary-100 p-10 gap-10 rounded-2xl">
                  <div className="flex flex-col gap-5">
                    <h4 className="text-xl md:text-3xl font-bold">Guided Tour</h4>
                    <p className="md:text-xl">
                      Discover and learn about your destination with a guided tour from your local leader.
                    </p>
                  </div>
                  <div className="h-[200px] md:h-[350px] w-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-xl"
                      src='https://images.unsplash.com/photo-1600714480856-dc99b28892eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt="Guided-image"
                      fill
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            {/* COMMUNITY */}
            <div className="flex gap-5 md:gap-20 h-fit">
              <div className="flex-1  min-h-fit flex justify-center pb-[50px] order-2 md:order-none">
                <motion.div 
                  variants={animVarient} initial="initial" whileInView="animate" transition="transition" 
                  className="flex  flex-col w-full min-h-fit bg-secondary-100 p-5 md:p-10 gap-10 rounded-2xl"
                >
                  <div className="flex flex-col gap-5">
                    <h4 className="text-xl md:text-3xl font-bold">Community</h4>
                    <p className="md:text-xl">
                      Hang out and get to know your new community or do your own thing.
                    </p>
                  </div>
                  <div className="h-[200px] md:h-[350px] w-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-xl"
                      src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt="community-image"
                      fill
                    />
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col items-center">
                <div className="md:p-5 flex justify-center items-center">
                  <motion.div style={{opacity:o6}} className="w-5 h-5 rounded-full bg-black" />
                </div>
                <motion.div style={{height:h6}} className="w-[4px]  bg-black" />
              </div>
              <div className="hidden md:block flex-1 min-h-fit max-w-[640px] pb-[128px]"></div>
            </div>
            {/* EXPERIENCE */}
            <div className="flex gap-5 md:gap-20 h-fit">
              <div className="hidden md:block flex-1 min-h-fit max-w-[640px] pb-[128px]"></div>
              <div className="flex flex-col items-center">
                <div className="md:p-5 flex justify-center items-center">
                  <motion.div style={{opacity:o7}} className="w-5 h-5 rounded-full bg-black" />
                </div>
              </div>
              <div className="flex-1  min-h-fit flex justify-center  pb-[50px]">
                <motion.div 
                  variants={animVarient} initial="initial" whileInView="animate" transition="transition" 
                  className="flex  flex-col w-full min-h-fit bg-secondary-100 p-5 md:p-10 gap-10 rounded-2xl"
                >
                  <div className="flex flex-col gap-5">
                    <h4 className="text-xl md:text-3xl font-bold">Experiences and Excursions</h4>
                    <p className="md:text-xl">
                      Explore and make memories with other members through experiences and excursions.
                    </p>
                  </div>
                  <div className="h-[200px] md:h-[350px] w-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-xl"
                      src='https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt="experience-image"
                      fill
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      {/* TEAM SECTION */}
      <section className="min-h-fit bg-secondary-100 relative px-5">
        <div className="container py-[100px] relative flex flex-col md:flex-row gap-12 h-full w-full">
          <div className="w-[33%] h-fit md:h-screen md:sticky top-[150px] flex flex-col items-start gap-5">
            <div className="flex flex-col gap-8 mb-5">
              <small className="text-xl">Our team</small>
              <h3 className="text-5xl font-bold">Meet your <br /> leaders</h3>
            </div>
              <p className="max-w-xl text-xl">Local, friendly staff members here to support you on your adventures.</p>
          </div>
          <div className="flex-1 min-h-fit w-full grid md:grid-cols-2 gap-10">
            {teamMembers.map((item)=>(
              <div key={item.name}>
                <div className="h-[380px] md:h-[450px] w-full relative mb-3">
                  <Image className="w-full h-full object-cover rounded-2xl" src={item.img} alt={item.name} fill />
                </div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-xl mb-5">{item.city}</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias animi sint repudiandae nihil quisquam obcaecati laudantium illum nulla non eos.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter/>
    </div>
  );
};

export default About;
