import React from "react";
import Link from "next/link";
//import component
import Accordion from "../Components/Accordion";
import Newsletter from "../Components/Newsletter";
import ButtonLink from "../Components/ButtonLink";
//import data
import { accordionData } from "../Utils/content";


const FAQ = () => {
  return (
    <div className="min-h-screen bg-main">
      <div className="container pt-[110px] pb-20">
        <header className="h-[320px]  pt-[110px] p-10 bg-secondary-100 rounded-2xl flex items-end justify-start">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-7xl font-bold text-primary-100">
              Frequently Asked <br /> Questions
            </h2>
            <p>Got questions? Find your answers here.</p>
          </div>
        </header>
        <section className="mt-20">
          <div>
            {accordionData.map(({id,title,content})=>(
              <Accordion key={id} title={title} content={content} />
            ))}
          </div>
        </section>
        <div className="mt-20">
          <div className="flex flex-col gap-3 mb-5">
            <h4 className="text-3xl font-bold">Have more questions?</h4>
            <p className="text-xl">Feel free to contact us or leave us a message.</p>
          </div>
          <Link href='/contact' className="flex items-center gap-3 group">
            <ButtonLink/>
            <span className="text-xl group-hover:underline">Contact us</span>
          </Link>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
};

export default FAQ;
