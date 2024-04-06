import Card from "../assets/Subtract.png";

const HomePage = () => {
  return (
    <div className="">
      <div className="overflow-auto border-[10px] border-red-700 all_section bg-cover bg-no-repeat h-[180vh] bg-backimage">
        <div className="sticky top-8 w-[500px] mt-96 left-[893px]">
          <img src={Card} alt="image to be loaded" className="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
