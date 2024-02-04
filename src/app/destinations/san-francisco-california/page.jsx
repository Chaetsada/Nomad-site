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
  "https://images.unsplash.com/photo-1534050359320-02900022671e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1541464522988-31b420f688b9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1553659971-f01207815844?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Positano = () => {
  return (
    <div className="min-h-screen bg-main">
      <div className="container pt-[110px] px-5 mb-20">
        <header className="h-[720px] w-full mb-10 relative rounded-2xl overflow-hidden ">
          <Image
            className="w-full h-full object-cover "
            src={imageUrl[0]}
            alt="california-image"
            fill
          />
          <div className="absolute bottom-0 z-10 p-5 md:p-20 text-white w-full flex flex-col gap-5 bg-gradient-to-t from-[#0005] to-[#0000]">
            <h3 className="text-4xl md:text-6xl font-bold ">
              San Francisco, California
            </h3>
            <p className="text-xl font-semibold">
              Next trip: <span>Aug 1, 2023 - Sep 14, 2023</span>
            </p>
          </div>
        </header>

        <section className="grid md:grid-cols-4 gap-5 h-fit md:h-[180px] mt-[100px]">
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <FaRegSmile className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>National Language</p>
              <span className="text-xl font-bold text-black">English</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <MdOutlineWbSunny className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Weather</p>
              <span className="text-xl font-bold text-black">
                64° F / 52° F
              </span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <IoTimeOutline className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Time zone</p>
              <span className="text-xl font-bold text-black">GMT-7</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <PiMoneyLight className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Currency</p>
              <span className="text-xl font-bold text-black">U.S. Dollar</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-14 mt-[100px] relative">
          <div className="flex-1 min-h-fit mb-10">
            <div className="flex flex-col gap-10">
              <h3 className="text-5xl font-bold font-cal ">Infomation</h3>
              <p className=" md:text-xl text-balance ">
                San Francisco, California, is a vibrant and iconic city known
                for its breathtaking natural beauty, cultural diversity, and
                technological innovation. Located on the west coast of the
                United States, it is nestled on a hilly peninsula surrounded by
                the Pacific Ocean and the San Francisco Bay.
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
                  alt="california-bridge"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b> Explore the Golden Gate Bridge</b>:Walk or bike across
                  this iconic suspension bridge for stunning views of the city
                  skyline and the Pacific Ocean.
                </li>
                <li className="md:text-xl">
                  <b>Explore Fisherman's Wharf</b>: Enjoy the vibrant
                  atmosphere, visit the sea lions at Pier 39, sample fresh
                  seafood, and check out the souvenir shops.
                </li>
                <li className="md:text-xl">
                  <b>Discover Chinatown</b>: Explore the oldest Chinatown in
                  North America, stroll through its vibrant streets, and sample
                  delicious Chinese cuisine.
                </li>
                <li className="md:text-xl">
                  <b>Visit the Golden Gate Park</b>:Spend a day exploring this
                  expansive urban park with attractions like the Japanese Tea
                  Garden, de Young Museum, and the Conservatory of Flowers.
                </li>
                <li className="md:text-xl">
                  <b>Enjoy a day in the wine country</b>: Take a day trip to
                  Napa Valley or Sonoma Valley, both renowned wine regions, and
                  enjoy wine tastings, vineyard tours, and scenic landscapes.
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
                  alt="crab"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b>Dungeness crab</b>: Being close to the Pacific Ocean, San
                  Francisco is famous for its fresh seafood. Try the local
                  specialty, Dungeness crab, whether it's served as a crab
                  sandwich, crab cakes, or simply steamed with melted butter.
                </li>
                <li className="md:text-xl">
                  <b>Cioppino</b>: This hearty seafood stew originated in San
                  Francisco's Italian-American community. It typically includes
                  a combination of fish, crab, clams, mussels, shrimp, and
                  tomatoes in a rich broth.
                </li>
                <li className="md:text-xl">
                  <b> Dim sum</b>: Experience the variety of bite-sized dishes
                  like dumplings, buns, rice rolls, and more, usually served
                  from carts or on small plates.
                </li>
                <li className="md:text-xl">
                  <b> It's-It ice cream sandwich</b>: Originally created in San
                  Francisco, the It's-It is an ice cream sandwich made with two
                  oatmeal cookies and a generous scoop of ice cream, all dipped
                  in chocolate.
                </li>
                <li className="md:text-xl">
                  <b>Hangtown fry</b>:This unique dish originated during the
                  Gold Rush era. It consists of an omelet with fried oysters and
                  bacon, providing a savory and satisfying combination.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex-1 h-fit sticky top-[120px] z-10  p-14 max-w-[650px] rounded-2xl text-white bg-primary-100">
            <ul className="pb-[50px]  space-y-3 border-b border-gray-500">
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Accommodations</h6>
                <p className="text-xl font-semibold ">$2800</p>
              </li>
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Co-working Space</h6>
                <p className="text-xl font-semibold ">$250</p>
              </li>
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Private transfer</h6>
                <p className="text-xl font-semibold ">$50</p>
              </li>
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Community excursions</h6>
                <p className="text-xl font-semibold ">$2100</p>
              </li>
            </ul>
            <div className="flex items-center justify-between py-10">
              <h4 className="text-xl md:text-3xl font-bold">Total Due:</h4>
              <p className="text-2xl md:text-3xl font-bold">$5200</p>
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

export default Positano;
