import blogpagecar from "../assets/blogpagecar.png";
import fuline from "../assets/fuline.png"
import takla from "../assets/takla.png";
import taxi from "../assets/taxi.png";
import carimage from "../assets/carimage.png";
import lineplain from "../assets/lineplain.png";
import persondrive from "../assets/persondrive.png";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import john from "../assets/john.png";
const Blog = () => {
  return (
    <div className="w-[95%] p-3 flex flex-col gap-5 mx-auto">
      <div className="w-full">
        <img src={blogpagecar} alt="" />
      </div>
      <div className="md:w-[95%] m-auto mt-10 md:flex">
        <div className="md:w-1/2 flex flex-col gap-3">
          <div className="">
            <p className="font-poppins font-[700] text-[36px] leading-20">
              Latest
            </p>
          </div>
          <div className="w-full">
            <img src={taxi} alt="" />
          </div>
          <div className="mt-3">
            <p className="text-[#4C4C4C] font-[500] text-[14px] leading-[20px]">
              By <span className="text-[#74B9FF]">John Doe</span> l March 12,
              2024
            </p>
          </div>
          <div className=" md:w-[655px]">
            <p className="font-[700] text-[#232536] md:text-[28px] md:leading-[40px]">
              Lorem ipsum dolor sit amet, consectetur aiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="md:w-[626px]">
            <p className="font-inter font-[400] md:text-[16px] md:leading-[28px] text-[#6D6E76]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident. Duis aute irure dolor in reprehenderit in
              voluptate v Duis aute irure dolor in reprehenderit in volusse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <button className="md:w-[280px] md:h-[61px] h-[40px] bg-[#74B9FF]  rounded-[10px] flex justify-center items-center">
            <p className="text-white text-center font-inter font-[700] text-[18px] leading-[21.78px] ">
              Read more
            </p>
          </button>
        </div>
        <div className="md:w-1/2 mt-10 items-end flex flex-col">
          <div className="flex pl-0 md:pl-28 w-full flex-col gap-4">
            <div className="w-full flex justify-between">
              <div className="">
                <p className="font-poppins font-[700] md:text-[36px] ">
                  Trending Blogs
                </p>
              </div>
              <div className="">
                <p className="font-poppins font-[500] md:mr-16 mr-5 md:text-[16px]">
                  See all
                </p>
              </div>
            </div>
            <div className="mt-3 ml-3">
              <p className="text-[#4C4C4C] font-[500] text-[14px] leading-[20px]">
                By <span className="text-[#74B9FF]">John Doe</span> l March 12,
                2024
              </p>
            </div>
            <div className="md:w-[600px]">
              <p className="ml-3 font-poppins font-[600] text-[#232536] md:text-[32px] md:leading-[44px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </p>
            </div>
            <div className="bg-[#74b9FF] flex flex-col gap-3 md:w-[510px] h-[181px]">
              <div className="mt-3 ml-3">
                <p className="text-white font-[500] text-[14px] leading-[20px]">
                  By John Doe l March 12, 2024
                </p>
              </div>
              <div className="">
                <p className="ml-3 font-poppins text-white font-[600] md:text-[28px] text-[20px] md:leading-[44px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                </p>
              </div>
            </div>
            <div className="mt-3 ml-3">
              <p className="text-[#4C4C4C] font-[500] text-[14px] leading-[20px]">
                By <span className="text-[#74B9FF]">John Doe</span> l March 12,
                2024
              </p>
            </div>
            <div className="md:w-[500px]">
              <p className="ml-3 font-poppins font-[600] text-[#232536] md:text-[28px] md:leading-[44px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </p>
            </div>
            <div className="mt-3 ml-3">
              <p className="text-[#4C4C4C] font-[500] text-[14px] leading-[20px]">
                By <span className="text-[#74B9FF]">John Doe</span> l March 12,
                2024
              </p>
            </div>
            <div className="md:w-[500px]">
              <p className="ml-3 font-poppins font-[600] text-[#232536] md:text-[28px] md:leading-[44px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[90%] mx-auto mt-10 items-center">
        <div className="">
          <p className="font-poppins font-[700] md:text-[24px] text-[18px] text-[#232536]">
            New Technology
            <img
              className="h-[2px] md:inline-block hidden w-[40px] ml-10"
              src={lineplain}
              alt=""
            />
          </p>
        </div>
        <div className="">
          <p className="font-poppins font-[700] text-[14px] text-[#232536]">
            See All{" "}
          </p>
        </div>
      </div>
      <div className="w-[95%] flex flex-col gap-5 items-center mx-auto">
        <div className="element-causing-scrollbar flex flex-nowrap gap-10 overflow-x-auto">
          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="w-full">
                <img src={persondrive} alt="" />
              </div>
              <div className=" w-[248px]">
                <p className="text-[#2B2C34] font-[700] text-[18px] ">
                  A Review of Cars with Advanced Infotainment Systems
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <img src={takla} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-[600] text-[16px] ">Dasteen</p>
                  <p className="font-[400] text-[13px]">Jan 10, 2024</p>
                </div>
                <div className="font-[400] text-[13px] relative top-3">
                  . 3 min read
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="w-full">
                <img src={persondrive} alt="" />
              </div>
              <div className=" w-[248px]">
                <p className="text-[#2B2C34] font-[700] text-[18px] ">
                  A Review of Cars with Advanced Infotainment Systems
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <img src={takla} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-[600] text-[16px] ">Dasteen</p>
                  <p className="font-[400] text-[13px]">Jan 10, 2024</p>
                </div>
                <div className="font-[400] text-[13px] relative top-3">
                  . 3 min read
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="w-full">
                <img src={persondrive} alt="" />
              </div>
              <div className=" w-[248px]">
                <p className="text-[#2B2C34] font-[700] text-[18px] ">
                  A Review of Cars with Advanced Infotainment Systems
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <img src={takla} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-[600] text-[16px] ">Dasteen</p>
                  <p className="font-[400] text-[13px]">Jan 10, 2024</p>
                </div>
                <div className="font-[400] text-[13px] relative top-3">
                  . 3 min read
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="w-full">
                <img src={persondrive} alt="" />
              </div>
              <div className=" w-[248px]">
                <p className="text-[#2B2C34] font-[700] text-[18px] ">
                  A Review of Cars with Advanced Infotainment Systems
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <img src={takla} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-[600] text-[16px] ">Dasteen</p>
                  <p className="font-[400] text-[13px]">Jan 10, 2024</p>
                </div>
                <div className="font-[400] text-[13px] relative top-3">
                  . 3 min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-[#232536] " />

      <div className="flex justify-between w-[90%] mx-auto mt-10 items-center">
        <div className="">
          <p className="font-poppins font-[700] md:text-[24px] text-[18px] text-black">
            All Category
            <img
              className="h-[2px] md:inline-block hidden w-[40px] ml-10"
              src={lineplain}
              alt=""
            />
          </p>
        </div>
      </div>
      <div className="w-[95%] flex flex-col gap-5 items-center mx-auto">
        <div className="element-causing-scrollbar flex flex-nowrap gap-3 overflow-x-auto">
          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="flex justify-center w-full">
                <img src={carimage} alt="" />
              </div>
              <div className="flex justify-center">
                <p className="text-black font-[700] text-[18px] ">
                  Car Reviews
                </p>
              </div>
              <div className="flex w-[270px] items-center justify-between">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur. Urna dignissim ac
                  egeendrerit in.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="flex justify-center w-full">
                <img src={carimage} alt="" />
              </div>
              <div className="flex justify-center">
                <p className="text-black font-[700] text-[18px] ">
                  Car Reviews
                </p>
              </div>
              <div className="flex w-[270px] items-center justify-between">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur. Urna dignissim ac
                  egeendrerit in.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="flex justify-center w-full">
                <img src={carimage} alt="" />
              </div>
              <div className="flex justify-center">
                <p className="text-black font-[700] text-[18px] ">
                  Car Reviews
                </p>
              </div>
              <div className="flex w-[270px] items-center justify-between">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur. Urna dignissim ac
                  egeendrerit in.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="flex justify-center w-full">
                <img src={carimage} alt="" />
              </div>
              <div className="flex justify-center">
                <p className="text-black font-[700] text-[18px] ">
                  Car Reviews
                </p>
              </div>
              <div className="flex w-[270px] items-center justify-between">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur. Urna dignissim ac
                  egeendrerit in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#232536] hidden md:flex md:gap-0 gap-6 text-white p-16 mt-10 w-full ">
        <div className="md:w-[40%] flex items-center justify-center">
          <div className="flex gap-3 flex-col">
            <div className="md:w-[162px]">
              <p className="font-poppins font-[600] text-[16px]">
                TESTIMONIALs
              </p>
            </div>
            <div className="md:w-[320px]">
              <p className="font-poppins font-[700] md:text-[36px] md:leading-[50px] text-white">
                What people say about our blog
              </p>
            </div>
            <div className="w-[320px] ">
              <p className="font-poppins font-[400] text-[16px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex"><img src={fuline} alt="" /></div>
        <div className="md:w-[60%] flex items-center justify-center">
          <div className="flex flex-col gap-10">
            <div className="w-[432px] ml-10 ">
              <p className="font-poppins font-[700] md:text-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-full justify-around flex items-center">
              <div className="-ml-6">
                <img src={john} alt="" />
              </div>
              <div className="">
                <p>Jonathan Vallem</p>
                <p>New York</p>
                <p>USA</p>
              </div>
              <div className="">
                <img src={leftarrow} alt="" />
              </div>
              <div className="-mr-7">
                <img src={rightarrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[90%] mx-auto mt-10 items-center">
        <div className="">
          <p className="font-poppins font-[700] md:text-[24px] text-[18px] text-[#232536]">
            New Technology
            <img
              className="h-[2px] md:inline-block hidden w-[40px] ml-10"
              src={lineplain}
              alt=""
            />
          </p>
        </div>
        <div className="">
          <p className="font-poppins font-[700] text-[14px] text-[#232536]">
            See All{" "}
          </p>
        </div>
      </div>
      <div className="w-[95%] flex flex-col gap-5 items-center mx-auto">
        <div className="element-causing-scrollbar flex flex-nowrap gap-10 overflow-x-auto">
          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="w-full">
                <img src={persondrive} alt="" />
              </div>
              <div className=" w-[248px]">
                <p className="text-[#2B2C34] font-[700] text-[18px] ">
                  A Review of Cars with Advanced Infotainment Systems
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <img src={takla} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-[600] text-[16px] ">Dasteen</p>
                  <p className="font-[400] text-[13px]">Jan 10, 2024</p>
                </div>
                <div className="font-[400] text-[13px] relative top-3">
                  . 3 min read
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="w-full">
                <img src={persondrive} alt="" />
              </div>
              <div className=" w-[248px]">
                <p className="text-[#2B2C34] font-[700] text-[18px] ">
                  A Review of Cars with Advanced Infotainment Systems
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <img src={takla} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-[600] text-[16px] ">Dasteen</p>
                  <p className="font-[400] text-[13px]">Jan 10, 2024</p>
                </div>
                <div className="font-[400] text-[13px] relative top-3">
                  . 3 min read
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="w-full">
                <img src={persondrive} alt="" />
              </div>
              <div className=" w-[248px]">
                <p className="text-[#2B2C34] font-[700] text-[18px] ">
                  A Review of Cars with Advanced Infotainment Systems
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <img src={takla} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-[600] text-[16px] ">Dasteen</p>
                  <p className="font-[400] text-[13px]">Jan 10, 2024</p>
                </div>
                <div className="font-[400] text-[13px] relative top-3">
                  . 3 min read
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F0F8] rounded-[13px] p-4 w-fit flex-none">
            <div className="w-[95%] flex flex-col md:gap-4 gap-2  mx-auto">
              <div className="w-full">
                <img src={persondrive} alt="" />
              </div>
              <div className=" w-[248px]">
                <p className="text-[#2B2C34] font-[700] text-[18px] ">
                  A Review of Cars with Advanced Infotainment Systems
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <img src={takla} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-[600] text-[16px] ">Dasteen</p>
                  <p className="font-[400] text-[13px]">Jan 10, 2024</p>
                </div>
                <div className="font-[400] text-[13px] relative top-3">
                  . 3 min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
