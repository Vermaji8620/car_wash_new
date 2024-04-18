import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import frame from "../assets/Frame.png";
import newlogo from "../assets/newlogo.png";

const Header = () => {
  return (
    <div className="flex justify-between sm:p-2 sm:-mb-3 -mb-16 sm:-mt-5 relative overflow-hidden">
      {/* from here is desktop view */}

      <div className="sm:flex w-[120px] hidden sm:translate-y-3 sm:translate-x-10">
        <img src={newlogo} alt="" />
      </div>
      <div
        className={`sm:flex hidden absolute z-40 justify-around right-0 items-center w-[857px] h-[76px] overflow-hidden bg-[#74B9FF] rounded-[50px] mt-6 mr-14 ${
          location.pathname === "/checkout" ? "sm:hidden" : "sm:inline-block"
        }`}
      >
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
          to={"/contact"}
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

      <div
        className={`sm:flex hidden absolute z-40 justify-around right-0 items-center w-[857px] h-[76px] overflow-hidden bg-[#74B9FF] rounded-[50px] mt-6 mr-14 ${
          location.pathname === "/checkout" ? "sm:inline-block" : "sm:hidden"
        }`}
      >
        <div className="w-[278px] h-[48px] ">
          <p className="font-poppins font-[600] text-[28px] leading-[48px]">
            Secure Checkout
          </p>
        </div>
      </div>

      {/* <div className="flex justify-between w-[100vw] sm:hidden -mb-16 h-[10vh] bg-blue-500">
        <div className="flex items-center">
          <IoMenu className="text-[40px] mt-2" />
          <div className="w-[100px] h-[100px] sm:translate-y-3 sm:translate-x-10">
            <img src={newlogo} alt="" />
          </div>
        </div>
      </div> */}

      <div className="w-[100%] sm:hidden justify-between flex h-[65px] mb-20">
        <div className="flex justify-between">
          <IoMenu className="text-[50px] mt-3 text-[#74B9FF]" />
          <Link to="/">
            <img
              src={newlogo}
              style={{ width: "100%", height: "100%", paddingLeft: "20px" }}
              alt=""
            />
          </Link>
        </div>
        <div className="bg-gray-200 flex gap-1 mr-4 h-[25px] mt-6 pl-4 pr-4 rounded-lg">
          Guwahati <p className="rotate-90">&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
