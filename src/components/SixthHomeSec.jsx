import coma from "../assets/coma.png";
import person from "../assets/person.png";
import backrect from "../assets/backrect.png";
import Rect from "../assets/Rectangle 192.png";

const SixthHomeSec = () => {
  return (
    <div className="sixth_section sm:pt-24 gap-16 flex flex-col pl-5">
      <div className="sm:w-[50%] sm:gap-5 gap-3 flex">
        <div className="sm:w-[46px] relative sm:top-0 top-4 w-[96px]">
          <img src={Rect} className="h-32" alt="" />
        </div>
        <div className="flex gap-3 flex-col">
          <div className="sm:w-[914px] flex flex-col">
            <p className="font-[600] text-[40px] overflow-hidden leading-[50px] font-poppins">
              What Car Owners in Bangalore Say
            </p>
          </div>
          <div className=" sm:w-[784px] h-[81px]">
            <p className="font-poppins font-[400] text-[18px] leading-[27px] text-[#6B6B6B]">
              Lorem Ipsum s simply dummy text of the printing and typesetting
              industry.orem Ipsum has been the industry standard dummy Lorem
              Ipsum isimply dummy.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-carback sm:w-[950px] flex flex-col sm:-ml-0 -ml-2 justify-evenly gap-8 items-center relative overflow-y-hidden sm:h-[756px] h-[600px] w-[350px] opacity-[1] bg-no-repeat bg-cover">
        <img src={backrect} className="w-full absolute z-10" alt="" />
        <img
          src={coma}
          className="absolute opacity-[50%] z-40 -mt-8 w-[336px] h-[336px]"
          alt=""
        />

        <div className="w-full flex flex-col items-center z-30">
          <div className="w-[214px] h-[48px]">
            <p className="font-[700] text-[#74B9FF] text-[32px] leading-[48px] font-poppins">
              Testimonials
            </p>
          </div>
          <div className="w-[348px] overflow-hidden h-[48px]">
            <p className="font-[700] text-white  text-[32px] leading-[48px] font-poppins">
              What Our Clients Say
            </p>
          </div>
        </div>

        <div className="flex mt-32 text-white z-30 items-center  justify-between w-[90%] mx-auto">
          <div className="w-[40px] h-[40px] rounded-full border-[3px] border-white">
            <p className="translate-x-2 sm:translate-x-3 translate-y-1">&lt;</p>
          </div>
          <div className="w-[405px] flex flex-col justify-center sm:h-[92px]">
            <p className="font-[600] text-center text-[15px] leading-[22px]">
              Lorem Ipsums simply dummy text of the typesetting industry. Lorem
              Ipsum has been s standard dummy Lorem Ipsums simpdummy.
            </p>
          </div>
          <div className="w-[40px] h-[40px] rounded-full border-[3px] border-white">
            <p className="sm:translate-x-3 translate-x-2 translate-y-1">&gt;</p>
          </div>
        </div>

        <div className=" text-white z-30 flex items-center flex-col">
          <div className="flex flex-col">
            <div className="w-[93px] h-[93px] rounded-full">
              <img src={person} alt="" />
            </div>
          </div>

          <div className="w-[160px] h-[48px] overflow-hidden">
            <p className="font-poppins text-[#74B9FF] font-[700] text-[32px] leading-[48px] flex">
              Coby Cue
            </p>
          </div>

          <div className="overflow-hidden w-[189px] h-[33px]">
            <p className=" font-poppins font-[500] text-[22px] leading-[33px] ">
              Company Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthHomeSec;
