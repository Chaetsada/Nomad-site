import React from "react";
//import icon
import { IoIosArrowRoundForward } from "react-icons/io";

const ButtonLink = () => {
  return (
    <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center ">
      <div className=" w-6 h-6 flex justify-center items-center overflow-hidden relative">
        <IoIosArrowRoundForward className="text-white w-7 h-7 transition-all duration-300 group-hover:translate-x-5" />
        <IoIosArrowRoundForward className="text-white w-7 h-7 absolute -left-6 transition-all duration-300 group-hover:translate-x-5" />
      </div>
    </div>
  );
};

export default ButtonLink;
