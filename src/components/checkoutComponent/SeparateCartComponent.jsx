// import logo from "../assets/pexels-photo-112460-removebg-preview.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import disc from "../../assets/disc.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EachCartSection from "./EachCartComponent";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import personcarwash from "../../assets/personcarwash.png";
import percen from "../../assets/setpercen.png";

const SeparateCartComponent = ({ onButtonClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegments = pathSegments.pop() || pathSegments.pop();
  const selector = useSelector((state) => state.counter);
  const [errorshow, setErrorshow] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setErrorshow("");
    }, 2500);
  }, [errorshow]);

  return (
    <div className="rounded-2xl relative pb-10 md:w-[80%] md:top-10 md:h-min flex shadow-2xl flex-col bg-white shadow-black gap-3 items-center">
      {/* <div>
        <img className="w-[50%] mx-auto" src={logo} alt="" />
      </div> */}
      <div className="flex justify-between gap-8 w-[90%]">
        <p className="font-[600] md:text-[32px] text-xl pt-4 leading-[48px]">
          CART
        </p>
      </div>

      <div className="flex bg-[#E2FFE3] rounded-[10px] p-4 justify-between gap-8 w-[90%]">
        <div className="md:w-[65%] overflow-hidden">
          <p className="font-poppins text-[#309534] font-[600] text-[18px] leading-[28px]">
            You can Save ₹ 1268
          </p>
          <p className="font-poppins text-[#309534] font-[400] text-[15px] leading-[22.5px]">
            With Miles Membership
          </p>
        </div>
        <div className="md:w-[35%] flex justify-end h-[32px] ">
          <img src={percen} alt="" />
        </div>
      </div>

      {/* ************************************** */}
      <div className="w-[90%] border rounded-[20px] border-blue-800">
        {selector.items.length > 0 &&
          selector.items.map((element, index) => (
            <div key={index}>
              <EachCartSection
                index={index}
                desc={element.description}
                price={element.price}
                strikePrice={element.strikePrice}
              />
            </div>
          ))}
      </div>
      {/* <div className="h-[50px]"></div> */}
      {/* **************************************** */}

      {/* <p className="w-[90%] -mt-3 mx-auto">Extra Charges may apply</p> */}
      <button className="w-[90%] rounded-[10px] items-center p-3 border flex justify-between border-dotted border-gray-400">
        <div className="flex gap-2 items-center">
          <div className="text-blue-400 text-4xl">
            <img src={disc} alt="" />
          </div>
          <p className="font-bold">Apply Coupon</p>
        </div>
        <MdOutlineKeyboardArrowRight className="text-2xl" />
      </button>

      <div className="w-[90%] pt-2 pb-2 gap-3 flex flex-col ">
        <p className="font-poppins text-[18px] font-[600] leading-[27px]">
          Recommended Services
        </p>
      </div>

      <div className="w-[90%] overflow-hidden gap-6 items-center flex justify-between">
        <div className="w-[56px] flex items-center justify-center font-bold h-[36px] rounded-[5px] border-[1.5px] border-[#74B9FF]">
          &lt;
        </div>

        <div className="flex border-[2px] md:p-4 p-2  border-black gap-4 rounded-[10px] flex-col">
          <div className="flex">
            <div className="">
              <p className="font-poppins font-[600] text-[15px] leading-[22.5px]">
                AC Filter
              </p>
              <p className="font-poppins font-[500] text-[15px] leading-[22.5px] text-[#878787]">
                30% Improvement in Car Breathing Air Quality
              </p>
            </div>
            <div className="md:inline-block hidden">
              <img className="w-[69px] h-[69px]" src={personcarwash} alt="" />
            </div>
          </div>
          <div className="flex gap-6">
            <strike className="font-poppins font-[500] text-[13px] leading-[20px] text-[#878787]">
              ₹ 1233
            </strike>
            <p className="font-poppins font-[500] text-[15px] leading-[22.5px]">
              ₹ 949
            </p>
          </div>
        </div>

        <div className="w-[56px] flex items-center justify-center font-bold h-[36px] rounded-[5px] border-[1.5px] border-[#74B9FF]">
          &gt;
        </div>
      </div>

      <div className="w-[90%] font-poppins font-[600] text-[18px] mt-3 leading-[27px]">
        Bill Details
      </div>

      <div className="w-[90%] text-black  flex justify-between">
        <p className="overflow-hidden font-bold text-xl">Subtotal</p>
        <p className="font-bold flex items-center">
          <FaRupeeSign />
          {selector.grandtotal}
        </p>
      </div>

      <div className="w-[90%] text-black flex  justify-between">
        <p className="font-bold text-[15px]">18% GST</p>
        <p className="font-bold flex items-center">
          <FaRupeeSign />
          {Math.round(selector.grandtotal * 0.18)}
        </p>
      </div>

      <button
        className={`p-3 text-white font-bold justify-between ${
          lastSegments !== "services" ? "hidden" : "inline-block"
        } rounded-lg  flex w-[90%] bg-[#60A5FA]`}
        onClick={() => {
          if (selector.items.length === 0) {
            setErrorshow("NO ITEMS IN CART");
            return;
          }
          navigate("/checkout");
        }}
      >
        <div className="flex items-center">
          <FaRupeeSign />
          {selector.grandtotal + Math.round(selector.grandtotal * 0.18)}
        </div>
        <div className="">CHECKOUT</div>
      </button>

      <button
        className={`p-3 text-white font-bold justify-between ${
          lastSegments !== "checkout" ? "hidden" : "inline-block"
        } rounded-lg flex flex-row-reverse w-[90%] bg-[#60A5FA]`}
        onClick={() => {
          onButtonClick();
        }}
      >
        <div className="flex items-center">
          <FaRupeeSign />
          {selector.grandtotal + Math.round(selector.grandtotal * 0.18)}
        </div>
        <div className="">Pay Now</div>
      </button>
      <p className="text-red-600 font-bold text-start w-[90%]">{errorshow} </p>
    </div>
  );
};

SeparateCartComponent.propTypes = {
  onButtonClick: PropTypes.func,
};

export default SeparateCartComponent;
