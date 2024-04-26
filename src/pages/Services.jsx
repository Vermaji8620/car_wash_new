import blue from "../assets/blueline.png";
import EachCardOfService from "../components/serviceComponent/EachCardOfService";
import personcarwash from "../assets/personcarwash.png";
import { FaArrowRight } from "react-icons/fa";
import ServiceCard from "../components/serviceComponent/ServiceCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Services = () => {
  const selector = useSelector((state) => state.counter);
  const arrr = [
    {
      imgLink: personcarwash,
      title: "Standard Service1",
      desc1: "1000 Kms or 1 Month Warranty1",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)1",
      strikePrice: 5141,
      price: 3599,
    },
    {
      imgLink: personcarwash,
      title: "Standard Service2",
      desc1: "1000 Kms or 1 Month Warranty2",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)2",
      strikePrice: 5141,
      price: 3599,
    },
    {
      imgLink: personcarwash,
      title: "Standard Service3",
      desc1: "1000 Kms or 1 Month Warranty3",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)3",
      strikePrice: 5141,
      price: 3599,
    },
    {
      imgLink: personcarwash,
      title: "Standard Service4",
      desc1: "1000 Kms or 1 Month Warranty4",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)4",
      strikePrice: 5141,
      price: 3599,
    },
    {
      imgLink: personcarwash,
      title: "Standard Service5",
      desc1: "1000 Kms or 1 Month Warranty5",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)5",
      strikePrice: 5141,
      price: 3599,
    },
    {
      imgLink: personcarwash,
      title: "Standard Service6",
      desc1: "1000 Kms or 1 Month Warranty6",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)6",
      strikePrice: 5141,
      price: 3599,
    },
    {
      imgLink: personcarwash,
      title: "Standard Service7",
      desc1: "1000 Kms or 1 Month Warranty7",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)7",
      strikePrice: 5141,
      price: 3599,
    },
    {
      imgLink: personcarwash,
      title: "Standard Service8",
      desc1: "1000 Kms or 1 Month Warranty8",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)8",
      strikePrice: 5141,
      price: 3599,
    },
    {
      imgLink: personcarwash,
      title: "Standard Service9",
      desc1: "1000 Kms or 1 Month Warranty9",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)9",
      strikePrice: 5141,
      price: 3599,
    },
    {
      imgLink: personcarwash,
      title: "Standard Service10",
      desc1: "1000 Kms or 1 Month Warranty10",
      desc2: "Every 10,000 Kms or 6 Months (Recommended)10",
      strikePrice: 5141,
      price: 3599,
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#F6F6F6] h-full sm:-mt-0">
      <div className="w-full sm:relative h-[100vh] sm:-mt-0 -mt-16 sm:mb-0 mb-11 element-causing-scrollbar">
        <ServiceCard />
        <div className="flex flex-col w-full sm:w-[60%] mx-auto sm:ml-10 sm:mt-2 mt-16 sm:p-3 p-1">
          <div className="w-[100%] sm:gap-0 gap-16 flex overflow-x-auto shadow-lg justify-around sm:p-3 p-4 rounded-[10px] border-[1px] font-[600] text-[13px] leading-[20px] font-poppins border-[#74B9FF] flex-nowrap">
            <div className="flex items-center flex-none -mr-8 flex-col gap-1 ">
              <div>
                <p>Periodic Services</p>
                <p>
                  <img src={blue} alt="" />
                </p>
              </div>
            </div>
            <p className="flex items-center flex-col gap-1 -mr-8 flex-none">
              AC Service & Repair
            </p>
            <p className="flex items-center flex-col gap-1 -mr-8 flex-none">
              Batteries
            </p>
            <p className="flex items-center flex-col gap-1 -mr-8 flex-none">
              Tyres & Wheel Care
            </p>
            <p className="flex items-center flex-col gap-1 -mr-8 flex-none">
              Dent
            </p>
          </div>
          <div className="overflow-auto flex flex-col w-full">
            {arrr.map((item, index) => (
              <div key={index}>
                <EachCardOfService
                  index={index}
                  imgLink={item.imgLink}
                  title={item.title}
                  desc1={item.desc1}
                  desc2={item.desc2}
                  strikePrice={item.strikePrice}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* BELOW FOR MOBILE */}
      <div
        className={`sm:hidden ${
          selector.grandtotal > 0 ? "fixed" : "hidden"
        } bottom-0 w-full p-3 mt-20 bg-white  items-center`}
      >
        <div className="flex w-[90%] mx-auto justify-between">
          <div className="w-1/2 font-[700] flex justify-start items-center">
            &#8377; {selector.grandtotal}
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="w-1/2 flex items-center gap-2 bg-[#74B9FF] p-2 text-white rounded-md justify-center"
          >
            View Cart <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
