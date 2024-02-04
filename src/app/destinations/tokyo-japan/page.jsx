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
  "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581781870027-04212e231e96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Tokyo = () => {
  return (
    <div className="min-h-screen bg-main">
      <div className="container pt-[110px] px-5 mb-20">
        <header className="h-[720px] w-full mb-10 relative rounded-2xl overflow-hidden ">
          <Image
            className="w-full h-full object-cover "
            src={imageUrl[0]}
            alt="Tokyo-image"
            fill
          />
          <div className="absolute bottom-0 z-10 p-5 md:p-20 text-white w-full flex flex-col gap-5 bg-gradient-to-t from-[#0005] to-[#0000]">
            <h3 className="text-4xl md:text-6xl font-bold ">Tokyo, Japan</h3>
            <p className="text-xl font-semibold">
              Next trip: <span>jun 7, 2023 - jun 14, 2023</span>
            </p>
          </div>
        </header>

        <section className="grid md:grid-cols-4 gap-5 h-fit md:h-[180px] mt-[100px]">
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <FaRegSmile className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>National Language</p>
              <span className="text-xl font-bold text-black">Japanese</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <MdOutlineWbSunny className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Weather</p>
              <span className="text-xl font-bold text-black">
                79° F / 42° F
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
              <span className="text-xl font-bold text-black">Japanese Yen</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-14 mt-[100px] relative">
          <div className="flex-1 min-h-fit mb-10">
            <div className="flex flex-col gap-10">
              <h3 className="text-5xl font-bold font-cal ">Infomation</h3>
              <p className=" md:text-xl text-balance ">
                Tokyo, the bustling capital of Japan, is a captivating
                metropolis that seamlessly blends ancient traditions with
                futuristic innovation. As one of the world's most populous
                cities, Tokyo is a bustling hub of technology, business,
                fashion, and culture.
              </p>
            </div>
            {/* RECOMMENDED ACTIVITIES */}
            <div className="mt-20 ">
              <h4 className="text-4xl font-bold mb-10 font-cal">
                Recommended Activities
              </h4>
              <div className="h-[480px] w-full relative rounded-2xl overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={imageUrl[1]}
                  alt="japan-image"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b>Explore the neighborhoods</b>:Visit Shibuya for its famous
                  scramble crossing and trendy shops, Shinjuku for its vibrant
                  nightlife and entertainment, and Asakusa for its historic
                  temples and traditional atmosphere.
                </li>
                <li className="md:text-xl">
                  <b>Visit historic sites</b>: Must-visit places include the
                  Senso-ji Temple in Asakusa, Meiji Shrine in Harajuku, and the
                  Imperial Palace in Chiyoda.
                </li>
                <li className="md:text-xl">
                  <b>Shop and indulge in Japanese cuisine</b>:Check out the
                  trendy shops in Shibuya and Harajuku or visit the upscale
                  Ginza district for luxury shopping. Don't forget to try local
                  street food, sushi, ramen, and other traditional dishes.
                </li>
                <li className="md:text-xl">
                  <b> Experience modern technology and pop culture</b>: Explore
                  Akihabara, the electronics and anime district, and visit
                  themed cafes, such as maid cafes or cat cafes.
                </li>
                <li className="md:text-xl">
                  <b>Enjoy panoramic views</b>: Check out Tokyo Skytree, Tokyo
                  Tower, or the observation deck at the Tokyo Metropolitan
                  Government Building.
                </li>
              </ol>
            </div>
            {/* MUST TRY FOOD */}
            <div className="mt-20">
              <h4 className="text-4xl font-bold mb-10 font-cal">
                Must-try food
              </h4>
              <div className="h-[480px] w-full relative rounded-2xl overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={imageUrl[2]}
                  alt="sushi"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b>Sushi</b>: Visit Tsukiji Fish Market or one of the many
                  sushi restaurants in the city to try the freshest and most
                  exquisite sushi and sashimi.
                </li>
                <li className="md:text-xl">
                  <b>Ramen</b>: Tokyo offers a diverse range of ramen styles,
                  including shoyu (soy sauce), shio (salt), miso, and tonkotsu
                  (pork bone broth).
                </li>
                <li className="md:text-xl">
                  <b>Okonomiyaki</b>: Often referred to as Japanese savory
                  pancakes, okonomiyaki is a must-try dish. These hearty
                  pancakes are filled with cabbage, meat, seafood, and topped
                  with various sauces.
                </li>
                <li className="md:text-xl">
                  <b> Yakitori</b>: Skewered and grilled chicken is a beloved
                  Japanese street food.
                </li>
                <li className="md:text-xl">
                  <b>Tonkatsu</b>: A breaded and deep-fried pork cutlet,
                  tonkatsu is a favorite comfort food in Tokyo.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex-1 h-fit sticky top-[120px] z-10  p-14 max-w-[650px] rounded-2xl text-white bg-primary-100">
            <ul className="pb-[50px]  space-y-3 border-b border-gray-500">
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Accommodations</h6>
                <p className="text-xl font-semibold ">$650</p>
              </li>
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Co-working Space</h6>
                <p className="text-xl font-semibold ">$100</p>
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
              <p className="text-2xl md:text-3xl font-bold">$1200</p>
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
                  <span className="text-xs">
                    Select a different trip free of charge.
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-5">
                <div className="min-w-16 h-16 bg-primary-300 flex items-center justify-center rounded-md">
                  <FiCreditCard className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="md:text-xl font-bold">Payment plan</p>
                  <span className="text-xs">
                    Break up your payment into several installments.
                  </span>
                </div>
              </li>
            </ul>
            <button className="w-full py-5 bg-primary-300 rounded-xl hover:opacity-70">
              Book destination
            </button>
          </div>
        </section>
      </div>
      <Newsletter />
    </div>
  );
};

export default Tokyo;
