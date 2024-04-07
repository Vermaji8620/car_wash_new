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
      <div className="w-[50%] gap-5 flex">
        <div className="w-[46px]">
          <img src={Rect} alt="" />
        </div>
        <div className="flex gap-3 flex-col">
          <div className=" w-[914px] h-[50px] font-[600] font-poppins text-[40px] overflow-hidden leading-[50px] ">
            Trending Near You
          </div>
          <div className="font-poppins font-[400] w-[784px] h-[81px] text-[18px] leading-[27px] text-[#6B6B6B]">
            Lorem Ipsum s simply dummy text of the printing and typesetting
            industry.orem Ipsum has been the industry standard dummy Lorem Ipsum
            isimply dummy.
          </div>
        </div>
      </div>
      <div className="w-[50%] relative justify-between gap-3 ml-14 flex flex-wrap">
        <div className="w-[330px] m-2 h-[326px] relative overflow-hidden">
          <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
          <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
          <img src={fimage} alt="" className="absolute  z-30 -left-12 top-12" />
        </div>
        <div className="w-[330px] m-2 h-[326px] relative overflow-hidden">
          <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
          <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
          <img src={simage} alt="" className="absolute z-30 -left-12 top-12" />
        </div>
        <div className="w-[330px] m-2 h-[326px] relative overflow-hidden">
          <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
          <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
          <img src={timage} alt="" className="absolute z-30 -left-12 top-12" />
        </div>
        <div className="w-[330px] m-2 h-[326px] relative overflow-hidden">
          <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
          <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
          <img src={foimage} alt="" className="absolute z-30 -left-12 top-12" />
        </div>
      </div>
    </div>
  );
};

export default ThirdHomeSec;
