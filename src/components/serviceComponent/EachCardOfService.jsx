import { useDispatch, useSelector } from "react-redux";
import cartick from "../../assets/cartick.png";
import clockicon from "../../assets/clockicon.png";
import { TiTick } from "react-icons/ti";
import { addentry, addtotal } from "../../redux/ReduxSlice";

const EachCardOfService = ({
  index,
  imgLink,
  title,
  desc1,
  desc2,
  strikePrice,
  price,
}) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.counter);
  const addfunc = () => {
    strikePrice = Number(strikePrice);
    price = Number(price);
    dispatch(addentry({ strikePrice, price, index, title }));
    dispatch(addtotal(price));
  };
  return (
    <div className="shadow-[2xl sm:-mb-0 relative w-full">
      <div className="flex justify-center text-white items-center absolute w-[173px] h-[28px] sm:h-[43px] bg-[#309534] rounded-tl-[10px] rounded-br-[10px] sm:top-10 top-16 translate-y-1">
        RECOMMENDED
      </div>

      <div className="w-full bg-white sm:h-[325px] mt-16 sm:pt-10 pt-8 shadow-lg p-4 flex flex-col justify-around sm:rounded-[20px] rounded-[5px]">
        <div className="flex sm:flex-row overflow-hidden flex-row-reverse justify-between items-center">
          <div className="sm:w-[140px] rounded-2xl sm:h-[145px] translate-y-2 w-[40%] sm:-translate-y-5">
            <img src={imgLink} alt="" />
          </div>
          <div className="flex flex-col sm:w-[80%] w-[60%] sm:gap-4 gap-4">
            <div className="flex justify-between">
              <div className="sm:h-[30px]">
                <div className="font-poppins font-[600] sm:text-[20px] text-[16px] sm:leading-[30px]">
                  {title}
                </div>
              </div>
              <div className="w-[173px] h-[37px] rounded-[10px] sm:flex hidden items-center bg-[#EBF5FF] justify-center">
                <div className="w-[126px] h-[24px] justify-around flex items-center">
                  <img src={clockicon} alt="" />
                  <div className="w-[87px] h-[23px] ">
                    <div className="font-poppins font-[400] text-[15px] leading-[22.5px]">
                      6 Hrs Taken
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[240px] hidden sm:inline-block h-[23px]">
                <div className="font-poppins font-[400] sm:text-[15px] sm:leading-[22.5px]">
                  {desc1}
                </div>
              </div>
              <div className="sm:w-[369px] overflow-hidden sm:h-[23px]">
                <div className="font-poppins hidden sm:inline-block font-[400] sm:text-[15px] sm:leading-[22.5px]">
                  {desc2}
                </div>
                <div className=" sm:hidden gap-2 text-[12px] flex items-center">
                  <div className="w-[4px] h-[4px] rounded-full bg-black"></div>
                  Every 10000 Kms
                </div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-mt-0 -mt-4">
              <div className="flex items-center gap-2 sm:w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] hidden sm:inline-block w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="sm:h-[23px]">
                  <div className="font-poppins hidden sm:inline-block font-[400] text-[15px] leading-[22.5px]">
                    Car Scanning
                  </div>
                  <div className=" sm:hidden gap-2 text-[12px] flex items-center">
                    <div className="w-[4px] h-[4px] rounded-full bg-black"></div>
                    Takes 6 hours
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] hidden sm:inline-block w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="sm:h-[23px] hidden sm:inline-block">
                  <div className="font-poppins hidden sm:inline-block font-[400] text-[15px] leading-[22.5px]">
                    Wiper Fluid Replacement
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] hidden sm:inline-block w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="sm:h-[23px]">
                  <div className="font-poppins hidden sm:inline-block font-[400] text-[15px] leading-[22.5px]">
                    Battery Water Top up
                  </div>
                  <div className=" sm:hidden gap-2 text-[12px] flex items-center">
                    <div className="w-[4px] h-[4px] rounded-full bg-black"></div>{" "}
                    1 Month Warranty
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] hidden sm:inline-block w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="sm:h-[23px]">
                  <div className="font-poppins hidden sm:inline-block font-[400] text-[15px] leading-[22.5px]">
                    Car Wash
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:w-1/2">
                <img
                  src={cartick}
                  className="bg-[#309534] hidden sm:inline-block w-[12px] h-[12px] rounded-full"
                  alt=""
                />
                <div className="sm:h-[23px]">
                  <div className="font-poppins hidden sm:inline-block font-[400] text-[15px] leading-[22.5px]">
                    Interior Vacuuming (Carpet & Seats)
                  </div>
                  <div className=" sm:hidden gap-2 text-[12px] flex items-center">
                    <div className="w-[4px] h-[4px] rounded-full bg-black"></div>{" "}
                    Includes 15 services
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <div className="sm:h-[23px]">
                  <div className="font-poppins hidden sm:inline-block text-[#309534] underline font-[400] text-[15px] leading-[22.5px]">
                    +10 more View All
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden inline-block text-[13px] -mt-3 translate-x-3 underline text-teal-900 font-[600]">
          Show More
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="w-[52px] h-[27px]">
              <strike className="font-poppins text-[#ACACAC] font-[600] sm:text-[18px] text-[14px] leading-[27px]">
                ₹ {strikePrice}
              </strike>
            </div>
            <div className="sm:w-[100px] sm:h-[30px]">
              <div className="font-poppins font-[600] sm:text-[20px] text-[18px] leading-[30px]">
                ₹ {price}
              </div>
            </div>
          </div>

          <div className="sm:w-[162px] sm:relative absolute sm:bottom-0 bottom-7 sm:left-0 left-52 sm:h-[46px] sm:rounded-[10px] rounded-[10px] sm:translate-x-0 translate-x-6 flex items-center w-[90px] h-[40px] border-[2px] border-[#74B9FF]">
            <div
              className={`rounded-md w-full ${
                selector.items.some((item) => item.index === index)
                  ? "bg-[#74B9FF] text-white"
                  : "text-[#74B9FF] bg-white"
              }   h-full flex items-center justify-center gap-5 mx-auto`}
            >
              <div onClick={() => addfunc()}>
                <button className="font-poppins font-[700] sm:text-[15px]  text-[15px] sm:translate-x-0 leading-[22.5px] text-center">
                  <button
                    className={` ${
                      selector.items.some((item) => item.index === index)
                        ? "hidden"
                        : "inline-block"
                    }`}
                  >
                    ADD
                  </button>
                  <button
                    disabled
                    className={`font-poppins pr-2 font-[700] mt-2 sm:text-[15px] items-center flex text-[12px] sm:translate-x-0 leading-[22.5px] text-center  ${
                      selector.items.some((item) => item.index === index)
                        ? "inline-block"
                        : "hidden"
                    } flex`}
                  >
                    <TiTick className=" text-green-600 sm:text-2xl text-xl" />
                    ADDED
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCardOfService;
