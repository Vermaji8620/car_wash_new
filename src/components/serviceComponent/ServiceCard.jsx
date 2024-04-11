import suzuki from "../../assets/suzuki.png";
import flower from "../../assets/flower.png";
import justdot from "../../assets/justdot.png";
import hyundai from "../../assets/hyundai.png";
import dlte from "../../assets/delete.png";
import tata from "../../assets/tata.png";
import search from "../../assets/search.png";
import carontop from "../../assets/carontop.png";
import { useEffect, useState } from "react";

const ServiceCard = () => {
  const [error, setError] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 2000);
  }, [error]);
  return (
    <div className="sm:sticky relative sm:top-40 top-[54rem] z-20 bg-white rounded-[20px] border-[1px] border-[#74B9FF] sm:-mt-[690px] -mt-[500px] sm:mb-0 mb-40 flex-col flex items-center w-full gap-5 mx-auto p-4 sm:w-[500px] sm:ml-[980px]">
      {/* hidden ya visible hoga according to lcs , uske liye ek red dot point laga diye hai */}

      {/* display this  */}
      <div className="flex flex-col gap-5">
        <div className="translate-x-7 pt-2 w-[238px] h-[35px]">
          <p className="font-poppins font-[600] text-[23px] leading-[34.5px]">
            Select Manufacturer
          </p>
        </div>
        <div className="w-[425px] rounded-[10px] h-[44px] items-center flex bg-[#E1E1E199] justify-between">
          <input
            type="text"
            name=""
            id=""
            className="pl-8 w-full bg-[#E1E1E199] h-full color_place"
            placeholder="Search Brands"
          />
          <img
            src={search}
            className="w-[24px] bg-[#E1E1E199] mr-4 h-[24px]"
            alt=""
          />
        </div>
        <div className="w-[425px] justify-between flex flex-wrap gap-8">
          <div className="flex flex-col justify-between gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={suzuki} alt="" />
            </div>
            <div className="w-[120px] h-[20px]">
              <p className="font-poppins font-600 text-[16px] leading-[24px]">
                Maruti Suzuki
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={hyundai} alt="" />
            </div>
            <div className="w-[71px] h-[23px]">
              <p className="font-poppins text-center font-600 text-[16px] leading-[24px]">
                Hyundai
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={tata} alt="" />
            </div>
            <div className="w-[43px] h-[26px]">
              <p className="font-poppins text-center font-600 text-[16px] leading-[24px]">
                Tata
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={suzuki} alt="" />
            </div>
            <div className="w-[120px] h-[20px]">
              <p className="font-poppins font-600 text-[16px] leading-[24px]">
                Maruti Suzuki
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={hyundai} alt="" />
            </div>
            <div className="w-[71px] h-[23px]">
              <p className="font-poppins text-center font-600 text-[16px] leading-[24px]">
                Hyundai
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={tata} alt="" />
            </div>
            <div className="w-[43px] h-[26px]">
              <p className="font-poppins text-center font-600 text-[16px] leading-[24px]">
                Tata
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={suzuki} alt="" />
            </div>
            <div className="w-[120px] h-[20px]">
              <p className="font-poppins font-600 text-[16px] leading-[24px]">
                Maruti Suzuki
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={hyundai} alt="" />
            </div>
            <div className="w-[71px] h-[23px]">
              <p className="font-poppins text-center font-600 text-[16px] leading-[24px]">
                Hyundai
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={tata} alt="" />
            </div>
            <div className="w-[43px] h-[26px]">
              <p className="font-poppins text-center font-600 text-[16px] leading-[24px]">
                Tata
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={suzuki} alt="" />
            </div>
            <div className="w-[120px] h-[20px]">
              <p className="font-poppins font-600 text-[16px] leading-[24px]">
                Maruti Suzuki
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={hyundai} alt="" />
            </div>
            <div className="w-[71px] h-[23px]">
              <p className="font-poppins text-center font-600 text-[16px] leading-[24px]">
                Hyundai
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center gap-2 ">
            <div className="w-[74px] ml-3 items-center flex justify-center h-[74px] bg-[#D9D9D9] rounded-full ">
              <img src={tata} alt="" />
            </div>
            <div className="w-[43px] h-[26px]">
              <p className="font-poppins text-center font-600 text-[16px] leading-[24px]">
                Tata
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* or display this */}
      {/* <div className="flex flex-col w-full gap-7">
        <div className="flex justify-center">
          <div className="w-[175px] h-[172px] bg-[#74B9FF] rounded-full">
            <img
              src={carontop}
              className="w-[270px] h-[172px] left-32 absolute"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex  items-center gap-4">
            <div className="w-[20px] h-[20px] rounded-full bg-[#5B5B5B]"></div>
            <div className="w-[148px] h-[23px] font-poppins font-[600] text-[15px] leading-[22.5px]  ">
              Maruti Suzuki AStar
            </div>
            <div className="w-[90px] h-[30px]  rounded-[10px] flex items-center justify-center border-[1px] bg-[#EBF5FF] border-[#74B9FF]">
              <div className="w-[45px] flex items-center justify-center h-[23px]">
                <p className="font-poppins text-[600] text-[15px] leading-[22.5px]">
                  Petrol
                </p>
              </div>
            </div>
          </div>
          <div className="w-[64px] h-[23px]">
            <p className="font-poppins font-[600] text-[15px] leading-[22.5px] text-[#FF0000] ">
              CHANGE
            </p>
          </div>
        </div>

        <div className="w-[437px] h-[84px] rounded-[10px] border-[1px] mx-auto flex justify-between border-black">
          <div className="w-[90%] mx-auto flex justify-between">
            <div className="flex flex-col justify-center">
              <div className="w-[132px] h-[23px]">
                <p className="font-poppins font-[600] text-[15px] leading-[22.5px]">
                  Standard Service
                </p>
              </div>
              <div className="w-[87px] h-[23px]">
                <p className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                  Mobil 5W30
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[23px]">
                <p className="text-[#ADADAD] font-poppins font-[600] text-[15px] leading-[22.5px]">
                  ₹ 4699
                </p>
              </div>
              <div className="w-[52px] h-[23px]">
                <p className="font-poppins font-[600] text-[15px] leading-[22.5px]">
                  ₹ 4699
                </p>
              </div>
              <div className="w-[32px] flex items-center justify-center h-[29px] rounded-[10px] bg-[#FFDFDF] border-[1px] border-[#FF7474]">
                <img src={dlte} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[437px] h-[114px] p-3 bg-[#3C3C3C] rounded-[10px] border-[1px] mx-auto flex justify-between border-black">
          <div className="w-[90%] mx-auto flex justify-between items-center flex-col">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <div className="w-[91px] h-[29px] items-center flex justify-center rounded-[10px] bg-[#74B9FF]">
                  <div className="w-[40px] h-[23px]">
                    <p className="text-white font-poppins font-[600] text-[15px] leading-[22.5px] ">
                      Miles
                    </p>
                  </div>
                </div>
                <div className="w-[97px] h-[23px]">
                  <p className=" text-white font-poppins font-[600] text-[15px] leading-[22.5px] ">
                    Membership
                  </p>
                </div>
              </div>
              <div className="w-[16px] h-[16px]">
                <p className="text-white">&gt;</p>
              </div>
            </div>
            <div className="flex text-white justify-between items-center w-full">
              <div className="w-[50%]">₹ 20,000 Annual Savings</div>
              <div className="w-[50%]">
                Free SOS and much{" "}
                <span className="text-[#74B9FF] font-[600]  underline">
                  {" "}
                  More
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[437px] flex justify-between">
          <div className="w-[90%] flex justify-between items-center mx-auto">
            <div>
              <div className="w-[154px] h-[26px]">
                <p className="font-poppins font-[600] text-[17px] leading-[25.5px]">
                  Subtotal (1 Items)
                </p>
              </div>
              <div className="w-[193px] h-[23px]">
                <p className="font-poppins font-[600] text-[#A1A1A1] text-[15px] leading-[22.5px]">
                  Extra Charges may apply
                </p>
              </div>
            </div>

            <div className="w-[61px] h-[27px]">
              <p className="font-poppins font-[600] text-[18px] leading-[27px]">
                ₹ 3499
              </p>
            </div>
          </div>
        </div>

        <div className="w-[437px] border-[1px] rounded-[10px] p-3 border-black mx-auto border-dotted flex justify-between">
          <div className="w-[90%] flex justify-between items-center mx-auto">
            <div className="flex items-center gap-4">
              <img src={flower} className="w-[16px] h-[16px]" alt="" />
              <div className="w-full h-full">
                <p className="font-poppins font-[600] text-[15px] leading-[22.5px]">
                  Apply Coupon
                </p>
              </div>
            </div>
            <div className="w-[16px] h-[16px]">&gt;</div>
          </div>
        </div>

        <div className="w-[447px] flex items-center text-white mx-auto rounded-[10px] h-[56px] bg-[#74B9FF] ">
          <div className="w-[90%] items-center mx-auto flex justify-between">
            <div className="w-[58px] h-[26px] ">
              <p className="font-poppins font-[600] text-[15px] leading-[25.5px]">
                ₹ 3499
              </p>
            </div>

            <div className="w-[83px] h-[23px] ">
              <p className="font-poppins font-[600] text-[15px] leading-[22.5px]">
                CHECKOUT
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceCard;
