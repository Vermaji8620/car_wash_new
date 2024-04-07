// Card.jsx
import smallcar from "../assets/smallcar.png";
import star from "../assets/starr.png";
import telephone from "../assets/telephone.png";

const Card = () => {
  return (
    <div className="sticky top-36 z-20 bg-white rounded-[20px] -mt-[630px] border-[6px] border-[#74B9FF] p-8 w-[500px] ml-[990px] ">
      <div className="mx-auto gap-3 flex flex-col">
        <div className="w-[402px] h-[114px]">
          <p className="font-poppins font-[700] text-[37px] leading-[55.5px]">
            Experience The Best Car Services In Surat
          </p>
        </div>
        <div className="w-[396px] h-[87px]">
          <p className="font-poppins font-[400] text-[30px] leading-[43.5px] text-[#424242]">
            Get Instant Quotes for Your Car Service
          </p>
        </div>
        <div className="flex w-[400px] items-center rounded-[10px] border-[#000000] border-[1px] h-[67px]">
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
        <div className="border-[#000000] items-center pl-4 gap-3 w-[400px] h-[67px] rounded-[10px] flex border-[1px]">
          <img src={telephone} alt="" className="w-[30px] h-[30px]" />
          <div className="w-[118px] h-[30px]">
            <p className="font-poppins font-[400] text-[19px] leading-[28.5px] ">
              91047 93373{" "}
            </p>
          </div>
        </div>
        <div className="w-[400px] h-[68px] rounded-[10px] bg-[#74B9FF] items-center flex justify-center">
          <div className="w-[235px] h-[30px] flex items-center">
            <p className="text-white font-poppins font-[600] text-[19px] leading-[28.5px]">
              CHECK PRICES FOR FREE
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mr-5">
          <div className="w-[176px] rounded-[20px] gap-3 flex flex-col shadow-md border-[1px] text-center h-[86px]">
            <div className="flex justify-center items-center">
              <img src={star} className="w-[22.5px] h-[22.5px]" alt="" />
              <p>4.7/5</p>
            </div>
            <p>Based On 150000+ Reviews</p>
          </div>
          <div className="w-[176px] h-[86px] rounded-[20px] flex flex-col items-center justify-center shadow-md">
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
