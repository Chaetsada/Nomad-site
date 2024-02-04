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
  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1628246317828-18bd3bf12593?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Santorini = () => {
  return (
    <div className="min-h-screen bg-main">
      <div className="container pt-[110px] px-5 mb-20">
        <header className="h-[720px] w-full mb-10 relative rounded-2xl overflow-hidden ">
          <Image
            className="w-full h-full object-cover "
            src={imageUrl[0]}
            alt="Santorini-image"
            fill
          />
          <div className="absolute bottom-0 z-10 p-5 md:p-20 text-white w-full flex flex-col gap-5 bg-gradient-to-t from-[#0005] to-[#0000]">
            <h3 className="text-4xl md:text-6xl font-bold ">
              Santorini, Greece
            </h3>
            <p className="text-xl font-semibold">
              Next trip: <span>jun 14, 2023 - jun 28, 2023</span>
            </p>
          </div>
        </header>

        <section className="grid md:grid-cols-4 gap-5 h-fit md:h-[180px] mt-[100px]">
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <FaRegSmile className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>National Language</p>
              <span className="text-xl font-bold text-black">Greek</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <MdOutlineWbSunny className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Weather</p>
              <span className="text-xl font-bold text-black">
                78° F / 53° F
              </span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <IoTimeOutline className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Time zone</p>
              <span className="text-xl font-bold text-black">GMT+3</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <PiMoneyLight className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Currency</p>
              <span className="text-xl font-bold text-black">Euro</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-14 mt-[100px] relative">
          <div className="flex-1 min-h-fit mb-10">
            <div className="flex flex-col gap-10">
              <h3 className="text-5xl font-bold font-cal ">Infomation</h3>
              <p className=" md:text-xl text-balance ">
                Santorini, Greece, is a breathtakingly beautiful and iconic
                destination known for its stunning landscapes, captivating
                sunsets, and rich cultural heritage. Located in the southern
                Aegean Sea, Santorini is part of the Cyclades island group and
                is often considered one of the most picturesque islands in the
                world.
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
                  alt="Santorini-image"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b> Explore Oia</b>:Oia is a picturesque village famous for
                  its white-washed houses, blue-domed churches, and narrow
                  winding streets.
                </li>
                <li className="md:text-xl">
                  <b>Visit Fira</b>: Fira is the capital of Santorini and offers
                  a vibrant atmosphere with its bustling streets, shops,
                  restaurants, and cafes.
                </li>
                <li className="md:text-xl">
                  <b> Relax on the Beaches</b>:Some popular options include
                  Perissa Beach, Kamari Beach, and Red Beach. These beaches
                  offer crystal-clear waters, volcanic sand, and a variety of
                  beachside amenities.
                </li>
                <li className="md:text-xl">
                  <b>Take a Boat Trip to the Volcano</b>: Santorini is a
                  volcanic island, and taking a boat trip to the Nea Kameni
                  volcano is a unique experience.
                </li>
                <li className="md:text-xl">
                  <b>Visit Ancient Akrotiri</b>: Akrotiri is an archaeological
                  site on Santorini that dates back to the Minoan civilization.
                  It offers a fascinating glimpse into the past, with
                  well-preserved ruins and artifacts.
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
                  alt="souvlaki"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b>Tomatokeftedes</b>: These are delicious tomato fritters
                  made from the island's flavorful Santorini tomatoes.
                </li>
                <li className="md:text-xl">
                  <b>Fava</b>: Fava is a yellow split pea puree served as a dip
                  or a side dish. It has a creamy texture and is often topped
                  with onions, olive oil, and lemon juice.
                </li>
                <li className="md:text-xl">
                  <b>Gyro</b>: A popular Greek street food found throughout the
                  country, tt typically consists of grilled meat (pork, chicken,
                  or lamb) wrapped in pita bread with tzatziki, tomatoes,
                  onions, and sometimes french fries.
                </li>
                <li className="md:text-xl">
                  <b> Melitinia</b>: These sweet cheese-filled cookies are a
                  traditional Santorinian dessert. They are usually shaped like
                  shells and have a delicate, sweet flavor.
                </li>
                <li className="md:text-xl">
                  <b>Souvlaki</b>:Similar to a gyro, souvlaki consists of
                  skewered and grilled meat (pork, chicken, or lamb).
                </li>
              </ol>
            </div>
          </div>
          <div className="flex-1 h-fit sticky top-[120px] z-10  p-14 max-w-[650px] rounded-2xl text-white bg-primary-100">
            <ul className="pb-[50px]  space-y-3 border-b border-gray-500">
              <li className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <h6 className="text-xl font-semibold">Accommodations</h6>
                <p className="text-xl font-semibold ">$1900</p>
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
                <p className="text-xl font-semibold ">$1000</p>
              </li>
            </ul>
            <div className="flex items-center justify-between py-10">
              <h4 className="text-xl md:text-3xl font-bold">Total Due:</h4>
              <p className="text-2xl md:text-3xl font-bold">$3200</p>
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

export default Santorini;
