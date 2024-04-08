// HomePage.jsx
import Card from "../components/Card";
import FirstHomeSec from "../components/FirstHomeSec";
import SecondHomeSec from "../components/SecondHomeSec";
import ThirdHomeSec from "../components/ThirdHomeSec";
import FourthHomeSec from "../components/FourthHomeSec";
import FifthHomeSec from "../components/FifthHomeSec";
import SixthHomeSec from "../components/SixthHomeSec";
import SeventhHomeSec from "../components/SeventhHomeSec";
import EighthHomeSec from "../components/EighthHomeSec";
import NinethHomeSec from "../components/NinethHomeSec";
import TenthHomeSec from "../components/TenthHomeSec";

const HomePage = () => {
  return (
    <div className="w-full h-full ">
      <div className="sm:relative sm:h-[110vh] element-causing-scrollbar">
        <Card />
        <FirstHomeSec />
        <SecondHomeSec />
        <ThirdHomeSec />
        <FourthHomeSec />
        <FifthHomeSec />
        <SixthHomeSec />
        <SeventhHomeSec />
        <EighthHomeSec />
      </div>
      <NinethHomeSec />
      <TenthHomeSec />
    </div>
  );
};

export default HomePage;
