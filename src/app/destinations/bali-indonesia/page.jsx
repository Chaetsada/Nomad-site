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
  "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584455486010-760bd0b28fc2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Bali = () => {
  return (
    <div className="min-h-screen bg-main">
      <div className="container pt-[110px] px-5 mb-20">
        <header className="h-[720px] w-full mb-10 relative rounded-2xl overflow-hidden ">
          <Image
            className="w-full h-full object-cover "
            src={imageUrl[0]}
            alt="bali-image"
            fill
          />
          <div className="absolute bottom-0 z-10 p-5 md:p-20 text-white flex flex-col gap-5 bg-gradient-to-t from-[#0005] to-[#0000]">
            <h3 className="text-4xl md:text-6xl font-bold ">Bali, Indonesia</h3>
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
              <span className="text-xl font-bold text-black">Balinese</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <MdOutlineWbSunny className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Weather</p>
              <span className="text-xl font-bold text-black">
                81° F / 79° F
              </span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <IoTimeOutline className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Time zone</p>
              <span className="text-xl font-bold text-black">GMT+8</span>
            </div>
          </div>
          <div className="h-full p-8 rounded-2xl flex flex-col gap-5 items-center bg-secondary-100">
            <PiMoneyLight className="text-4xl text-black" />
            <div className="flex flex-col items-center gap-1">
              <p>Currency</p>
              <span className="text-xl font-bold text-black">
                Indonesian Rupiahr
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-14 mt-[100px] relative">
          <div className="flex-1 min-h-fit mb-10">
            <div className="flex flex-col gap-10">
              <h3 className="text-5xl font-bold font-cal ">Infomation</h3>
              <p className=" md:text-xl ">
                Bali, located in Indonesia, is a captivating tropical paradise
                that effortlessly combines natural beauty, vibrant culture, and
                spiritual charm. Known as the "Island of the Gods," Bali is
                celebrated for its picturesque landscapes, lush green rice
                terraces, pristine beaches, and stunning volcanic mountains. The
                island offers a diverse range of experiences, catering to both
                relaxation seekers and adventure enthusiasts.
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
                  alt="bali-image"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b> Explore Ubud</b>: Visit the Ubud Monkey Forest, explore
                  the art markets, experience traditional Balinese dance
                  performances, and take a walk through the stunning rice
                  terraces.
                </li>
                <li className="md:text-xl">
                  <b>Visit Tanah Lot</b>: Tanah Lot is a famous sea temple
                  located on a rocky outcrop. It offers a picturesque setting,
                  especially during sunset.
                </li>
                <li className="md:text-xl">
                  <b> Relax on Bali's beautiful beaches</b>: Bali is renowned
                  for its stunning beaches. Popular ones include Kuta Beach,
                  Seminyak Beach, Nusa Dua Beach, and Jimbaran Beach.
                </li>
                <li className="md:text-xl">
                  <b>Take a hike to Mount Batur</b>:Embark on a trek to the
                  summit of Mount Batur to witness the spectacular sunrise. This
                  active volcano provides amazing panoramic views of the
                  surrounding landscapes.
                </li>
                <li className="md:text-xl">
                  <b>Visit the Tegalalang Rice Terraces</b>: Located near Ubud,
                  these terraced rice fields offer incredible photo
                  opportunities and a chance to witness traditional agricultural
                  practices.
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
                  alt="bali-food"
                  fill
                />
              </div>
              <ol className="list-decimal space-y-5 mt-10 px-5">
                <li className="md:text-xl">
                  <b>Babi Guling</b>: This is a famous Balinese roasted suckling
                  pig dish. The pig is stuffed with a mixture of herbs and
                  spices, including turmeric, coriander, lemongrass, and garlic.
                </li>
                <li className="md:text-xl">
                  <b>Nasi Campur</b>: Nasi Campur is a mixed rice dish that
                  typically includes a variety of side dishes such as grilled
                  meats, vegetables, tempeh, tofu, and sambal.
                </li>
                <li className="md:text-xl">
                  <b>Bebek Betutu</b>: This is a traditional Balinese dish
                  consisting of roasted or steamed duck. The duck is marinated
                  in a rich blend of spices, including turmeric, ginger, garlic,
                  and shallots.
                </li>
                <li className="md:text-xl">
                  <b>Lawar</b>: Lawar is a traditional Balinese salad made from
                  a mix of finely chopped vegetables, grated coconut, minced
                  meat (usually pork or chicken), and spices.
                </li>
                <li className="md:text-xl">
                  <b>Sate Lilit</b>: Sate Lilit is a popular Balinese satay
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

export default Bali;
