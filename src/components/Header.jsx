import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import frame from "../assets/Frame.png";
import newlogo from "../assets/newlogo.png";

const Header = () => {
  return (
    <div className="flex justify-between sm:p-2 sm:-mb-0 -mb-16 sm:-mt-5 relative overflow-hidden">
      {/* from here is desktop view */}
      <div className="sm:flex w-[100px] hidden sm:translate-y-3 sm:translate-x-10">
        <img src={newlogo} alt="" />
      </div>
      <div className="sm:flex hidden absolute z-40 justify-around right-0 items-center w-[857px] h-[76px] overflow-hidden bg-[#74B9FF] rounded-[50px] mt-6 mr-14 ">
        {/* <Link to={"/"}>
          <img className="w-[232px] h-[88px]" src={mainlogo} alt="" />
        </Link> */}
        <Link
          to={"/"}
          className={`font-poppin h-[30px] w-[60px] font-[600] leading-[30px] `}
        >
          Home
        </Link>

        <Link
          to={"/about"}
          className="font-poppin h-[30px] w-[90px] font-[600] leading-[30px] "
        >
          About Us
        </Link>

        <Link
          to={"/services"}
          className="font-poppin h-[30px] w-[83px] font-[600] leading-[30px] "
        >
          Services
        </Link>

        <Link
          to={"/contactus"}
          className="font-poppin h-[30px] w-[111px] font-[600] leading-[30px] "
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
      {/* to here is desktop view*/}

      {/* <div className="flex justify-between w-[100vw] sm:hidden -mb-16 h-[10vh] bg-blue-500">
        <div className="flex items-center">
          <IoMenu className="text-[40px] mt-2" />
          <div className="w-[100px] h-[100px] sm:translate-y-3 sm:translate-x-10">
            <img src={newlogo} alt="" />
          </div>
        </div>
      </div> */}

      <div className="w-[100%] sm:hidden justify-between flex h-[50px] mb-20">
        <IoMenu className="text-[50px]" />
        <Link to="/">
          <img src={newlogo} style={{ width: "100%", height: "100%" }} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
