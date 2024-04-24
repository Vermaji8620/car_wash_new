import wash1 from "../assets/wash_1.png";
import wash2 from "../assets/wash_2.png";
import wash3 from "../assets/wash_3.png";
import wash4 from "../assets/wash_4.png";
import aboutperson1 from "../assets/aboutperson1.png";
import aboutperson2 from "../assets/aboutperson2.png";
import aboutperson3 from "../assets/aboutperson3.png";
import aboutperson4 from "../assets/aboutperson4.png";
import NinethHome from "../components/NinethHomeSec";
import TenthHomeSec from "../components/TenthHomeSec";
const About = () => {
  return (
    <div className="">
      <div className="w-[90%] flex flex-col gap-10 mx-auto mt-10">
        <div>
          <div className="md:w-[180px] md:h-[60px]">
            <p className="font-poppins font-[600] md:text-[40px] text-[20px] md:leading-[60px]">
              About Us
            </p>
          </div>
          <div className="md:w-[1006px] md:h-[50px]">
            <p className="font-poppins font-[400] md:text-[30px] text-[20px] md:leading-[50px] text-[#7F7F7F]">
              Carwash aspires to be a one-step Solution for all car care needs
            </p>
          </div>
        </div>
        <div className="w-full flex-col flex md:flex-row justify-between">
          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="md:w-[667px] md:h-[363px]">
              <p className="font-poppins font-[400] md:text-[22px] md:leading-[33px] text-[#7F7F7F]">
                Lorem Ipsum is simply dummy text of the printing andtypesetting
                industry. Lorem Ipsum has been the industry sstandard dummy text
                ever since the 1500s, when anunknown printer took a galley of
                type and scrambled it tomake a type specimen book. It has
                survived not only fivecenturies, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the1960s with the release of Letraset sheets
                containing LoremIpsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                LoremIpsum.
              </p>
            </div>
            <div className="md:w-[632px] md:h-[165px]">
              <p className="font-poppins font-[400] md:text-[22px] md:leading-[33px] text-[#7F7F7F]">
                Lorem Ipsum is simply dummy text of the printing andtypesetting
                industry. Lorem Ipsum has been the industrysstandard dummy text
                ever since the 1500s, when anunknown printer took a galley of
                type and scrambled it tomake a type specimen book.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 hidden md:flex flex-wrap -mr-20">
            <div className="flex">
              <img src={wash1} className="w-[280px] h-[280px] " alt="" />
              <img src={wash2} className="w-[288px] h-[282px] " alt="" />
            </div>
            <div className="flex">
              <img src={wash3} className="w-[287px] h-[280px] " alt="" />
              <img src={wash4} className="w-[288px] h-[280px] " alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-[292px] h-[60px]">
            <p className="font-poppins font-[400] text-[40px] leading-[60px] ">
              Core Team
            </p>
          </div>
          <div className="w-[1006px] h-[50px]">
            <p className="font-poppins font-[400] md:text-[30px] text-[20px] leading-[50px] text-[#7F7F7F]">
              People behind your Services
            </p>
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center flex-col">
              <img
                src={aboutperson1}
                className="md:w-[285px] md:h-[285px] w-[150px] h-[150px] rounded-full"
                alt=""
              />
              <div className="w-[450px] h-[45px]">
                <p className="text-center font-poppins font-[600] md:text-[30px] leading-[45px]">
                  Himanshu Arora
                </p>
              </div>
              <div className="md:w-[63px]  md:h-[45px]">
                <p className="font-poppins md:-mt-0 -mt-4 font-[400] md:text-[30px] leading-[45px] text-[#74B9FF]">
                  CEO
                </p>
              </div>
            </div>

            <div className="flex items-center md:pt-0 pt-3 justify-center flex-col">
              <img
                src={aboutperson2}
                className="md:w-[285px] md:h-[285px] w-[150px] h-[150px] rounded-full"
                alt=""
              />
              <div className="md:w-[450px] md:h-[45px]">
                <p className="text-center font-poppins font-[600] md:text-[30px] leading-[45px]">
                  Jignesh Shah
                </p>
              </div>
              <div className="md:h-[45px]">
                <p className="font-poppins md:-mt-0 -mt-4 font-[400] md:text-[30px] leading-[45px] text-[#74B9FF]">
                  Co-Founder
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center flex-col">
              <img
                src={aboutperson3}
                className="md:w-[285px] md:h-[285px] w-[150px] h-[150px] rounded-full"
                alt=""
              />
              <div className="w-[450px] h-[45px]">
                <p className="text-center font-poppins font-[600] md:text-[30px] leading-[45px]">
                  Vijay Master
                </p>
              </div>
              <div className="h-[45px]">
                <p className="font-poppins md:-mt-0 -mt-4 font-[400] md:text-[30px] leading-[45px] text-[#74B9FF]">
                  Co-Founder
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                src={aboutperson4}
                className="md:w-[285px] md:h-[285px] w-[150px] h-[150px] rounded-full"
                alt=""
              />
              <div className="w-[450px] h-[45px]">
                <p className="text-center font-poppins font-[600] md:text-[30px] leading-[45px]">
                  Mukesh Kakkar
                </p>
              </div>
              <div className="h-[45px]">
                <p className="font-poppins md:-mt-0 -mt-4 font-[400] md:text-[30px] leading-[45px] text-[#74B9FF]">
                  Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NinethHome />
      <TenthHomeSec />
    </div>
  );
};

export default About;
