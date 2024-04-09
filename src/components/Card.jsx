// Card.jsx
import smallcar from "../assets/smallcar.png";
import star from "../assets/starr.png";
import telephone from "../assets/telephone.png";
import line from "../assets/line.png";

const Card = () => {
  return (
    <div className="sm:sticky relative sm:top-56 top-[54rem] z-20 bg-white rounded-[20px] border-[1px] border-[#74B9FF] sm:-mt-[690px] -mt-[500px] sm:mb-0 mb-16 flex items-center w-full mx-auto p-8 sm:w-[500px] sm:ml-[980px] ">
      <div className="mx-auto gap-3 flex flex-col">
        <div className="sm:w-[402px] h-[114px]">
          <p className="font-poppins sm:text-start text-center font-[700] sm:text-[37px] text-[24px] sm:leading-[55.5px]">
            Experience The Best Car Services In Surat
          </p>
        </div>
        <div className="sm:w-[396px] sm:-mt-0 -mt-9 h-[87px]">
          <p className="font-poppins font-[400] sm:text-[30px] text-[18px] sm:leading-[43.5px] text-[#424242]">
            Get Instant Quotes for Your Car Service
          </p>
        </div>
        <div className="flex sm:-mt-0 -mt-8 sm:w-[400px] items-center rounded-[10px] border-[#000000] border-[1px] sm:h-[67px] h-[55px]">
          <img src={smallcar} alt="" className="w-[46px] h-[46px]" />
          <select name="" id="" className="border-none flex w-[235px] h-[30px]">
            <option
              value="Maruti Suzuki Swift, CNG"
              className="font-[400] text-[19px] leading-[28.5] text-[#424242]"
            >
              Maruti Suzuki Swift, CNG
            </option>
          </select>
        </div>
        <div className="border-[#000000] items-center pl-4 gap-3 sm:w-[400px] sm:h-[67px] h-[50px] rounded-[10px] flex border-[1px]">
          <img src={telephone} alt="" className="w-[30px] h-[30px]" />
          <div className="w-[118px] h-[30px]">
            <p className="font-poppins font-[400] sm:text-[19px] leading-[28.5px] ">
              91047 93373
            </p>
          </div>
        </div>
        <div className="sm:w-[400px] sm:h-[58px] h-[50px] rounded-[10px] bg-[#74B9FF] items-center flex justify-center">
          <div className="w-[235px] sm:h-[30px]">
            <p className="text-white font-poppins text-[15px] sm:translate-x-0 translate-x-6 font-[600] sm:text-[19px] leading-[28.5px]">
              CHECK PRICES FOR FREE
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mr-5">
          <div className="w-[176px] rounded-[20px] sm:gap-3 gap-1 flex flex-col sm:shadow-md text-center mt-3 h-[86px]">
            <div className="flex justify-center items-center">
              <img src={star} className="w-[22.5px] h-[22.5px]" alt="" />
              <p className="">4.7/5</p>
            </div>
            <p className="text-[12px] font-[600]">Based On 150000+ <br />Reviews</p>
          </div>
          <div className="border border-green-500 -mt-12 -mb-14 sm:hidden ml-6">
            <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
          </div>
          <div className="w-[176px] h-[86px] rounded-[20px] flex flex-col items-center justify-center sm:shadow-md">
            <div className="w-[84px] h-[26px] ">
              <p className="font-poppins font-[600] text-[17px] leading-[25.5px] text-[#309534]">
                2,70,000+
              </p>
            </div>
            <div className="w-[95px] h-[40px]">
              <p className="text-center font-poppins font-[600] text-[12px] leading-[18px] ">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
