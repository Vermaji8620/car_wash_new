import { useState } from "react";
import uparow from "../assets/uparow.png";

const CardsCompo = ({ title, desc }) => {
  const [disp, setDisp] = useState("hidden");
  const dispornot = () => {
    setDisp(disp === "hidden" ? "inline-block" : "hidden");
  };
  return (
    <div className="sm:w-[890px] rounded-[10px] shadow-lg bg-[#F3F9FF] gap-4 sm:translate-x-14 -translate-x-4 flex flex-col">
      <div className="flex items-center sm:w-[90%] w-[90%] justify-between mx-auto pt-4 sm:pl-0 pl-4">
        <p className="font-poppins font-[600] sm:text-[18px] text-[15px] sm:leading-[27px]">
          {title}
        </p>
        <img
          src={uparow}
          alt=""
          onClick={dispornot}
          className={`${
            disp === "hidden" ? "rotate-[180deg]" : "rotate-[0deg]"
          }`}
        />
      </div>
      <hr />
      <p className={`text-[#6B6B6B] w-[90%] mx-auto sm:pl-0 pl-4 text-[15px] ${disp}`}>{desc}</p>
    </div>
  );
};

export default CardsCompo;
