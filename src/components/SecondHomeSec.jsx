import grp6 from "../assets/Group 6.png";
import grp1 from "../assets/Group 1.png";
import imgrem from "../assets/image-removebg-preview (9) 1.png";
import bike from "../assets/bike.png";
// import circle from "../assets/circle.png";
import whitecar from "../assets/whitecar.png";
import whitecake from "../assets/whitecake.png";
import blue from "../assets/blueline.png";
import Rect from "../assets/Rectangle 192.png";
import sofa from "../assets/sofa.png";

const SecondHomeSec = () => {
  return (
    <div className="second_section sm:mt-0 mt-[530px] pt-10 pl-5">
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
        <div className="w-[85%] gap-5 flex">
          <div className="sm:w-[46px] w-[96px] sm:top-0 relative top-4">
            <img src={Rect} alt="" />
          </div>
          <div className="flex sm:gap-3 gap-1 flex-col">
            <div className="w-[914px] h-[50px] font-[600] font-poppins sm:text-[40px]  text-[16px] overflow-hidden leading-[50px] ">
              Car Services Available In Surat
            </div>
            <div className="font-poppins font-[400] sm:w-[784px] h-[81px] text-[18px] leading-[27px] text-[#6B6B6B]">
              Lorem Ipsum s simply dummy text of the printing and typesetting
              industry.orem Ipsum has been the industry standard dummy Lorem
              Ipsum isimply dummy.
            </div>
          </div>
        </div>
        <div className=" ml-10 justify-between gap-8 flex sm:-translate-x-0 -translate-x-5 flex-wrap">
          <div className="border-[1px] border-black shadow-lg relative sm:m-4 sm:w-[180px] w-full sm:h-[180px] h-full flex flex-col justify-end rounded-[10px]">
            <img src={grp6} className="absolute top-0 left-0" alt="" />
            <img src={imgrem} alt="" />
            <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] ">
              Pressure Car Wash
            </p>
          </div>
          <div className="border-[1px] border-black shadow-lg overflow-hidden relative sm:m-4 sm:w-[180px] w-full sm:h-[180px] h-full flex flex-col justify-end rounded-[10px]">
            <img
              src={grp6}
              className="relative top-10 rotate-[-55deg] right-0"
              alt=""
            />
            <img
              src={imgrem}
              className="absolute top-6 rotate-[28.04deg] left-16"
              alt=""
            />
            <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] ">
              UnderBody
            </p>
          </div>
          <div className="border-[1px] border-black shadow-lg relative sm:m-4 sm:w-[180px] w-full sm:h-[180px] h-full flex flex-col justify-end rounded-[10px]">
            <img
              src={whitecake}
              className="absolute top-10 left-0 w-[85px] h-[85px]"
              alt=""
            />
            <img src={whitecar} alt="" />
            <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] ">
              Waterless Cleaning
            </p>
          </div>
          <div className="border-[1px] overflow-hidden border-black shadow-lg relative sm:m-4 sm:w-[180px] w-full sm:h-[180px] flex flex-col justify-end rounded-[10px]">
            <img
              src={sofa}
              className="absolute top-5 left-16 sm:w-[96px] w-[70%] sm:h-[78px]"
              alt=""
            />
            <img
              src={grp1}
              alt=""
              className="relative sm:top-8 top-16 right-8"
            />
            <p className="text-center font-poppins font-[700] text-[12px] leading-[18px]  overflow-hidden">
              Car Deep Clean
            </p>
          </div>
          <div className="border-[1px] hidden border-black shadow-lg relative sm:m-4 sm:w-[180px] w-full sm:h-[180px] sm:flex flex-col justify-end rounded-[10px]">
            <img src={imgrem} className="absolute top-10 left-0" alt="" />
            <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] ">
              Wash & Coat
            </p>
          </div>
          <div className="border-[1px] border-black shadow-lg relative sm:m-4 sm:w-[180px] w-full sm:h-[180px] h-[90%] overflow-hidden flex flex-col justify-end rounded-[10px]">
            <img
              src={bike}
              className="absolute sm:w-[80%] w-[90%] top-5 sm:left-10"
              alt=""
            />
            <img
              src={grp1}
              className="relative right-3 sm:top-8 top-24 sm:bottom-10"
              alt=""
            />
            <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] overflow-hidden">
              Bike Washing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHomeSec;
