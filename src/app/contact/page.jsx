import React from "react";
//import component
import Newsletter from "../Components/Newsletter";
//import icon
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen bg-main">
      <div className="container pt-[110px] pb-20 px-5">
        <header className="h-[320px]  pt-[110px] p-10 bg-secondary-100 rounded-2xl flex items-end justify-start mb-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-7xl font-bold text-black">
              Contact us
            </h2>
            <p>Feel free to contact us or leave us a message</p>
          </div>
        </header>
        <section className="max-w-4xl h-fit mx-auto mb-20">
          <ul className="space-y-2  mb-20">
            <li className="p-6 w-full rounded-2xl flex items-center justify-between bg-secondary-100">
              <AiOutlineMail className="text-2xl" />
              <p className="md:text-xl">support@website.com</p>
            </li>
            <li className="p-6 w-full rounded-2xl flex items-center justify-between bg-secondary-100">
              <FiPhone className="text-2xl" />
              <p className="md:text-xl">030-123-4567</p>
            </li>
            <li className="p-6 w-full rounded-2xl flex items-center justify-between bg-secondary-100">
              <IoHomeOutline className="text-2xl" />
              <p className="md:text-xl">987 Framer Ave. Austin, Texas</p>
            </li>
          </ul>
          <div className="flex flex-col items-center mb-20">
            <h3 className="text-5xl font-bold ">Get in touch</h3>
            <p>Leave us a message!</p>
          </div>
          <form className="">
            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <input
                className=" flex-1 text-xl p-4 rounded-xl outline-none placeholder:text-zinc-500 bg-secondary-100"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="flex-1 text-xl p-4 rounded-xl outline-none placeholder:text-zinc-500 bg-secondary-100"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <textarea
              className="w-full text-xl p-4 rounded-xl outline-none placeholder:text-zinc-500 bg-secondary-100"
              name="message"
              cols="30"
              rows="15"
              placeholder="Message"
            />
            <button className="mt-5 w-full py-4 bg-black rounded-md text-white md:text-xl font-semibold hover:opacity-80">
              Send message
            </button>
          </form>
        </section>
        <Newsletter />
      </div>
    </div>
  );
};

export default Contact;
