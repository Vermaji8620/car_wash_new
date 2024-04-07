import Rect from "../assets/Rectangle 192.png";
const FourthHomeSec = () => {
  return (
    <div className="fourth_section pt-10 pl-5">
      <div className="w-[50%] gap-5 flex">
        <div className="w-[46px]">
          <img src={Rect} alt="" />
        </div>
        <div className="flex gap-3 flex-col">
          <div className=" w-[914px] h-[50px] font-[600] font-poppins text-[40px] overflow-hidden leading-[50px] ">
            GoMechanic Guarantee
          </div>
          <div className="font-poppins font-[400] w-[784px] h-[81px] text-[18px] leading-[27px] text-[#6B6B6B]">
            Lorem Ipsum s simply dummy text of the printing and typesetting
            industry.orem Ipsum has been the industry standard dummy Lorem Ipsum
            isimply dummy.
          </div>
        </div>
      </div>
      <div className="w-1/2 ml-16 flex items-center justify-between gap-4 flex-wrap">
        <div className="w-[40%] text-[#74B9FF] font-[600] text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
          Free PickUp Drop
        </div>
        <div className="w-[40%] text-[#74B9FF] font-[600] text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
          Genuine Parts
        </div>
        <div className="w-[40%] text-[#74B9FF] font-[600] text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
          30 Days Warranty
        </div>
        <div className="w-[40%] text-[#74B9FF] font-[600] text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
          Affordable Prices
        </div>
      </div>
    </div>
  );
};

export default FourthHomeSec;
