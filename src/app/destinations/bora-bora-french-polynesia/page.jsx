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
  "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1484507175567-a114f764f78b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1674498271296-5144c596b43c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Borbora = () => {
  return (
    <div className="min-h-screen bg-main">
      <div className="container pt-[110px] px-5 mb-20">
        <header className="h-[720px] w-full mb-10 relative rounded-2xl overflow-hidden ">
          <Image
            className="w-full h-full object-cover "
            src={imageUrl[0]}
            alt="borabora-image"
            fill
          />
          <div className="absolute bottom-0 z-10 p-5 md:p-20 text-white w-full flex flex-col gap-5 bg-gradient-to-t from-[#0005] to-[#0000]">
            <h3 className="text-4xl md:text-6xl font-bold ">
              Borbora, Indonesia
            </h3>
            <p className="text-xl font-semibold">
              Next trip: <span>Jun 1, 2023 - Aug 1, 2023</span>
            </p>
          </div>
        </header>

        <section className="grid md:grid-cols-4 gap-5 h-fit md:h-[180px] mt-[100px]">
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <FaRegSmile className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>National Language</p>
              <span className="text-xl font-bold text-black">
                Tahitian / French
              </span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <MdOutlineWbSunny className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Weather</p>
              <span className="text-xl font-bold text-black">
                77° F / 74° F
              </span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <IoTimeOutline className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Time zone</p>
              <span className="text-xl font-bold text-black">GMT-10</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <PiMoneyLight className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Currency</p>
              <span className="text-xl font-bold text-black">
                French Pacific Franc
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-14 mt-[100px] relative">
          <div className="flex-1 min-h-fit mb-10">
            <div className="flex flex-col gap-10">
              <h3 className="text-5xl font-bold font-cal ">Infomation</h3>
              <p className=" md:text-xl ">
                Bora Bora is a mesmerizing tropical paradise located in the
                South Pacific, known for its pristine beaches, crystal-clear
                turquoise waters, and lush greenery. It is often referred to as
                the "Pearl of the Pacific" due to its breathtaking natural
                beauty and idyllic setting. The island is surrounded by a coral
                reef, which creates a stunning natural barrier and contributes
                to the crystal-clear waters teeming with vibrant marine life.
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
                  alt="borabora-image"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b> Snorkeling and Diving</b>: Crystal-clear waters provide
                  excellent visibility for snorkeling, while diving enthusiasts
                  can venture deeper to discover underwater caves and encounter
                  manta rays, sharks, and tropical fish.
                </li>
                <li className="md:text-xl">
                  <b> Island Tours</b>: Explore the lush landscapes, visit
                  historical sites like World War II cannons, and enjoy
                  panoramic views from viewpoints such as Mount Otemanu.
                </li>
                <li className="md:text-xl">
                  <b>Jet Skiing and Water Sports</b>: Rent a jet ski or
                  participate in various water sports like paddleboarding,
                  kiteboarding, or kayaking.
                </li>
                <li className="md:text-xl">
                  <b>Pearl Farm Tours</b>:Take a tour of a pearl farm and learn
                  about the fascinating process of cultivating and harvesting
                  pearls.
                </li>
                <li className="md:text-xl">
                  <b> Shark and Ray Feeding</b>: Witness the incredible sight of
                  blacktip reef sharks and stingrays being fed in their natural
                  habitat.
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
                  alt="borabora-food"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b>Babi Guling</b>: This is a famous Borboranese roasted
                  suckling pig dish. The pig is stuffed with a mixture of herbs
                  and spices, including turmeric, coriander, lemongrass, and
                  garlic.
                </li>
                <li className="md:text-xl">
                  <b>Nasi Campur</b>: Nasi Campur is a mixed rice dish that
                  typically includes a variety of side dishes such as grilled
                  meats, vegetables, tempeh, tofu, and sambal.
                </li>
                <li className="md:text-xl">
                  <b>Nasi Campur</b>: Nasi Campur is a mixed rice dish that
                  typically includes a variety of side dishes such as grilled
                  meats, vegetables, tempeh, tofu, and sambal.
                </li>
                <li className="md:text-xl">
                  <b>Lawar</b>: Lawar is a traditional Borboranese salad made
                  from a mix of finely chopped vegetables, grated coconut,
                  minced meat (usually pork or chicken), and spices.
                </li>
                <li className="md:text-xl">
                  <b>Sate Lilit</b>: Sate Lilit is a popular Borboranese satay
                  dish. It is made from minced meat (commonly chicken, fish, or
                  pork) mixed with grated coconut, spices, and herbs. The
                  mixture is then wrapped around a skewer and grilled over
                  charcoal.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex-1 h-fit sticky top-[120px] z-10  p-14 max-w-[650px] rounded-2xl text-white bg-primary-100">
            <ul className="pb-[50px]  space-y-3 border-b border-gray-500">
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Accommodations</h6>
                <p className="text-xl font-semibold ">$2100</p>
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
                <p className="text-xl font-semibold ">$1750</p>
              </li>
            </ul>
            <div className="flex items-center justify-between py-10">
              <h4 className="text-xl md:text-3xl font-bold">Total Due:</h4>
              <p className="text-2xl md:text-3xl font-bold">$4,000</p>
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

export default Borbora;
