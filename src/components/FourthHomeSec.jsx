import Rect from "../assets/Rectangle 192.png";
const FourthHomeSec = () => {
  return (
    <div className="fourth_section sm:gap-7 sm:-mt-0 -mt-16 gap-2 flex flex-col pt-10 pl-5">
      <div className="w-[85%] gap-5 overflow-hidden flex">
        <div className="sm:w-[46px] w-[96px] relative sm:top-4">
          <img src={Rect} alt="" />
        </div>
        <div className="flex sm:gap-3 sm:-mt-0 -mt-3 flex-col">
          <div className="w-[914px] sm:h-[50px] font-[600] font-poppins sm:text-[40px] text-[16px] overflow-hidden leading-[50px] ">
            Go Mechanic Gurantee
          </div>
          <div className="font-poppins font-[400] sm:w-[704px] w-[18rem] sm:h-[81px] h-full gap-1 sm:text-[18px] sm:leading-[27px] leading-[20px] text-[#6B6B6B] justify-start pt-3 flex flex-col">
            Lorem Ipsum s simply dummy text of the printing and typesetting and
            typesetting industry.
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 sm:ml-16 mr-3 flex items-center justify-between gap-4 sm:flex-wrap flex-col sm:flex-row">
        <div className="flex w-full">
          <div className="w-[45%] mx-auto text-[#74B9FF] font-[600] sm:text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            Free PickUp Drop
          </div>
          <div className="w-[45%] mx-auto text-[#74B9FF] font-[600] sm:text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            Genuine Parts
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[45%] mx-auto text-[#74B9FF] font-[600] sm:text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            30 Days Warranty
          </div>
          <div className="w-[45%] mx-auto text-[#74B9FF] font-[600] sm:text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            Affordable Prices
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthHomeSec;
