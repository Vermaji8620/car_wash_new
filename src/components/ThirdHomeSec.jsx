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
      <div className="w-[85%] gap-5 flex">
        <div className="sm:w-[46px] w-[96px] relative sm:top-4">
          <img src={Rect} alt="" />
        </div>
        <div className="flex sm:gap-3 sm:-mt-0 -mt-3 flex-col">
          <div className="w-[914px] sm:h-[50px] font-[600] font-poppins sm:text-[40px] text-[16px] overflow-hidden leading-[50px] ">
            Trending Near You
          </div>
          <div className="font-poppins font-[400] sm:w-[704px] w-[18rem] sm:h-[81px] h-full gap-1 sm:text-[18px] sm:leading-[27px] leading-[20px] text-[#6B6B6B] justify-start pt-3 flex flex-col">
            Lorem Ipsum s simply dummy text of the printing and typesetting
            industry.
            <span className="sm:inline-block hidden">
              orem Ipsum has been the industry standard dummy Lorem Ipsum
              isimply dummy.
            </span>
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
