import personcarwash from "../../assets/personcarwash.png";
import cartick from "../../assets/cartick.png";
import clockicon from "../../assets/clockicon.png";

const EachCardOfService = () => {
  return (
    <div className="shadow-lg p-1 relative">
      <div className="flex justify-center text-white items-center absolute w-[173px] h-[43px] bg-[#309534] rounded-[10px] top-10">
        RECOMMENDED
      </div>
      <div className="w-full h-[325px] mt-16 border-[3px] border-[#74B9FF] shadow-lg p-4 flex flex-col justify-around rounded-[20px]">
        <div className="flex justify-between items-center">
          <div className="w-[140px] h-[145px] -translate-y-5">
            <img src={personcarwash} alt="" />
          </div>
          <div className="flex flex-col w-[80%] gap-4">
            <div className="flex justify-between">
              <div className="w-[175px] h-[30px]">
                <p className="font-poppins font-[600] text-[20px] leading-[30px]">
                  Standard Service
                </p>
              </div>
              <div className="w-[173px] h-[37px] rounded-[10px] flex items-center bg-[#EBF5FF] justify-center">
                <div className="w-[126px] h-[24px] justify-around flex items-center">
                  <img src={clockicon} alt="" />
                  <div className="w-[87px] h-[23px] ">
                    <p className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                      6 Hrs Taken
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[240px] h-[23px]">
                <p className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                  1000 Kms or 1 Month Warranty
                </p>
              </div>
              <div className="w-[369px] h-[23px]">
                <p className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                  Every 10,000 Kms or 6 Months (Recommended)
                </p>
              </div>
            </div>
            <div className="flex flex-wrap ">
              <div className="flex items-center gap-2 w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="h-[23px]">
                  <p className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                    Car Scanning
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="h-[23px]">
                  <p className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                    Wiper Fluid Replacement
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="h-[23px]">
                  <p className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                    Battery Water Top up
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="h-[23px]">
                  <p className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                    Car Wash
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="h-[23px]">
                  <p className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                    Interior Vacuuming (Carpet & Seats)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <div className="h-[23px]">
                  <p className="font-poppins text-[#309534] underline font-[400] text-[15px] leading-[22.5px]">
                    +10 more View All
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="w-[52px] h-[27px]">
              <p className="font-poppins text-[#ACACAC] font-[600] text-[18px] leading-[27px]">
                ₹ 5141
              </p>
            </div>
            <div className="w-[100px] h-[30px]">
              <p className="font-poppins font-[600] text-[20px] leading-[30px]">
                ₹ 3599
              </p>
            </div>
          </div>
          <div className="w-[162px] bg-[#E7FFE8] h-[46px] rounded-[10px] flex items-center border-[1px] border-[#309534]">
            <div className=" h-[23px] flex items-center justify-center gap-5 mx-auto">
              <img
                src={cartick}
                alt=""
                className="bg-[#309534] w-[18px] h-[18px]"
              />
              <div className="w-[110px] h-[23px]">
                <p className="font-poppins font-[600] text-[15px] leading-[22.5px] ">
                  Added To Cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCardOfService;
