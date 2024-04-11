import blue from "../assets/blueline.png";
import EachCardOfService from "../components/serviceComponent/EachCardOfService";
import ServiceCard from "../components/serviceComponent/ServiceCard";

const Services = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full sm:relative h-[100vh] element-causing-scrollbar">
        <ServiceCard />
        <div className="flex flex-col gap-5 w-[60%] ml-10 mt-32 p-3">
          <div className="w-[100%] flex overflow-x-auto shadow-lg justify-around sm:p-7 p-4 rounded-[10px] border-[1px] font-[600] text-[13px] leading-[20px] font-poppins border-[#74B9FF] gap-10">
            <div className="flex items-center flex-none flex-col gap-1">
              <div>
                <p>Periodic Services</p>
                <p>
                  <img src={blue} alt="" />
                </p>
              </div>
            </div>
            <p className="flex items-center flex-col gap-1 flex-none">
              AC Service & Repair
            </p>
            <p className="flex items-center flex-col gap-1 flex-none">
              Batteries
            </p>
            <p className="flex items-center flex-col gap-1 flex-none">
              Tyres & Wheel Care
            </p>
            <p className="flex items-center flex-col gap-1 flex-none">Dent</p>
          </div>
          <div className="overflow-auto flex flex-col gap-4">
            {Array.from({ length: 10 }, (_, indx) => (
              <div key={indx}>
                <EachCardOfService />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
