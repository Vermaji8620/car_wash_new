import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import frame from "../assets/Frame.png";
import mainlogo from "../assets/mainlogo.png";

const Header = () => {
  return (
    <>
      <div className="sm:flex hidden absolute z-40 justify-around items-center w-[1257px] h-[76px] overflow-hidden bg-[#74B9FF] rounded-[50px] mt-6 ml-32">
        <Link to={"/"}>
          <img className="w-[232px] h-[88px]" src={mainlogo} alt="" />
        </Link>
        <Link
          to={"/"}
          className={`font-poppin h-[30px] w-[60px] font-[400] leading-[30px]`}
        >
          Home
        </Link>

        <Link
          to={"/about"}
          className="font-poppin h-[30px] w-[90px] font-[400] leading-[30px]"
        >
          About Us
        </Link>

        <Link
          to={"/services"}
          className="font-poppin h-[30px] w-[83px] font-[400] leading-[30px]"
        >
          Services
        </Link>

        <Link
          to={"/contactus"}
          className="font-poppin h-[30px] w-[111px] font-[400] leading-[30px]"
        >
          Contact Us
        </Link>

        <Link
          to={"/"}
          className="w-[136px] justify-center gap-3 flex items-center  h-[47px] bg-white rounded-[10px]"
        >
          <img src={frame} className="w-[17px] h-[17px]" alt="" />
          <p className="w-[47px] h-[24px] font-poppin font-[400] leading-[24px]">
            Log In
          </p>
        </Link>
      </div>
      <div className="flex  justify-between w-[100vw] sm:hidden -mb-16 h-[10vh]  bg-blue-500">
        <div className="flex items-start">
          <IoMenu className="text-[40px] mt-2" />
          <img src={mainlogo} className="-mt-8" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
