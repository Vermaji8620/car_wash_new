import Rect from "../assets/Rectangle 192.png";
const FourthHomeSec = () => {
  return (
    <div className="fourth_section sm:gap-7 sm:-mt-0 -mt-16 gap-2 flex flex-col pt-10 pl-5">
      <div className="sm:w-[85%] sm:gap-3 gap-1 overflow-hidden flex">
        <div className="sm:w-[46px] w-[96px] relative sm:top-4">
          <img src={Rect} alt=""  className="sm:h-full h-[50px]"/>
        </div>
        <div className="flex sm:mt-10 -mt-1 items-center">
          <div className="w-[2014px] sm:h-[50px] font-[600] font-poppins sm:text-[40px] text-[25px] overflow-hidden leading-[28px]">
            Wash Market Gurantee
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 sm:ml-16 mr-3 flex items-center justify-between gap-4 sm:flex-wrap flex-col sm:flex-row">
        <div className="flex w-full">
          <div className="w-[45%] mx-auto text-[#74B9FF] font-[600] text-[12px] sm:text-[23px] leading-[35px] sm:h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            Free PickUp Drop
          </div>
          <div className="w-[45%] mx-auto text-[#74B9FF] font-[600] text-[12px] sm:text-[23px] leading-[35px] sm:h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            Genuine Parts
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[45%] mx-auto text-[#74B9FF] font-[600] text-[12px] sm:text-[23px] leading-[35px] sm:h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            30 Days Warranty
          </div>
          <div className="w-[45%] mx-auto text-[#74B9FF] font-[600] text-[12px] sm:text-[23px] leading-[35px] sm:h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            Affordable Prices
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthHomeSec;
