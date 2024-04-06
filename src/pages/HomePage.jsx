import CarBack from "../assets/Car_back.png";
import Star from "../assets/star.png";
import grp6 from "../assets/Group 6.png";
import grp1 from "../assets/Group 1.png";
import imgrem from "../assets/image-removebg-preview (9) 1.png";
import Rect from "../assets/Rectangle 192.png";
import bike from "../assets/bike.png";
import frect from "../assets/f_rect.png";
import srect from "../assets/s_rect.png";
import line from "../assets/line.png";
import trect from "../assets/t_rect.png";
import circle from "../assets/circle.png";
import blue from "../assets/blueline.png";

// import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="border-[3px]  border-green-500">
      {/* ************* */}
      {/* <Card /> */}
      {/* ****************** */}
      <div className="first_section">
        <img src={CarBack} className="w-[1749px] h-[1278px]" alt="" />
      </div>
      {/* ******************** */}
      <div className="second_section pt-10 pl-5">
        <div className="w-[60%] relative gap-6 flex flex-col">
          <div className="absolute top-8 -left-2">
            <img src={circle} alt="" />
            <p className="text-3xl translate-x-3 -translate-y-9 overflow-hidden">
              &lt;
            </p>
          </div>
          <div className="absolute top-8 -right-3">
            <img src={circle} alt="" />
            <p className="text-3xl -translate-y-9 translate-x-2 overflow-hidden">
              &gt;
            </p>
          </div>
          <div className="w-[100%] flex shadow-lg justify-around p-7 rounded-[10px] border-[1px] font-[600] text-[13px] leading-[20px] font-poppins border-[#74B9FF] gap-5">
            <div className="flex items-center flex-col gap-1">
              <p>Our Services</p>
              <p>
                <img src={blue} alt="" />
              </p>
            </div>
            <p>Curated Custom Services</p>
            <p>Winter Services</p>
            <p>How GoMechanic Works</p>
            <p>Rating</p>
          </div>
          <div className="w-[85%] gap-5 flex">
            <div className="w-[46px]">
              <img src={Rect} alt="" />
            </div>
            <div className="flex gap-3 flex-col">
              <div className=" w-[914px] h-[50px] font-[600] font-poppins text-[40px] overflow-hidden leading-[50px] ">
                Car Services Available In Surat
              </div>
              <div className="font-poppins font-[400] w-[784px] h-[81px] text-[18px] leading-[27px] text-[#6B6B6B]">
                Lorem Ipsum s simply dummy text of the printing and typesetting
                industry.orem Ipsum has been the industry standard dummy Lorem
                Ipsum isimply dummy.
              </div>
            </div>
          </div>
          <div className="w-[78%] ml-14 justify-between gap-16 flex flex-wrap">
            <div className="border-[1px] border-black shadow-lg relative m-4 w-[180px] h-[180px] flex flex-col justify-end rounded-[10px]">
              <img src={grp6} className="absolute top-0 left-0" alt="" />
              <img src={imgrem} alt="" />
              <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] ">
                Pressure Car Wash
              </p>
            </div>
            <div className="border-[1px] border-black shadow-lg overflow-hidden relative m-4 w-[180px] h-[180px] flex flex-col justify-end rounded-[10px]">
              <img
                src={grp6}
                className="relative top-10 rotate-[-55deg] right-10"
                alt=""
              />
              <img
                src={imgrem}
                className="absolute top-6 rotate-[28.04deg] left-5"
                alt=""
              />
              <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] ">
                UnderBody
              </p>
            </div>
            <div className="border-[1px] border-black shadow-lg relative m-4 w-[180px] h-[180px] flex flex-col justify-end rounded-[10px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/9844/fed2/df990d6857d7a76d8c4394407bd0b16b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kr59LD5gDCfgcwBQUNYZOCd-aQLTlQMOcDWb5gbWK0qfLKEwc0HZ-2zBAA8J1ABUVYAcJrxmdXHemRhfB4dWLXGekl5vtyScKmgMtbaTJq5RlVLn8difhJQyYk0uRQoLY8VZws64i4w1~ScGNLQ5Aldf~lWeSa7V0mbqeaA~PTLZWuWPQ8w~opRi8Knb2ZbHvV23NT1UfewWYxhMmN2QYlf~ZHPDXSpszmBPvA01REPz1r1-GCFry4fRvCzkUpHhODM5IxIiM0~T72wc2lG7DoytuyoJDRdCukLie-muvQz6otnGS07Z32mCGMMVEK~jrt0OFtTVT8FUpOA3Dib7AA__"
                className="absolute top-10 left-0 w-[85px] h-[85px]"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/f9b2/b894/d4454b23372f13893603378efa8d08ae?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TqOKDslys~2fMB5KUCVAxhIe6UeyJp0jPksDNk0KmTfjmL6I~WUKKPvjz3uMmguaLlozEN4tvwuDXTD8j5eG5R6dGgNbi3iZzi6dMDuybf7gejtbsHWfuvpK9PklPJ78BrB0LsiDisdw7NlQlfpPe~xeGsE8htpbV2BHX3KE9Qlfcplpee1-TBNF1PL5nZRsBg-TDpqBIIJKiB4cEs19N-1xm4N7-LIVz8jl8dqM-SfOAzWFxgqP5tL2MllxKrOn8On4~W2h~AeT~~EHYJVMFv9YUdRKyIavfgy5VV7awM0~4dWpziqffJb~a-v5NYZNIJ60420m72ZBSvG-0o0wgw__"
                alt=""
              />
              <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] ">
                Waterless Cleaning
              </p>
            </div>
            <div className="border-[1px] overflow-hidden border-black shadow-lg relative m-4 w-[180px] h-[180px] flex flex-col justify-end rounded-[10px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/f709/f712/2c9bb3ce89f59a5b1098453e8243b0ec?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sha3ToShZrADd8tKibNPtrWVayu8w0l7oYagPAxuxsa8z1YxoraB0heFCIj-oDNh6yYwSixcgphBW30NYSXNwdZ4DUnM5wrJ56dCsFSMMEBZE38tnZFIM4j~OnXHV1xsNi-PJpmtKAYoQyUpj5aTexsIsusp~ud0MJPVpKZ6hsxBMXAvgnvHaOwVPH83CC49Y7PwJFvr2eGsIyBDRrMo8tKjq9l3YXuwGYMDiV4RVdVD0ACRbb5Aynkw4KOyFdnN44GS5dxNzZOONMV2tvfmdp2LcUjouPijHIjXu-~HVVb6gs6fnQlilnSbE9MzcSBnsvRiPKVhMThnS9Dxjpj9gA__"
                className="absolute top-5 left-16 w-[96px] h-[78px]"
                alt=""
              />
              <img src={grp1} alt="" className="relative top-8 right-8" />
              <p className="text-center font-poppins font-[700] text-[12px] leading-[18px]  overflow-hidden">
                Car Deep Clean
              </p>
            </div>
            <div className="border-[1px] border-black shadow-lg relative m-4 w-[180px] h-[180px] flex flex-col justify-end rounded-[10px]">
              <img src={imgrem} className="absolute top-10 left-0" alt="" />
              <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] ">
                Wash & Coat
              </p>
            </div>
            <div className="border-[1px] border-black shadow-lg relative m-4 w-[180px] h-[180px] flex flex-col justify-end rounded-[10px]">
              <img src={bike} className="absolute top-5 left-10" alt="" />
              <img src={grp1} className="relative right-10 bottom-10" alt="" />
              <p className="text-center font-poppins font-[700] text-[12px] leading-[18px] overflow-hidden">
                Bike Washing
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ********************* */}
      <div className="third_section pt-10 pl-5">
        <div className="w-[50%] gap-5 flex">
          <div className="w-[46px]">
            <img src={Rect} alt="" />
          </div>
          <div className="flex gap-3 flex-col">
            <div className=" w-[914px] h-[50px] font-[600] font-poppins text-[40px] overflow-hidden leading-[50px] ">
              Trending Near You
            </div>
            <div className="font-poppins font-[400] w-[784px] h-[81px] text-[18px] leading-[27px] text-[#6B6B6B]">
              Lorem Ipsum s simply dummy text of the printing and typesetting
              industry.orem Ipsum has been the industry standard dummy Lorem
              Ipsum isimply dummy.
            </div>
          </div>
        </div>
        <div className="w-[50%] relative justify-between gap-3 ml-14 flex flex-wrap">
          <div className="w-[330px] m-2 h-[326px] relative overflow-hidden">
            <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
            <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
            <img
              src={trect}
              alt=""
              className="absolute  z-30 -left-12 top-12"
            />
          </div>
          <div className="w-[330px] m-2 h-[326px] relative overflow-hidden">
            <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
            <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
            <img src={trect} alt="" className="absolute z-30 -left-12 top-12" />
          </div>
          <div className="w-[330px] m-2 h-[326px] relative overflow-hidden">
            <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
            <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
            <img src={trect} alt="" className="absolute z-30 -left-12 top-12" />
          </div>
          <div className="w-[330px] m-2 h-[326px] relative overflow-hidden">
            <img src={frect} alt="" className="absolute z-10 left-2 top-2" />
            <img src={srect} alt="" className="absolute z-20 -left-4 top-6" />
            <img src={trect} alt="" className="absolute z-30 -left-12 top-12" />
          </div>
        </div>
      </div>
      {/* ************************ */}
      <div className="fourth_section pt-10 pl-5">
        <div className="w-[50%] gap-5 flex">
          <div className="w-[46px]">
            <img src={Rect} alt="" />
          </div>
          <div className="flex gap-3 flex-col">
            <div className=" w-[914px] h-[50px] font-[600] font-poppins text-[40px] overflow-hidden leading-[50px] ">
              GoMechanic Guarantee
            </div>
            <div className="font-poppins font-[400] w-[784px] h-[81px] text-[18px] leading-[27px] text-[#6B6B6B]">
              Lorem Ipsum s simply dummy text of the printing and typesetting
              industry.orem Ipsum has been the industry standard dummy Lorem
              Ipsum isimply dummy.
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-16 flex items-center justify-between gap-4 flex-wrap">
          <div className="w-[40%] text-[#74B9FF] font-[600] text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            Free PickUp Drop
          </div>
          <div className="w-[40%] text-[#74B9FF] font-[600] text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            Genuine Parts
          </div>
          <div className="w-[40%] text-[#74B9FF] font-[600] text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            30 Days Warranty
          </div>
          <div className="w-[40%] text-[#74B9FF] font-[600] text-[23px] leading-[35px] h-[64px] text-center rounded-[10px] flex items-center justify-center bg-[#F5FAFF] border-[1px] border-[#74B9FF]">
            Affordable Prices
          </div>
        </div>
      </div>
      {/* ************************ */}
      <div className="fifth_section pt-16 gap-16 flex flex-col pl-5">
        <div className="w-[50%] gap-5 flex">
          <div className="w-[46px]">
            <img src={Rect} alt="" />
          </div>
          <div className="flex gap-3 flex-col">
            <div className=" w-[914px] h-[50px] font-[600] font-poppins text-[40px] overflow-hidden leading-[50px] ">
              How GoMechanic Works?
            </div>
            <div className="font-poppins font-[400] w-[784px] h-[81px] text-[18px] leading-[27px] text-[#6B6B6B]">
              Lorem Ipsum s simply dummy text of the printing and typesetting
              industry.orem Ipsum has been the industry standard dummy Lorem
              Ipsum isimply dummy.
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-16 flex flex-col items-start justify-between gap-16">
          <div className="flex items-center gap-3">
            <div className="w-[117px] h-[117px] flex items-center justify-center border-[3px] border-[#74B9FF]  rounded-full bg-[#EBF5FF]">
              <p className="font-[600] text-[33px] leading-[50px] ">1</p>
            </div>
            <div className="flex flex-col">
              <p className="font-[600] text-[20px] leading-[30px]">
                Select The Perfect Car Services
              </p>
              <p className="font-[400] text-[16px] leading-[24px] text-[#6B6B6B]">
                From GoMechanics Brand Portfolio Of Services
              </p>
            </div>
          </div>
          <div className="border border-green-500 -mt-12 -mb-14 ml-14">
            <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[117px] h-[117px] flex items-center justify-center border-[3px] border-[#74B9FF]  rounded-full bg-[#EBF5FF]">
              <p className="font-[600] text-[33px] leading-[50px] ">2</p>
            </div>
            <div className="flex flex-col">
              <p className="font-[600] text-[20px] leading-[30px]">
                Schedule Free Doorstep Pick-Up
              </p>
              <p className="font-[400] text-[16px] leading-[24px] text-[#6B6B6B]">
                We Offer Free pick up and drop for all services booked
              </p>
            </div>
          </div>
          <div className="border border-green-500 -mt-12 -mb-14 ml-14">
            <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[117px] h-[117px] flex items-center justify-center border-[3px] border-[#74B9FF]  rounded-full bg-[#EBF5FF]">
              <p className="font-[600] text-[33px] leading-[50px] ">3</p>
            </div>
            <div className="flex flex-col">
              <p className="font-[600] text-[20px] leading-[30px]">
                Track Your Car Service Real-Time
              </p>
              <p className="font-[400] text-[16px] leading-[24px] text-[#6B6B6B]">
                We Will take Care of Everything from here
              </p>
            </div>
          </div>
          <div className="border border-green-500 -mt-12 -mb-14 ml-14">
            <img className="h-[100px] bg-[#74B9FF]" src={line} alt="" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[117px] h-[117px] flex items-center justify-center border-[3px] border-[#74B9FF]  rounded-full bg-[#EBF5FF]">
              <p className="font-[600] text-[33px] leading-[50px] ">4</p>
            </div>
            <div className="flex flex-col">
              <p className="font-[600] text-[20px] leading-[30px]">
                Earn While We Service
              </p>
              <p className="font-[400] text-[16px] leading-[24px] text-[#6B6B6B]">
                Spead the word! You get Rs.750 Your Friends get Rs.750!
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] ml-16 flex translate-x-10 gap-16">
          <div className="w-[167px] justify-center items-center rounded-[10px] flex flex-col h-[64px] bg-[#74B9FF]">
            <p className="font-[600] text-[20px] leading-[30px] text-white">
              3 Million +
            </p>
            <p className="font-[600] text-[13px] leading-[20px]">Cars served</p>
          </div>
          <div className="w-[167px] justify-center items-center rounded-[10px] flex flex-col h-[64px] bg-[#74B9FF]">
            <p className="font-[600] text-[20px] leading-[30px] text-white">
              2.7 Million +
            </p>
            <p className="font-[600] text-[13px] leading-[20px]">
              Happy Customers
            </p>
          </div>
          <div className="w-[167px] justify-center items-center rounded-[10px] flex flex-col h-[64px] bg-[#74B9FF]">
            <p className="font-[600] text-[20px] flex gap-3 items-center leading-[30px] text-white">
              4.7 <img src={Star} alt="" />
            </p>
            <p className="font-[600] text-[13px] leading-[20px]">Cars served</p>
          </div>
          <div className="w-[167px] justify-center items-center rounded-[10px] flex flex-col h-[64px] bg-[#74B9FF]">
            <p className="font-[600] text-[20px] leading-[30px] text-white">
              850 +
            </p>
            <p className="font-[600] text-[13px] leading-[20px]">
              Touch Points
            </p>
          </div>
        </div>
      </div>
      {/* *********************** */}

    </div>
  );
};

export default HomePage;
