import grp6 from "../assets/Group 6.png";
import grp1 from "../assets/Group 1.png";
import imgrem from "../assets/image-removebg-preview (9) 1.png";
import bike from "../assets/bike.png";
// import circle from "../assets/circle.png";
import whitecar from "../assets/whitecar.png";
import blue from "../assets/blueline.png";
import Rect from "../assets/Rectangle 192.png";
import sofa from "../assets/sofa.png";

const SecondHomeSec = () => {
  return (
    <div className="second_section sm:mt-0 mt-[430px] pt-10 pl-5">
      <div className="sm:w-[60%] w-[95%] sm:h-full relative gap-6 flex flex-col">
        {/* <div className="absolute top-8 -left-2">
          <img src={circle} alt="" />
          <p className="text-3xl translate-x-3 -translate-y-9 overflow-hidden">
            &lt;
          </p>
        </div>
        <div className="absolute top-8 -right-3">
          <img src={circle} alt="" />
          <p className="text-3xl -translate-y-9 translate-x-2 overflow-hidden">
            &gt;
          </p>
        </div> */}
        <div className="w-[100%] flex overflow-x-auto shadow-lg justify-around sm:p-7 p-4 rounded-[10px] border-[1px] font-[600] text-[13px] leading-[20px] font-poppins border-[#74B9FF] gap-5">
          <div className="flex items-center flex-none flex-col gap-1">
            <div>
              <p>Our Services</p>
              <p>
                <img src={blue} alt="" />
              </p>
            </div>
          </div>
          <p className="flex items-center flex-col gap-1 flex-none">
            Curated Custom Services
          </p>
          <p className="flex items-center flex-col gap-1 flex-none">
            Winter Services
          </p>
          <p className="flex items-center flex-col gap-1 flex-none">
            How GoMechanic Works
          </p>
          <p className="flex items-center flex-col gap-1 flex-none">Rating</p>
        </div>
        <div className="sm:w-[85%] sm:gap-3 gap-1 flex">
          <div className=" w-[96px] relative sm:top-4">
            <img src={Rect} alt="" className="sm:h-full h-[70px]" />
          </div>
          <div className="flex sm:mt-10 -mt-1 items-center">
            <div className="w-[2014px] sm:h-[50px] font-[600] font-poppins sm:text-[40px] text-[25px] overflow-y-hidden leading-[28px]">
              Car Services available in Surat
            </div>
          </div>
        </div>
        <div className="ml-10 justify-between gap-8 flex sm:-translate-x-0 -translate-x-5 flex-wrap">
          <div className="flex sm:gap-20 gap-3">
            <div className="sm:shadow-lg  relative sm:m-4 sm:w-[180px] sm:h-[180px] h-full flex flex-col justify-end rounded-[10px]">
              <img src={grp6} className="absolute top-0 left-0" alt="" />
              <img src={imgrem} alt="" />
              <p className="text-center font-poppins font-[700] sm:text-[12px] text-[8px] sm:leading-[18px] ">
                Pressure Car Wash
              </p>
            </div>
            <div className="sm:shadow-lg overflow-y-hidden relative sm:m-4 sm:w-[180px] sm:h-[180px] h-full flex flex-col justify-end rounded-[10px]">
              <img
                src={grp6}
                alt=""
              />
              <img
                src={imgrem}
                className="absolute top-4 rotate-[28.04deg] sm:left-16"
                alt=""
              />
              <p className="text-center font-poppins font-[700] sm:text-[12px] text-[10px] leading-[18px] ">
                UnderBody
              </p>
            </div>
            <div className="sm:shadow-lg  relative sm:m-4 sm:w-[180px] sm:h-[180px] h-full flex flex-col justify-end rounded-[10px]">
              <img src={whitecar} alt="" />
              <p className="text-center font-poppins font-[700] sm:text-[12px] text-[9px] sm:leading-[18px] ">
                Waterless Cleaning
              </p>
            </div>
          </div>
          <div className="flex sm:gap-20 gap-3">
            <div className="overflow-hidden  sm:shadow-lg relative sm:m-4 sm:w-[180px] sm:h-[180px] flex flex-col justify-end rounded-[10px]">
              <img
                src={sofa}
                className="absolute sm:translate-x-0 translate-x-2 top-4 sm:left-16 sm:w-[96px] w-[70%] sm:h-[78px]"
                alt=""
              />
              <img
                src={grp1}
                alt=""
              />
              <p className="text-center font-poppins font-[700] sm:text-[12px] text-[10px] leading-[18px]  overflow-hidden mb-4">
                Car Deep Clean
              </p>
            </div>
            <div className="sm:shadow-lg  relative sm:m-4 sm:w-[180px] sm:h-[180px] h-[90%] overflow-hidden flex flex-col justify-end rounded-[10px]">
              <img
                src={imgrem}
                className="absolute sm:w-[80%] w-[90%] top-5 sm:left-10"
                alt=""
              />
              <img
                src={grp1}
                alt=""
              />
              <p className="text-center font-poppins font-[700] text-[10px] sm:text-[12px] leading-[18px] overflow-hidden">
                Wash And Coat
              </p>
            </div>
            <div className="sm:shadow-lg  relative sm:m-4 sm:w-[180px] sm:h-[180px] h-[90%] overflow-hidden flex flex-col justify-end rounded-[10px]">
              <img
                src={bike}
                className="absolute sm:w-[80%] w-[90%] top-5 sm:left-10"
                alt=""
              />
              <img
                src={grp1}
                alt=""
              />
              <p className="text-center font-poppins font-[700] text-[10px] sm:text-[12px] leading-[18px] overflow-hidden">
                Bike Washing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHomeSec;
