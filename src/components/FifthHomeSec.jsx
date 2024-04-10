import Star from "../assets/star.png";
import line from "../assets/line.png";
import Rect from "../assets/Rectangle 192.png";

const FifthHomeSec = () => {
  return (
    <div className="fifth_section sm:pt-16 pt-10 gap-16 flex flex-col pl-5">
      <div className="sm:w-[85%] sm:gap-3 gap-1 overflow-hidden flex">
        <div className="sm:w-[46px] w-[96px] relative sm:top-4">
          <img src={Rect} alt="" className="sm:h-full h-[50px]" />
        </div>
        <div className="flex sm:mt-10 -mt-1 items-center">
          <div className="w-[2014px] sm:h-[50px] font-[600] font-poppins sm:text-[40px] text-[25px] overflow-hidden leading-[28px]">
            How Wash Market Works
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 sm:ml-16 sm:-mt-0 -mt-10 flex flex-col items-start justify-between gap-16">
        <div className="flex items-center gap-3">
          <div className="sm:w-[117px] sm:h-[117px] w-[70px] h-[60px] flex items-center justify-center border-[3px] border-[#74B9FF] rounded-full bg-[#EBF5FF]">
            <p className="font-[600] text-[33px] leading-[50px] ">1</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[600] sm:text-[20px] text-[16px] leading-[30px]">
              Select The Perfect Car Services
            </p>
            <p className="font-[400] sm:text-[16px] text-[14px] leading-[24px] text-[#6B6B6B]">
              From GoMechanics Brand Portfolio Of Services
            </p>
          </div>
        </div>
        <div className="border border-blue-500 -mt-12 -mb-14 sm:ml-14 ml-7">
          <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <div className="sm:w-[117px] sm:h-[117px] w-[70px] h-[60px] flex items-center justify-center border-[3px] border-[#74B9FF] rounded-full bg-[#EBF5FF]">
            <p className="font-[600] text-[33px] leading-[50px] ">2</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[600] sm:text-[20px] text-[16px] leading-[30px]">
              Schedule Free Doorstep Pick-Up
            </p>
            <p className="font-[400] sm:text-[16px] text-[14px] leading-[24px] text-[#6B6B6B]">
              We Offer Free pick up and drop for all services booked
            </p>
          </div>
        </div>
        <div className="border border-blue-500 -mt-12 -mb-14 sm:ml-14 ml-7">
          <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <div className="sm:w-[117px] sm:h-[117px] w-[70px] h-[60px] flex items-center justify-center border-[3px] border-[#74B9FF] rounded-full bg-[#EBF5FF]">
            <p className="font-[600] text-[33px] leading-[50px] ">3</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[600] sm:text-[20px] text-[16px] leading-[30px]">
              Track Your Car Service Real-Time
            </p>
            <p className="font-[400] sm:text-[16px] text-[14px] leading-[24px] text-[#6B6B6B]">
              We Will take Care of Everything from here
            </p>
          </div>
        </div>
        <div className="border border-blue-500 -mt-12 -mb-14 sm:ml-14 ml-7">
          <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <div className="sm:w-[117px] sm:h-[117px] w-[70px] h-[60px] flex items-center justify-center border-[3px] border-[#74B9FF] rounded-full bg-[#EBF5FF]">
            <p className="font-[600] text-[33px] leading-[50px] ">4</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[600] sm:text-[20px] text-[16px] leading-[30px]">
              Earn While We Service
            </p>
            <p className="font-[400] sm:text-[16px] text-[14px] leading-[24px] text-[#6B6B6B]">
              Spead the word! You get Rs.750 Your Friends get Rs.750!
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] ml-16 flex translate-x-10 gap-16">
        <div className="w-[167px] justify-center items-center rounded-[10px] flex flex-col h-[64px] bg-[#74B9FF]">
          <p className="font-[600] text-[20px] leading-[30px] text-white">
            3 Million +
          </p>
          <p className="font-[600] text-[13px] leading-[20px]">Cars served</p>
        </div>
        <div className="w-[167px] justify-center items-center rounded-[10px] flex flex-col h-[64px] bg-[#74B9FF]">
          <p className="font-[600] text-[20px] leading-[30px] text-white">
            2.7 Million +
          </p>
          <p className="font-[600] text-[13px] leading-[20px]">
            Happy Customers
          </p>
        </div>
        <div className="w-[167px] justify-center items-center rounded-[10px] flex flex-col h-[64px] bg-[#74B9FF]">
          <p className="font-[600] text-[20px] flex gap-3 items-center leading-[30px] text-white">
            4.7 <img src={Star} alt="" />
          </p>
          <p className="font-[600] text-[13px] leading-[20px]">Cars served</p>
        </div>
        <div className="w-[167px] justify-center items-center rounded-[10px] flex flex-col h-[64px] bg-[#74B9FF]">
          <p className="font-[600] text-[20px] leading-[30px] text-white">
            850 +
          </p>
          <p className="font-[600] text-[13px] leading-[20px]">Touch Points</p>
        </div>
      </div>
    </div>
  );
};

export default FifthHomeSec;
