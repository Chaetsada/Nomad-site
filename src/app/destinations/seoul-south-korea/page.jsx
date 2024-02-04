import Image from "next/image";
import React from "react";
//import component
import Newsletter from "@/app/Components/Newsletter";
//import icon
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { PiMoneyLight } from "react-icons/pi";
import { TbArrowsCross } from "react-icons/tb";
import { FiCreditCard } from "react-icons/fi";

const imageUrl = [
  'https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const Seoul = () => {
  return (
    <div className="min-h-screen bg-main">
      <div className="container pt-[110px] px-5 mb-20">
        <header className="h-[720px] w-full mb-10 relative rounded-2xl overflow-hidden ">
          <Image
            className="w-full h-full object-cover "
            src={imageUrl[0]}
            alt="seoul-image"
            fill
          />
          <div className="absolute bottom-0 z-10 p-5 md:p-20 text-white flex flex-col gap-5 bg-gradient-to-t from-[#0005] to-[#0000]">
            <h3 className="text-4xl md:text-6xl font-bold ">Seoul, South Korea</h3>
            <p className="text-xl font-semibold">
              Next trip: <span>Jun 1, 2023 - Jun 7, 2023</span>
            </p>
          </div>
        </header>

        <section className="grid md:grid-cols-4 gap-5 h-fit md:h-[180px] mt-[100px]">
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <FaRegSmile className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>National Language</p>
              <span className="text-xl font-bold text-black">Korean</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <MdOutlineWbSunny className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Weather</p>
              <span className="text-xl font-bold text-black">
                81° F / 44° F
              </span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <IoTimeOutline className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Time zone</p>
              <span className="text-xl font-bold text-black">GMT+9</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <PiMoneyLight className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Currency</p>
              <span className="text-xl font-bold text-black">
                South Korean Won
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-14 mt-[100px] relative">
          <div className="flex-1 min-h-fit mb-10">
            <div className="flex flex-col gap-10">
              <h3 className="text-5xl font-bold font-cal ">Infomation</h3>
              <p className=" md:text-xl ">
                Seoul, the capital city of South Korea, is a vibrant and
                bustling metropolis that seamlessly combines ancient traditions
                with modern innovation. Nestled along the banks of the Han River
                and surrounded by picturesque mountains, Seoul is a city of
                contrasts, where gleaming skyscrapers stand alongside historic
                palaces, and serene temples coexist with trendy neighborhoods.
              </p>
            </div>
            {/* RECOMMENDED ACTIVITIES */}
            <div className="mt-20 ">
              <h4 className="text-4xl font-bold mb-10 font-cal">Recommended Activities</h4>
              <div className="h-[480px] w-full relative rounded-2xl overflow-hidden">
                <Image
                  className="w-full h-full object-cover" 
                  src={imageUrl[1]}
                  alt="namsan-tower" 
                  fill />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b>Explore Gyeongbokgung Palace</b>: Visit this iconic palace, which
                  dates back to the Joseon dynasty.
                </li>
                <li className="md:text-xl">
                  <b>Wander through Bukchon Hanok Village</b>: Take a walk in this
                  traditional neighborhood with well-preserved hanok houses.
                </li>
                <li className="md:text-xl">
                  <b>Shop and eat at Myeongdong</b>: This bustling shopping district is
                  known for its fashion boutiques, cosmetic shops, and street
                  food stalls.
                </li>
                <li className="md:text-xl">
                  <b>Visit Namsan Seoul Tower</b>: Take a cable car up to this iconic
                  landmark for breathtaking panoramic views of the city.
                </li>
                <li className="md:text-xl">
                  <b>Take a stroll along the Cheonggyecheon Stream</b>: This urban
                  oasis offers a peaceful escape from the city's hustle and
                  bustle.
                </li>
              </ol>
            </div>
            {/* MUST TRY FOOD */}
            <div className="mt-20">
              <h4 className="text-4xl font-bold mb-10 font-cal">Must-try food</h4>
              <div className="h-[480px] w-full relative rounded-2xl overflow-hidden">
                <Image
                  className="w-full h-full object-cover" 
                  src={imageUrl[2]} 
                  alt="korea foodr" 
                  fill />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b>Kimchi</b>: A traditional Korean side dish made from fermented vegetables, most commonly cabbage. It is spicy, tangy, and packed with flavor.
                </li>
                <li className="md:text-xl">
                  <b>Bibimbap</b>: A popular Korean dish consisting of a bowl of rice topped with various vegetables, meat (or tofu), and a fried egg. It is often served with gochujang (red chili paste) on the side.
                </li>
                <li className="md:text-xl">
                  <b>Korean Barbecue (Gogi-gui)</b>: Enjoy the experience of grilling your own meat at the table. Choose from a variety of marinated or unmarinated meats such as bulgogi (marinated beef) or samgyeopsal (pork belly).
                </li>
                <li className="md:text-xl">
                  <b>Tteokbokki</b>: Spicy rice cakes stir-fried with gochujang, fish cakes, and vegetables. It's a popular street food dish known for its chewy texture and fiery flavor.
                </li>
                <li className="md:text-xl">
                  <b>Samgyetang</b>: A nutritious dish made of a whole young chicken stuffed with rice, ginseng, garlic, and jujube. It is simmered until the meat is tender and served as a hot soup.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex-1 h-fit sticky top-[120px] z-10  p-14 max-w-[650px] rounded-2xl text-white bg-primary-100">
            <ul className="pb-[50px]  space-y-3 border-b border-gray-500">
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Accommodations</h6>
                <p className="text-xl font-semibold ">$700</p>
              </li>
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Co-working Space</h6>
                <p className="text-xl font-semibold ">$150</p>
              </li>
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Private transfer</h6>
                <p className="text-xl font-semibold ">$50</p>
              </li>
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Community excursions</h6>
                <p className="text-xl font-semibold ">$400</p>
              </li>
            </ul>
            <div className="flex items-center justify-between py-10">
              <h4 className="text-xl md:text-3xl font-bold">Total Due:</h4>
              <p className="text-2xl md:text-3xl font-bold">$1,300</p>
            </div>
            <ul className="space-y-10 mb-10">
              <li className="flex items-center gap-5">
                <div className="min-w-16 h-16 bg-primary-300 flex items-center justify-center rounded-md">
                  <IoTimeOutline className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="md:text-xl font-bold">Free cancellation</p>
                  <span className="text-xs">Within 24 hours of booking</span>
                </div>
              </li>
              <li className="flex items-center gap-5">
                <div className="min-w-16 h-16 bg-primary-300 flex items-center justify-center rounded-md">
                  <TbArrowsCross className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="md:text-xl font-bold">No Change Fees</p>
                  <span className="text-xs">Select a different trip free of charge.</span>
                </div>
              </li>
              <li className="flex items-center gap-5">
                <div className="min-w-16 h-16 bg-primary-300 flex items-center justify-center rounded-md">
                  <FiCreditCard className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="md:text-xl font-bold">Payment plan</p>
                  <span className="text-xs">Break up your payment into several installments.</span>
                </div>
              </li>
            </ul>
            <button className="w-full py-5 bg-primary-300 rounded-xl hover:opacity-70">
              Book destination
            </button>
          </div>
        </section>
      </div>
      <Newsletter/>
    </div>
  );
};

export default Seoul;
