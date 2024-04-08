import Rect from "../assets/Rectangle 192.png";
import gol from "../assets/gol.png";
import phone from "../assets/phone.png";
import india from "../assets/india.png";
import simpline from "../assets/simpline.png";
import gplay from "../assets/gplay.png";
import applay from "../assets/appplay.png";

const EighthHomeSec = () => {
  return (
    <div className="eighth_section pt-24 gap-4 flex flex-col pl-5">
      <div className="sm:w-[50%] gap-5 flex">
        <div className="sm:w-[46px] relative sm:top-0 top-4 w-[96px]">
          <img src={Rect} className="sm:h-28" alt="" />
        </div>
        <div className="overflow-hidden">
          <div className="sm:w-[914px]  sm:h-[50px]">
            <p className="font-[600] font-poppins text-[39px] leading-[50px]">
              Download GoMechanic App
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-[950px] w-full flex sm:flex-row sm:gap-0 gap-16 flex-col">
        <div className="sm:w-1/2 w-full relative overflow-hidden justify-center items-center flex">
          <img src={gol} className="z-10 absolute" alt="" />
          <img src={phone} className="z-20 -translate-x-5" alt="" />
        </div>
        <div className="sm:w-1/2 w-full -ml-5 flex overflow-hidden sm:pb-0 pb-28 flex-col justify-center">
          <p className="font-[500] translate-x-8 text-[18px] leading-[27px]">
            Choose and book a seamless Car Service Experience and get upto RS
            750 off with the GoMechanic App
          </p>
          <div className="flex items-center">
            <img src={gplay} alt="" />
            <img src={applay} alt="" className="w-[194px] h-[61px] " />
          </div>
          <div className="shadow-lg sm:translate-x-4 translate-x-4 rounded-[10px] p-3 overflow-hidden mx-auto translate-y-6 flex justify-center sm:gap-4 gap-1 sm:w-[410px] h-[53px] ">
            <img src={india} alt="" />
            <img src={simpline} alt="" />
            <input type="text" name="" id="" placeholder="Mobile Number" />
            <div className="w-[126px] -translate-x-3 h-[43px] flex items-center bg-[#74B9FF] -translate-y-2 rounded-[10px] justify-center text-white">
              Get App Link
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthHomeSec;
