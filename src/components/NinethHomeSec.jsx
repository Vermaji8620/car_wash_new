import { useState } from "react";

const NinethHome = () => {
  const [dispornot, setDispornot] = useState({
    first: "hidden",
    second: "hidden",
    third: "hidden",
    fourth: "hidden",
    fifth: "hidden",
  });

  const [upordown, setUpordown] = useState({
    first: "rotate-180",
    second: "rotate-180",
    third: "rotate-180",
    fourth: "rotate-180",
    fifth: "rotate-180",
  });
  const setdispfunc = (e) => {
    // Object.keys(prevState) gets an array of the keys from the prevState object.

    // .reduce((acc, key) => { ... }, {}) is called on this array. The reduce method takes a reducer function and an initial value as arguments. In this case, the initial value is an empty object {}.

    // The reducer function takes an accumulator acc and the current value key as arguments. The accumulator is the value returned by the previous execution of the reducer function, or the initial value if it's the first execution.

    // Inside the reducer function, acc[key] = "hidden"; sets the property with the name key in the acc object to the string "hidden".

    // return acc; returns the acc object, which will be used as the accumulator in the next execution of the reducer function.
    const classNamee = e.target.className.split(" ")[3];
    setDispornot((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = "hidden";
        return acc;
      }, {});
      newState[classNamee] =
        prevState[classNamee] === "hidden" ? "inline-block" : "hidden";
      return newState;
    });
    setUpordown((prevSetUporDown) => {
      // acc will initially be an object that is going to store the initial value of the object that is being passed into it , which in this case is (nothing inside an object).

      const newUporDown = Object.keys(prevSetUporDown).reduce((acc, key) => {
        acc[key] = "rotate-180";
        return acc;
      }, {});

      newUporDown[classNamee] =
        upordown[classNamee] === "rotate-0" ? "rotate-180" : "rotate-0";
      return newUporDown;
    });
  };

  return (
    <div className="sm:flex-row flex-col nineth_section z-50 bg-black pb-14 text-white pt-12 sm:mt-24 mt-6 justify-around gap-4 flex sm:pl-20 pl-5">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between font-[700] text-[16px] leading-[24px]">
          <p>ABOUT US</p>
          <p
            className={`mr-10 sm:hidden ${upordown.first} first`}
            onClick={setdispfunc}
          >
            ^
          </p>
        </div>
        <div className={`sm:inline-block ${dispornot.first}`}>
          <span className="uppercase font-[500] text-[15px] leading-[23px]">
            FAQs
          </span>
          <br />
          Contacts Us <br />
          Terms and Conditions <br />
          Privacy Policy <br />
          GoMachanic Partners <br />
          Workshop Locator <br />
          Offers <br />
          Reviews <br />
          Directory
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <div className="flex justify-between font-[700] text-[16px] leading-[24px] ">
          OUR SERVICES
          <p
            className={`mr-10 sm:hidden ${upordown.second} second`}
            onClick={setdispfunc}
          >
            ^
          </p>
        </div>
        <div className={`sm:inline-block ${dispornot.second}`}>
          Scheduled Services <br />
          AC Services <br />
          Cleaning & Detailling <br /> Lights & Fitments <br />
          Denting Painting <br />
          Insurance Services <br />
          Custom Repair <br /> Batteries <br /> Tyres <br />
          Detailing Services <br /> Windshields & Glass
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <div className="flex justify-between font-[700] text-[16px] leading-[24px]">
          LUXURY BRANDS
          <p
            className={`mr-10 sm:hidden ${upordown.third} third`}
            onClick={setdispfunc}
          >
            ^
          </p>
        </div>
        <div className={`sm:inline-block ${dispornot.third}`}>
          Mercedes
          <br />
          BMW <br />
          Audi <br />
          Volvo <br />
          Mitsubishi <br />
          Jaguar <br />
          Porsche <br />
          Rolls Royce <br />
          Ferrari <br />
          Land Rover
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <div className="flex justify-between font-[700] text-[16px] leading-[24px] ">
          POPULAR BRANDS
          <p
            className={`mr-10 sm:hidden ${upordown.fourth} fourth`}
            onClick={setdispfunc}
          >
            ^
          </p>
        </div>
        <div className={`sm:inline-block ${dispornot.fourth}`}>
          Maruti Suzuki <br />
          Hyundai <br />
          Honda <br />
          Toyota <br />
          Tata <br />
          Mahindra <br />
          Chevrolet <br />
          Fiat <br />
          Renault <br />
          Kia <br />
          Skoda <br />
          Volkswagen <br />
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <div className=" flex justify-between font-[700] text-[16px] leading-[24px] ">
          POPULAR AREAS NEAR YOU
          <p
            className={`mr-10 sm:hidden ${upordown.fifth} fifth`}
            onClick={setdispfunc}
          >
            ^
          </p>
        </div>
        <div className={`sm:inline-block ${dispornot.fifth}`}>
          Garafe near me in Electronic City <br />
          Garafe near me in Electronic Whitefield <br />
          Garafe near me in Electronic Indiranagar <br />
          Garafe near me in Electronic Vijaynagar <br />
          Garafe near me in Electronic HSR Layout
        </div>
      </div>
    </div>
  );
};

export default NinethHome;
