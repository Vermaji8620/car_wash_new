import { useState } from "react";

const NinethHome = () => {
  const [dispornot, setDispornot] = useState({
    first: "hidden",
    second: "hidden",
    third: "hidden",
    fourth: "hidden",
    fifth: "hidden",
  });
  const [upordown, setUpordown] = useState("rotate-90");
  const setdispfunc = (e) => {
    const classNamee = e.target.className.split(" ")[3];
    setDispornot((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = "hidden";
        return acc;
      }, {});
      setUpordown(upordown === "rotate-0" ? "rotate-180" : "rotate-0");
      newState[classNamee] =
        prevState[classNamee] === "hidden" ? "inline-block" : "hidden";

      return newState;
    });
  };
  return (
    <div className="sm:flex-row flex-col nineth_section z-50 bg-black pb-14 text-white pt-12 sm:mt-24 mt-6 justify-around gap-4 flex sm:pl-20 pl-5">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between font-[700] text-[16px] leading-[24px]">
          <p>ABOUT US</p>
          <p
            className={`mr-10 sm:hidden ${upordown} first`}
            onClick={setdispfunc}
          >
            &gt;
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
            className={`mr-10 sm:hidden ${upordown} second`}
            onClick={setdispfunc}
          >
            &gt;
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
            className={`mr-10 sm:hidden ${upordown} third`}
            onClick={setdispfunc}
          >
            &gt;
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
            className={`mr-10 sm:hidden ${upordown} fourth`}
            onClick={setdispfunc}
          >
            &gt;
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
            className={`mr-10 sm:hidden ${upordown} fifth`}
            onClick={setdispfunc}
          >
            &gt;
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
