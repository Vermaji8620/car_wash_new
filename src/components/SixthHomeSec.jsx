import coma from "../assets/coma.png";
import bluerect from "../assets/bluerect.png";
import person from "../assets/person.png";
import person1 from "../assets/person1.webp";
// import person2 from "../assets/person2.webp";
// import person3 from "../assets/person3.jpeg";
import backrect from "../assets/backrect.png";
import Rect from "../assets/Rectangle 192.png";

const SixthHomeSec = () => {
  return (
    <div className="sixth_section relative overflow-y-hidden sm:pt-24 sm:-mt-0 -mt-24 gap-8 flex flex-col pl-5">
      <div className="sm:w-[85%] sm:gap-3 gap-1 overflow-hidden flex">
        <div className="sm:w-[46px] w-[96px] relative sm:top-4">
          <img src={Rect} alt=""  className="sm:h-full h-[70px]"/>
        </div>
        <div className="flex sm:mt-10 -mt-1 items-center">
          <div className="w-[2014px] sm:h-[50px] font-[600] font-poppins sm:text-[40px] text-[25px] overflow-hidden leading-[28px]">
            What Our Customers Say
          </div>
        </div>
      </div>

      <div className="hidden bg-carback sm:w-[950px] sm:flex flex-col sm:-ml-0 -ml-2 justify-evenly gap-8 items-center relative overflow-y-hidden sm:h-[756px] h-[600px] w-[350px] opacity-[1] bg-no-repeat bg-cover">
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

      <div className="sm:hidden flex h-[300px] overflow-x-auto -mt-9 flex-nowrap">
        <div className="w-[100vw] flex-none ">
          <div className="overflow-hidden flex-none -mt-2 translate-x-6">
            <img
              src={person1}
              className="sm:hidden absolute w-[80px] rounded-full bottom-48 left-[100px] z-30 h-[80px] "
              alt=""
            />
            <div className="sm:hidden  overflow-hidden w-full relative top-16">
              <img src={bluerect} className="w-[80%] " alt="" />
              <div className="text-white gap-2 flex flex-col mt-8 absolute top-7">
                <p className="text-[20px] text-center relative right-10 ">
                  Sarah Jahnam
                </p>
                <p className="text-[10px]  text-center relative right-10">
                  CEO of IT Company
                </p>
                <p className="text-[10px] text-center left-3 relative w-[70%]">
                  “ Lorem Ipsumsimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text ever since the 1500s”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] flex-none ">
          <div className="overflow-hidden flex-none -mt-2 translate-x-6">
            <img
              src={person1}
              className="sm:hidden absolute w-[80px] rounded-full bottom-48 left-[100px] z-30 h-[80px] "
              alt=""
            />
            <div className="sm:hidden  overflow-hidden w-full relative top-16">
              <img src={bluerect} className="w-[80%] " alt="" />
              <div className="text-white gap-2 flex flex-col mt-8 absolute top-7">
                <p className="text-[20px] text-center relative right-10 ">
                  Sarah Jahnam
                </p>
                <p className="text-[10px]  text-center relative right-10">
                  CEO of IT Company
                </p>
                <p className="text-[10px] text-center left-3 relative w-[70%]">
                  “ Lorem Ipsumsimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text ever since the 1500s”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] flex-none ">
          <div className="overflow-hidden flex-none -mt-2 translate-x-6">
            <img
              src={person1}
              className="sm:hidden absolute w-[80px] rounded-full bottom-48 left-[100px] z-30 h-[80px] "
              alt=""
            />
            <div className="sm:hidden  overflow-hidden w-full relative top-16">
              <img src={bluerect} className="w-[80%] " alt="" />
              <div className="text-white gap-2 flex flex-col mt-8 absolute top-7">
                <p className="text-[20px] text-center relative right-10 ">
                  Sarah Jahnam
                </p>
                <p className="text-[10px]  text-center relative right-10">
                  CEO of IT Company
                </p>
                <p className="text-[10px] text-center left-3 relative w-[70%]">
                  “ Lorem Ipsumsimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text ever since the 1500s”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] flex-none ">
          <div className="overflow-hidden flex-none -mt-2 translate-x-6">
            <img
              src={person1}
              className="sm:hidden absolute w-[80px] rounded-full bottom-48 left-[100px] z-30 h-[80px] "
              alt=""
            />
            <div className="sm:hidden  overflow-hidden w-full relative top-16">
              <img src={bluerect} className="w-[80%] " alt="" />
              <div className="text-white gap-2 flex flex-col mt-8 absolute top-7">
                <p className="text-[20px] text-center relative right-10 ">
                  Sarah Jahnam
                </p>
                <p className="text-[10px]  text-center relative right-10">
                  CEO of IT Company
                </p>
                <p className="text-[10px] text-center left-3 relative w-[70%]">
                  “ Lorem Ipsumsimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text ever since the 1500s”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] flex-none ">
          <div className="overflow-hidden flex-none -mt-2 translate-x-6">
            <img
              src={person1}
              className="sm:hidden absolute w-[80px] rounded-full bottom-48 left-[100px] z-30 h-[80px] "
              alt=""
            />
            <div className="sm:hidden  overflow-hidden w-full relative top-16">
              <img src={bluerect} className="w-[80%] " alt="" />
              <div className="text-white gap-2 flex flex-col mt-8 absolute top-7">
                <p className="text-[20px] text-center relative right-10 ">
                  Sarah Jahnam
                </p>
                <p className="text-[10px]  text-center relative right-10">
                  CEO of IT Company
                </p>
                <p className="text-[10px] text-center left-3 relative w-[70%]">
                  “ Lorem Ipsumsimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text ever since the 1500s”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthHomeSec;
