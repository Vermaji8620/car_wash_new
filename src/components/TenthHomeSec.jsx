import call from "../assets/call.png";
import location from "../assets/location.png";
import newlogo from "../assets/newlogo.png";
import mail from "../assets/mail.png";
import time from "../assets/time.png";
import gplay from "../assets/gplay.png";
import applay from "../assets/appplay.png";

const TenthHomeSec = () => {
  return (
    <div className="tenth_section z-50 bg-[#1A1A1A] items-center text-white pb-16 justify-around sm:gap-8 flex flex-col pl-5">
      <img src={newlogo} className="w-[232px]" alt="" />
      <div className="sm:w-[978px] overflow-hidden sm:h-[87px] w-[90%] sm:-ml-40 -ml-5 text-center">
        <p className="font-[400] sm:text-[19px] text-[10px] sm:text-start text-center sm:w-[60%] leading-[18px] sm:leading-[29px]">
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry. Lorem Ipsum has been the industrys standard dummy Lorem
          Ipsum is simply <br />{" "}
          <span className="sm:inline-block hidden"> dummy</span>
        </p>
      </div>
      <div className="hidden sm:flex flex-row items-center w-[80%] justify-end -mt-28 sm:pt-0 sm:mr-20">
        <img src={gplay} alt="" />
        <img src={applay} className="w-[194px] sm:h-[61px]" alt="" />
      </div>
      <div className="flex sm:flex-row flex-col justify-around sm:gap-7 gap-5 sm:pt-0 pt-7 items-center sm:w-[80%] w-full">
        <div className="flex justify-around sm:gap-16 sm:w-fit w-full items-center">
          <div className="flex flex-col sm:gap-8">
            <img
              src={call}
              className="translate-x-9 sm:w-[47px] sm:h-[47px] h-[35px] w-[35px]"
              alt=""
            />
            <div className="sm:w-[169px] gap-0 flex flex-col sm:h-[56px]">
              <div className="sm:w-[169px] sm:h-[32px]">
                <p className="font-[500] sm:text-[18px] text-[12px] font-poppins sm:leading-[32px]">
                  +91 91047 93373
                </p>
              </div>
              <div className="sm:w-[146px] sm:h-[24px]">
                <p className="text-[#74B9FF] font-[500] sm:text-[16px] text-[12px] leading-[24px]">
                  Round-the-clock
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:gap-8">
            <img
              src={location}
              className="sm:translate-x-20 translate-x-14 sm:w-[45px] w-[40px] h-[40px] sm:h-[45px]"
              alt=""
            />
            <div className="text-center flex flex-col items-center sm:w-[215px] sm:h-[80px]">
              <div className="sm:w-[196px] sm:h-[32px]">
                <p className="font-[500] font-poppins text-[12px] sm:text-[21px] sm:leading-[31.5px]">
                  Car Washing Point
                </p>
              </div>
              <div className="sm:w-[215px] sm:h-[48px] ">
                <p className="text-[#74B9FF] font-[500] text-[12px] flex-wrap sm:text-[16px] sm:leading-[24px] font-poppins">
                  1353, Locus St, Kansas City,
                  <br /> Mo - 64106
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around sm:gap-16 sm:w-fit w-full items-center">
          <div className="flex flex-col sm:gap-8">
            <img
              src={mail}
              className="translate-x-9 sm:w-[47px] sm:h-[47px] h-[35px] w-[35px]"
              alt=""
            />
            <div className="sm:w-[169px] gap-0 flex flex-col sm:h-[56px]">
              <div className="sm:w-[169px] sm:h-[32px]">
                <p className="font-[500] sm:text-[18px] text-[12px] font-poppins sm:leading-[32px]">
                  +91 91047 93373
                </p>
              </div>
              <div className="sm:w-[146px] sm:h-[24px]">
                <p className="text-[#74B9FF] font-[500] sm:text-[16px] text-[12px] leading-[24px]">
                  Round-the-clock
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:gap-8">
            <img
              src={time}
              className="sm:translate-x-20 translate-x-14 sm:w-[45px] w-[40px] h-[40px] sm:h-[45px]"
              alt=""
            />
            <div className="text-center flex flex-col items-center sm:w-[215px] sm:h-[80px]">
              <div className="sm:w-[196px] sm:h-[32px]">
                <p className="font-[500] font-poppins text-[12px] sm:text-[21px] sm:leading-[31.5px]">
                  Car Washing Point
                </p>
              </div>
              <div className="sm:w-[215px] sm:h-[48px] ">
                <p className="text-[#74B9FF] font-[500] text-[12px] flex-wrap sm:text-[16px] sm:leading-[24px] font-poppins">
                  1353, Locus St, Kansas City,
                  <br /> Mo - 64106
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-row items-center w-[80%] justify-end -mt-20 sm:pt-0 pt-24">
        <img src={gplay} alt="" />
        <img src={applay} className="w-[194px] sm:h-[61px]" alt="" />
      </div>
    </div>
  );
};

export default TenthHomeSec;
