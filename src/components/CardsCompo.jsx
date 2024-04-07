import { useState } from "react";
import uparow from "../assets/uparow.png";

const CardsCompo = ({ title, desc }) => {
  const [disp, setDisp] = useState("hidden");
  const dispornot = () => {
    setDisp(disp === "hidden" ? "inline-block" : "hidden");
  };
  return (
    <div className="w-[890px] rounded-[10px] shadow-lg bg-[#F3F9FF] gap-4 translate-x-14 flex flex-col">
      <div className="flex items-center w-[90%] justify-between mx-auto pt-4">
        <p className="font-poppins font-[600] text-[18px] leading-[27px]">
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
      <p className={`text-[#6B6B6B] w-[90%] mx-auto ${disp}`}>{desc}</p>
    </div>
  );
};

export default CardsCompo;
