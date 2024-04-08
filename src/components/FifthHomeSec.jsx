import Star from "../assets/star.png";
import line from "../assets/line.png";
import Rect from "../assets/Rectangle 192.png";

const FifthHomeSec = () => {
  return (
    <div className="fifth_section pt-16 gap-16 flex flex-col pl-5">
      <div className="sm:w-[50%] sm:gap-3 gap-1 flex">
        <div className="sm:w-[46px] w-[96px] top-4 sm:top-4 relative">
          <img src={Rect} alt="" />
        </div>
        <div className="flex gap-3 flex-col">
          <div className="sm:w-[914px] h-[50px]">
            <p className="font-[600] font-poppins text-[25px] sm:text-[40px] overflow-hidden leading-[50px]">
              How GoMechanic Works?
            </p>
          </div>
          <div className=" h-[81px] text-[#6B6B6B]">
            <p className="font-poppins text-[18px] leading-[27px] font-[400]">
              Lorem Ipsum s simply dummy text of the printing and typesetting
              industry.orem Ipsum has been the industry standard dummy Lorem
              Ipsum isimply dummy.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 sm:ml-16 flex flex-col items-start justify-between gap-16">
        <div className="flex items-center gap-3">
          <div className="w-[117px] h-[117px] flex items-center justify-center border-[3px] border-[#74B9FF] rounded-full bg-[#EBF5FF]">
            <p className="font-[600] text-[33px] leading-[50px] ">1</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[600] text-[20px] leading-[30px]">
              Select The Perfect Car Services
            </p>
            <p className="font-[400] text-[16px] leading-[24px] text-[#6B6B6B]">
              From GoMechanics Brand Portfolio Of Services
            </p>
          </div>
        </div>
        <div className="border border-green-500 -mt-12 -mb-14 sm:ml-14 ml-10">
          <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[117px] h-[117px] flex items-center justify-center border-[3px] border-[#74B9FF]  rounded-full bg-[#EBF5FF]">
            <p className="font-[600] text-[33px] leading-[50px] ">2</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[600] text-[20px] leading-[30px]">
              Schedule Free Doorstep Pick-Up
            </p>
            <p className="font-[400] text-[16px] leading-[24px] text-[#6B6B6B]">
              We Offer Free pick up and drop for all services booked
            </p>
          </div>
        </div>
        <div className="border border-green-500 -mt-12 -mb-14 sm:ml-14 ml-10">
          <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[117px] h-[117px] flex items-center justify-center border-[3px] border-[#74B9FF]  rounded-full bg-[#EBF5FF]">
            <p className="font-[600] text-[33px] leading-[50px] ">3</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[600] text-[20px] leading-[30px]">
              Track Your Car Service Real-Time
            </p>
            <p className="font-[400] text-[16px] leading-[24px] text-[#6B6B6B]">
              We Will take Care of Everything from here
            </p>
          </div>
        </div>
        <div className="border border-green-500 -mt-12 -mb-14 sm:ml-14 ml-10">
          <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[117px] h-[117px] flex items-center justify-center border-[3px] border-[#74B9FF]  rounded-full bg-[#EBF5FF]">
            <p className="font-[600] text-[33px] leading-[50px] ">4</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[600] text-[20px] leading-[30px]">
              Earn While We Service
            </p>
            <p className="font-[400] text-[16px] leading-[24px] text-[#6B6B6B]">
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
