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
      <div className="w-[50%] gap-5 flex">
        <div className="w-[46px]">
          <img src={Rect} alt="" />
        </div>
        <div className="flex gap-3 flex-col">
          <div className=" w-[914px] h-[50px] font-[600] font-poppins text-[39px] overflow-hidden leading-[50px] ">
            Common Car Service Quetions in Surat
          </div>
          <div className="font-poppins font-[400] w-[784px] h-[81px] text-[18px] leading-[27px] text-[#6B6B6B] ">
            Lorem Ipsum s simply dummy text of the printing and typesetting
            industry.orem Ipsum has been the industry standard dummy Lorem Ipsum
            isimply dummy.
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
