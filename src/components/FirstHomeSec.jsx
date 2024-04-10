import CarBack from "../assets/Car_back.png";
import wash1 from "../assets/washhh.jpg"
import wash2 from "../assets/washhing.jpeg"
import wash3 from "../assets/washing.jpeg"
import wash4 from "../assets/wasing.jpeg"
import wash5 from "../assets/wassing.jpeg"
import wash6 from "../assets/wasng.webp"
const FirstSec = () => {
  return (
    <div className="">
      <div className="hidden sm:inline-block bg-backimage mt-40 first_section">
        <img src={CarBack} className="sm:w-[1749px] sm:h-[1278px] " alt="" />
      </div>

      <div className="sm:hidden flex w-[700px] relative overflow-x-auto gap-1 first_section">
        <img src={wash1} className="w-[300px] flex-none rounded-[20px] h-[220px] mx-auto mt-8 ml-2 mr-3" alt="" />
        <img src={wash2} className="w-[300px] flex-none rounded-[20px] h-[220px] mx-auto mt-8 ml-2 mr-3" alt="" />
        <img src={wash3} className="w-[300px] flex-none rounded-[20px] h-[220px] mx-auto mt-8 ml-2 mr-3" alt="" />
        <img src={wash4} className="w-[300px] flex-none rounded-[20px] h-[220px] mx-auto mt-8 ml-2 mr-3" alt="" />
        <img src={wash5} className="w-[300px] flex-none rounded-[20px] h-[220px] mx-auto mt-8 ml-2 mr-3" alt="" />
        <img src={wash6} className="w-[300px] flex-none rounded-[20px] h-[220px] mx-auto mt-8 ml-2 mr-3" alt="" />
      </div>
    </div>
  );
};

export default FirstSec;
