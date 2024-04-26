import telephone from "../assets/telephone.png";
import fullpersoncarwash from "../assets/fullpersoncarwash.png";
import newlogo from "../assets/newlogo.png";
import { useEffect, useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const [phno, setPhno] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 2000);
  }, [error]);
  return (
    <div className="flex justify-between w-full mt-28 items-center">
      <div className="w-1/2 md:flex  hidden">
        <img src={fullpersoncarwash} className="w-[674px] h-[538px] " alt="" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (phno === "" || !/^[6-9]\d{9}$/.test(phno)) {
            setError("Enter Valid Input");
            return;
          }
          console.log(phno);
        }}
        className="w-[90%] md:-mt-12 mx-auto md:w-1/2"
      >
        <div className="flex flex-col items-center gap-3 justify-center">
          <div className="">
            <img
              className="md:w-[312px] w-[212px] md:h-[316px] h-[216px]"
              src={newlogo}
              alt=""
            />
          </div>
          <div className="md:w-[540px] ">
            <p className="font-[400] md:text-center md:text-[40px] text-center text-[28px]">
              Dont just imagine paradise, Experience it!
            </p>
          </div>
          <div className="md:w-[391.78px] md:h-[41px] ">
            <p className="font-poppins font-[300] md:text-[18px] leading-[41px]">
              We will help you plan your dream escape.
            </p>
          </div>
          <div className="text-red-600">{error}</div>
          <div className="flex md:w-[60%] w-full items-center gap-2 mx-auto">
            <img
              src={telephone}
              alt=""
              className="md:w-[30px] w-[25px] md:h-[30px]"
            />
            <div className="flex items-center">
              <p className="md:text-[20px] text-gray-700">+91</p>
            </div>
            <div className="md:h-[30px] w-[84%]">
              <p className="font-poppins font-[400] sm:text-[19px] leading-[28.5px] ">
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  required
                  style={{ outline: "none" }}
                  className="w-full"
                  placeholder="Enter phone number"
                  value={phno}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!isNaN(val) && /^\d{0,10}$/.test(val)) {
                      setPhno(val);
                    }
                  }}
                />
              </p>
            </div>
          </div>
          <button className="sm:w-[400px] sm:h-[58px] h-[50px] rounded-[10px] bg-[#74B9FF] items-center flex w-full justify-center">
            <div className="w-[235px] sm:h-[30px]">
              <p className="text-white font-poppins text-[15px] sm:translate-x-0 font-[600] sm:text-[19px] leading-[28.5px]">
                SEND OTP
              </p>
            </div>
          </button>
          <div className="w-[480px] flex items-center justify-center">
            <p>
              Dont have an account?
              <span className="text-[#74B9FF] ">Sign up!</span>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
