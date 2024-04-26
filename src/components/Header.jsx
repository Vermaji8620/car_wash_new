import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import newlogo from "../assets/newlogo.png";
import { useEffect, useState } from "react";
import LoginProfile from "../assets/loginprofile.png";

const Header = () => {
  const path = location.pathname;
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) {
      Array.from(document.querySelectorAll("*")).forEach(
        (ele) => (ele.style.overflowY = "hidden")
      );
    } else {
      Array.from(document.querySelectorAll("*")).forEach(
        (ele) => (ele.style.overflowY = "auto")
      );
    }
  }, [showMenu]);
  return (
    <div className="flex flex-col justify-between sm:p-2 sm:-mb-3 -mb-28 sm:-mt-5 relative overflow-hidden">
      {/* from here is desktop view */}
      <Link to={"/"}
        className={`sm:${
          path === "/login" ? "hidden" : "flex"
        } w-[150px] hidden sm:translate-y-1 sm:translate-x-10`}
      >
        <img src={newlogo} alt="" />
      </Link>
      <div
        className={`sm:${
          path === "/login" ? "hidden" : "flex"
        } hidden absolute z-40 justify-around right-0 items-center w-[857px] h-[76px] overflow-hidden bg-[#74B9FF] rounded-[50px] mt-12 mr-14 sm:inline-block`}
      >
        {/* <Link to={"/"}>
          <img className="w-[232px] h-[88px]" src={mainlogo} alt="" />
        </Link> */}
        <Link
          to={"/"}
          className={`font-poppins text-white h-[30px] w-[60px] font-[600] leading-[30px] `}
        >
          Home
        </Link>

        <Link
          to={"/about"}
          className="font-poppins text-white h-[30px] w-[90px] font-[600] leading-[30px] "
        >
          About Us
        </Link>

        <Link
          to={"/services"}
          className="font-poppins text-white h-[30px] w-[83px] font-[600] leading-[30px] "
        >
          Services
        </Link>

        <Link
          to={"/contact"}
          className="font-poppins text-white h-[30px] w-[111px] font-[600] leading-[30px] "
        >
          Contact Us
        </Link>

        <Link
          to={"/login"}
          className="w-[136px] justify-center gap-3 flex items-center h-[47px] bg-white rounded-[10px]"
        >
          <img src={LoginProfile} className="w-[25px]" alt="" />
          <p className="w-[47px] text-[#74B9FF] font-poppin font-[600] leading-[24px]">
            Log In
          </p>
        </Link>
      </div>
      {/* to here is desktop view*/}

      {/* below one is for the checkout page */}
      {/* <div
        className={`sm:flex hidden absolute z-40 justify-around right-0 items-center w-[857px] h-[76px] overflow-hidden bg-[#74B9FF] rounded-[50px] mt-6 mr-14 ${
          location.pathname === "/checkout" ? "sm:inline-block" : "sm:hidden"
        }`}
      >
        <div className="w-[278px] h-[48px] ">
          <p className="font-poppins font-[600] text-[28px] leading-[48px]">
            Secure Checkout
          </p>
        </div>
      </div> */}
      {/* above one is for the checkout page */}

      {/* <div className="flex justify-between w-[100vw] sm:hidden -mb-16 h-[10vh] bg-blue-500">
        <div className="flex items-center">
          <IoMenu className="text-[40px] mt-2" />
          <div className="w-[100px] h-[100px] sm:translate-y-3 sm:translate-x-10">
            <img src={newlogo} alt="" />
          </div>
        </div>
      </div> */}

      {/* below all for mobile device */}

      <div
        className={`w-[100%] md:hidden shadow-xl justify-between ${
          path === "/login" ? "hidden" : "flex"
        } mb-28 ${showMenu ? "hidden" : "flex"}`}
      >
        <div className="flex justify-between overflow-hidden relative">
          <RiMenu2Line
            className="w-[30px] text-[#74B9FF] h-[50px] ml-2 mt-1"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
          <Link to="/">
            <img src={newlogo} style={{ width: "60px" }} alt="" />
          </Link>
        </div>

        <div className="bg-gray-200 flex gap-1 mr-4 h-[25px] mt-5 pl-4 pr-4 rounded-lg">
          Guwahati <p className="rotate-90">&gt;</p>
        </div>
      </div>

      <div
        className={`md:hidden  ${
          showMenu ? "w-[70%] h-fit mb-32 slide show" : "w-0 slide h-0"
        } flex flex-col gap-4 p-3`}
        // } items-start justify-center pb-28 pl-20 -mt-20 gap-3 flex flex-col `}
      >
        <div className=" flex justify-between items-center">
          <div className="flex gap-5">
            <img
              src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/LoginPage/DFA77A81-6B01-4189-939B-BF3664F6836C.svg"
              alt=""
            />
            <div>Sign In</div>
          </div>
          <div>
            <img
              src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/LoginPage/AE06F0CE-9D71-4A10-BE38-38C5AA880DE7.svg"
              alt=""
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </div>
        </div>
        <hr />
        {/* niche wala kholne jadi bolega to khol denge */}
        <div className="flex flex-col gap-3 text-gray-700">
          <div>
            <Link to={"/"} onClick={() => setShowMenu(!showMenu)}>
              Home
            </Link>
          </div>
          <hr />
          <div>
            <Link to={"/about"} onClick={() => setShowMenu(!showMenu)}>
              About
            </Link>
          </div>
          <hr />
          <div>
            <Link to={"/services"} onClick={() => setShowMenu(!showMenu)}>
              Services
            </Link>
          </div>
          <hr />
          <div>
            <Link to={"/contact"} onClick={() => setShowMenu(!showMenu)}>
              Contact Us
            </Link>
          </div>
          <hr />
          <div>
            <div>My Orders</div>
          </div>
          <hr />
          <div>
            <div>My Profile</div>
          </div>
          <hr />
          <div>
            <div>WashMarket Money</div>
          </div>
          <hr />
          <div>
            <div>Health Card</div>
          </div>
          <hr />
          <div>
            <div>My Cars</div>
          </div>
          <hr />
          <div>
            <div>Manage Addresses</div>
          </div>
          <hr />
          <div>
            <div>Logout</div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Header;
