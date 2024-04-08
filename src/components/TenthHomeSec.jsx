import bg_logo from "../assets/logo_bg.png";
import call from "../assets/call.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import time from "../assets/time.png";
import gplay from "../assets/gplay.png";
import applay from "../assets/appplay.png";

const TenthHomeSec = () => {
  return (
    <div className="tenth_section z-50 bg-[#1A1A1A] items-center text-white pb-16 justify-around gap-8 flex flex-col pl-5">
      <img src={bg_logo} className="w-[232px] h-[116px]" alt="" />
      <div className="sm:w-[978px] sm:h-[87px] sm:-ml-0 -ml-5 text-center">
        <p className="font-[400] text-[19px] text-center w-full leading-[29px]">
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry. Lorem Ipsum has been the industrys standard dummy Lorem
          Ipsum is simply <br /> dummy.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col items-center w-[80%] justify-end -mt-20 sm:pt-0 pt-16">
        <img src={gplay} alt="" />
        <img src={applay} className="w-[194px] h-[61px]" alt="" />
      </div>
      <div className="flex sm:flex-row flex-col justify-around gap-7 items-center w-[80%]">
        <div className="flex flex-col gap-8">
          <img src={call} className="translate-x-9 w-[47px] h-[47px]" alt="" />
          <div className="w-[169px] h-[56px]">
            <div className="w-[169px] h-[32px]">
              <p className="font-[500] text-[18px] font-poppins leading-[32px]">
                +91 91047 93373
              </p>
            </div>
            <div className="w-[146px] h-[24px]">
              <p className="text-[#74B9FF] font-[500] text-[16px] leading-[24px]">
                Round-the-clock
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <img
            src={location}
            className="translate-x-20 w-[45px] h-[45px]"
            alt=""
          />
          <div className="text-center flex flex-col items-center w-[215px] h-[80px]">
            <div className="w-[196px] h-[32px]">
              <p className="font-[500] font-poppins text-[21px] leading-[31.5px]">
                Car Washing Point
              </p>
            </div>
            <div className="w-[215px] h-[48px] ">
              <p className="text-[#74B9FF] font-[500] text-[16px] leading-[24px] font-poppins">
                1353, Locus St, Kansas City, Mo - 64106
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <img src={mail} className="translate-x-20 w-[53px] h-[44px]" alt="" />
          <div className="w-[244x] h-[56px]">
            <div className="w-[244px] h-[32px]">
              <p className="font-[500] text-[21px] font-poppins leading-[31.5px]">
                info@abc@Gmail.com
              </p>
            </div>
            <div className="w-[220px] h-[24px] ">
              <p className="text-[#74B9FF] text-center font-poppins font-[500] text-[16px] leading-[24px] ">
                Support@abc@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <img src={time} className="translate-x-20 w-[50px] h-[50px]" alt="" />
          <div className="w-[257px] h-[56px]">
            <div className="w-[257px] h-[32px]">
              <p className="font-[500] text-[21px] font-poppins leading-[31.5px]">
                Mon - Sat :{" "}
                <span className="text-[#74B9FF] font-[500] text-[19px] font-poppins leading-[31.5px]">
                  07:00 - 22:00
                </span>
              </p>
            </div>
            <div className="w-[141px] translate-x-14 h-[24px]">
              <p className="text-[#74B9FF] font-poppins font-[500] text-[16px] leading-[24px] ">
                Sun: 07:00 - 16:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenthHomeSec;
