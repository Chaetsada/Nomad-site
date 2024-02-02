import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import Newsletter from "../Components/Newsletter";

const oneWeekTrip = [
  {
    city: "Seoul,South Korea",
    date: "6/1/23 - 6/7/23",
    price: "$1300",
    path: "seoul-south-korea",
    img: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Tokyo,Japan",
    date: "6/7/23 - 6/14/23",
    price: "$1200",
    path: "tokyo-japan",
    img: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Bora Bora,French Polynesia",
    date: "6/14/23 - 6/21/23",
    price: "$2400",
    path: "bora-bora-french-polynesia",
    img: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const twoWeekTrip = [
  {
    city: "Positano,Italy",
    date: "6/1/23 - 6/14/23",
    price: "$3200",
    path: "positano-italy",
    img: "https://images.unsplash.com/photo-1594881497142-08fdfdfc4074?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Satorini,Greece",
    date: "6/14/23 - 6/28/23",
    price: "$3200",
    path: "santorini-greece",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const oneMonthTrip = [
  {
    city: "Austin,Texas",
    date: "6/1/23 - 7/1/23",
    price: "$4800",
    path: "austin-texas",
    img: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Bali,Indonisia",
    date: "7/1/23 - 8/1/23",
    price: "$4000",
    path: "bali-indonesias",
    img: "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "San Francisco,California",
    date: "8/1/23 - 9/1/23",
    price: "$5200",
    path: "san-francisco-california",
    img: "https://images.unsplash.com/photo-1605403919557-efd20173336d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Destinations = () => {
  return (
    <div className="h-fit bg-main">
      <div className="container pt-[110px] px-5">
        <header className="h-[320px] p-10 bg-secondary-100 rounded-2xl flex items-end justify-start">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-7xl font-bold text-black">
              Destinations
            </h2>
            <p>
              Work and travel the world with a community of like-minded people.
            </p>
          </div>
        </header>
        <div className="py-[50px] md:py-[100px]">
          {/* ONE WEEK TRIPS */}
          <section className="mb-10">
            <div className="flex gap-5 items-center">
              <h3 className="text-3xl font-bold mb-5">1-week trips</h3>
              <span className="flex-1 h-[2.25px] bg-secondary-100" />
            </div>
            <div className="grid  md:grid-cols-3 gap-10 min-h-fit">
              {oneWeekTrip.map((item) => (
                <Link
                  key={item.city}
                  href={`/destinations/${item.path}`}
                  className="flex-1 h-[400px] rounded-2xl overflow-hidden  group"
                >
                  <div className="w-full h-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-110"
                      src={item.img}
                      alt={item.city}
                      fill
                    />
                    <div className="absolute bottom-0 z-20 p-5 md:p-10 w-full bg-gradient-to-t from-[#0005] to-[#0000]">
                      <h3 className="text-3xl text-white font-bold mb-5">
                        {item.city}
                      </h3>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2 text-white">
                          <CiCalendar className="text-2xl " />
                          <span className="font-semibold">{item.date}</span>
                        </div>
                        <p className="text-white flex items-center gap-1">
                          From
                          <span className="font-semibold">{item.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          {/* TWO WEEK TRIPS */}
          <section className="mb-10">
            <div className="flex gap-5 items-center">
              <h3 className="text-3xl font-bold mb-5">2-week trips</h3>
              <span className="flex-1 h-[2.25px] bg-secondary-100" />
            </div>
            <div className="grid md:grid-cols-2 gap-10 min-h-fit">
              {twoWeekTrip.map((item) => (
                <Link
                  key={item.city}
                  href={`/destinations/${item.path}`}
                  className="flex-1  h-[400px] rounded-2xl overflow-hidden  group"
                >
                  <div className="w-full h-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-110"
                      src={item.img}
                      alt={item.city}
                      fill
                    />
                    <div className="absolute bottom-0 z-20 p-5 md:p-10 w-full bg-gradient-to-t from-[#0005] to-[#0000]">
                      <h3 className="text-3xl text-white font-bold mb-5">
                        {item.city}
                      </h3>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2 text-white">
                          <CiCalendar className="text-2xl " />
                          <span className="font-semibold">{item.date}</span>
                        </div>
                        <p className="text-white flex items-center gap-1">
                          From
                          <span className="font-semibold">{item.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          {/* THREE WEEK TRIPS */}
          <section>
            <div className="flex gap-5 items-center">
              <h3 className="text-3xl font-bold mb-5">1-month trips</h3>
              <span className="flex-1 h-[2.25px] bg-secondary-100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-fit">
              {oneMonthTrip.map((item) => (
                <Link
                  key={item.city}
                  href={`/destinations/${item.path}`}
                  className="flex-1 h-[400px] rounded-2xl overflow-hidden  group"
                >
                  <div className="w-full h-full relative">
                    <Image
                      className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-110"
                      src={item.img}
                      alt={item.city}
                      fill
                    />
                    <div className="absolute bottom-0 z-20 p-10 w-full bg-gradient-to-t from-[#0005] to-[#0000]">
                      <h3 className="text-3xl text-white font-bold mb-5">
                        {item.city}
                      </h3>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2 text-white">
                          <CiCalendar className="text-2xl " />
                          <span className="font-semibold">{item.date}</span>
                        </div>
                        <p className="text-white flex items-center gap-1">
                          From
                          <span className="font-semibold">{item.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Destinations;
