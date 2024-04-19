import blue from "../assets/blueline.png";
import EachCardOfService from "../components/serviceComponent/EachCardOfService";
import { FaArrowRight } from "react-icons/fa";
import ServiceCard from "../components/serviceComponent/ServiceCard";

const Services = () => {
  return (
    <div className="w-full bg-[#F6F6F6] h-full sm:-mt-0">
      <div className="w-full sm:relative h-[100vh] sm:-mt-0 -mt-16 sm:mb-0 mb-11 element-causing-scrollbar">
        <ServiceCard />
        <div className="flex flex-col w-full sm:w-[60%] mx-auto sm:ml-10 sm:mt-2 mt-16 sm:p-3 p-1">
          <div className="w-[100%] sm:gap-0 gap-16 flex overflow-x-auto shadow-lg justify-around sm:p-3 p-4 rounded-[10px] border-[1px] font-[600] text-[13px] leading-[20px] font-poppins border-[#74B9FF] flex-nowrap">
            <div className="flex items-center flex-none -mr-8 flex-col gap-1 ">
              <div>
                <p>Periodic Services</p>
                <p>
                  <img src={blue} alt="" />
                </p>
              </div>
            </div>
            <p className="flex items-center flex-col gap-1 -mr-8 flex-none">
              AC Service & Repair
            </p>
            <p className="flex items-center flex-col gap-1 -mr-8 flex-none">
              Batteries
            </p>
            <p className="flex items-center flex-col gap-1 -mr-8 flex-none">
              Tyres & Wheel Care
            </p>
            <p className="flex items-center flex-col gap-1 -mr-8 flex-none">
              Dent
            </p>
          </div>
          <div className="overflow-auto flex flex-col w-full">
            {Array.from({ length: 10 }, (_, indx) => (
              <div key={indx}>
                <EachCardOfService />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:hidden fixed bottom-0 w-full p-3 mt-20 bg-white  items-center">
        <div className="flex w-[90%] mx-auto justify-between">
          <div className="w-1/2 font-[700] flex justify-start items-center">
            &#8377; 3689
          </div>
          <div className="w-1/2 flex items-center gap-2 bg-[#74B9FF] p-2 text-white rounded-md justify-center">
            View Cart <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
