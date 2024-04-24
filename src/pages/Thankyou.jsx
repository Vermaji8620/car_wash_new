import people from "../assets/people.png";
import allsocials from "../assets/allsocials.png";
import NinethHome from "../components/NinethHomeSec";
import TenthHomeSec from "../components/TenthHomeSec";

const Thankyou = () => {
  return (
    <div className="border-[2px] border-red-300">
      <div className="flex md:mt-32 items-center justify-center">
        <img src={people} className="w-[563px] h-[393px]" alt="" />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="md:w-[1073px] mx-auto md:h-[108px]">
          <p className="font-poppins font-[700] sm:text-[72px] text-[20px] leading-[108px] ">
            Thank you for Contacting us!
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <div className="md:w-[1129px] mx-auto md:h-[78px]">
          <p className="text-center flex flex-wrap font-poppins font-[400] text-[17px] leading-[25.5px] ">
            Lorem is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummytext ever since the
            1500s Lorem Ipsums simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={allsocials} className="w-[322px] h-[242px]" alt="" />
      </div>
      <NinethHome />
      <TenthHomeSec />
    </div>
  );
};

export default Thankyou;
