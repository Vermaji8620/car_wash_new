import frect from "../assets/f_rect.png";
import srect from "../assets/s_rect.png";
import fimage from "../assets/fimage.png";
import simage from "../assets/simage.png";
import Rect from "../assets/Rectangle 192.png";
import timage from "../assets/timage.png";
import foimage from "../assets/foimage.png";

const ThirdHomeSec = () => {
  return (
    <div className="third_section pt-10 pl-5">
       <div className="sm:w-[85%] sm:gap-3 gap-1 overflow-hidden flex">
        <div className="sm:w-[46px] w-[96px] relative sm:top-4">
          <img src={Rect} alt=""  className="sm:h-full h-[50px]"/>
        </div>
        <div className="flex sm:mt-10 -mt-1 items-center">
          <div className="w-[2014px] sm:h-[50px] font-[600] font-poppins sm:text-[40px] text-[25px] overflow-hidden leading-[28px]">
            Trending Near You
          </div>
        </div>
      </div>
      <div className="sm:w-[50%] relative justify-between gap-3 sm:ml-14 flex overflow-x-auto flex-nowrap sm:flex-wrap">
        <div className="flex-none w-[330px] m-2 h-[326px] relative overflow-hidden">
          <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
          <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
          <img src={fimage} alt="" className="absolute  z-30 -left-12 top-12" />
        </div>
        <div className="flex-none w-[330px] m-2 h-[326px] relative overflow-hidden">
          <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
          <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
          <img src={simage} alt="" className="absolute z-30 -left-12 top-12" />
        </div>
        <div className="flex-none w-[330px] m-2 h-[326px] relative overflow-hidden">
          <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
          <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
          <img src={timage} alt="" className="absolute z-30 -left-12 top-12" />
        </div>
        <div className="flex-none w-[330px] m-2 h-[326px] relative overflow-hidden">
          <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
          <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
          <img src={foimage} alt="" className="absolute z-30 -left-12 top-12" />
        </div>
      </div>
    </div>
  );
};

export default ThirdHomeSec;
