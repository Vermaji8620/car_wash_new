import Rect from "../assets/Rectangle 192.png";
import CardsCompo from "../components/CardsCompo";

const SeventhHomeSec = () => {
  const arr = [
    {
      title: "What Car Services are available in surat through GoMechanic",
      desc: "Lorem Ipsums simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thendustry's standard  dummy Lorem Ipsumsimply dummy. Lorem Ipsumsimply dummy text of  and typesetting industry. Lorem Ipsum has been the industry's standard  dummy Lorem  simply dummy.",
    },
    {
      title: "Why Should i opt for GoMechanic car Services in Surat ",
      desc: "Lorem Ipsums simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thendustry's standard  dummy Lorem Ipsumsimply dummy. Lorem Ipsumsimply dummy text of  and typesetting industry. Lorem Ipsum has been the industry's standard  dummy Lorem  simply dummy",
    },
    {
      title: "How Does GOMechanic Stand out from other Car Service  Surat",
      desc: "Lorem Ipsums simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thendustry's standard  dummy Lorem Ipsumsimply dummy. Lorem Ipsumsimply dummy text of  and typesetting industry. Lorem Ipsum has been the industry's standard  dummy Lorem  simply dummy",
    },
    {
      title: "Why Should i opt for GoMechanic car Services in Surat ",
      desc: "Lorem Ipsums simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thendustry's standard  dummy Lorem Ipsumsimply dummy. Lorem Ipsumsimply dummy text of  and typesetting industry. Lorem Ipsum has been the industry's standard  dummy Lorem  simply dummy",
    },
    {
      title: "How Does GOMechanic Stand out from other Car Service Surat",
      desc: "Lorem Ipsums simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thendustry's standard  dummy Lorem Ipsumsimply dummy. Lorem Ipsumsimply dummy text of  and typesetting industry. Lorem Ipsum has been the industry's standard  dummy Lorem  simply dummy",
    },
    {
      title:
        "How Does GOMechanic Stand out from other Car Service Providen Suratt",
      desc: "Lorem Ipsums simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thendustry's standard  dummy Lorem Ipsumsimply dummy. Lorem Ipsumsimply dummy text of  and typesetting industry. Lorem Ipsum has been the industry's standard  dummy Lorem  simply dummy",
    },
    {
      title:
        "How Does GOMechanic Stand out from other Car Service Providen Suratt",
      desc: "Lorem Ipsums simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thendustry's standard  dummy Lorem Ipsumsimply dummy. Lorem Ipsumsimply dummy text of  and typesetting industry. Lorem Ipsum has been the industry's standard  dummy Lorem  simply dummy",
    },
    {
      title:
        "How Does GOMechanic Stand out from other Car Service Providen Suratt",
      desc: "Lorem Ipsums simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thendustry's standard  dummy Lorem Ipsumsimply dummy. Lorem Ipsumsimply dummy text of  and typesetting industry. Lorem Ipsum has been the industry's standard  dummy Lorem  simply dummy",
    },
  ];
  return (
    <div className="seventh_section pt-24 gap-4 flex flex-col pl-5">
      <div className="sm:w-[85%] sm:gap-3 gap-1 overflow-hidden flex">
        <div className="sm:w-[46px] w-[96px] relative sm:top-4">
          <img src={Rect} alt=""  className="sm:h-full h-[70px]"/>
        </div>
        <div className="flex sm:mt-10 -mt-1 items-center">
          <div className="w-[2014px] sm:h-[50px] font-[600] font-poppins sm:text-[40px] text-[25px] overflow-hidden leading-[28px]">
            Common Car Service Questions in Surat
          </div>
        </div>
      </div>
      {arr.map((eachelem, index) => (
        <div key={index}>
          <CardsCompo title={eachelem.title} desc={eachelem.desc} />
        </div>
      ))}
    </div>
  );
};

export default SeventhHomeSec;
