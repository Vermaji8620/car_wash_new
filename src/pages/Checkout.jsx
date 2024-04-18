const Checkout = () => {
  return (
    <div className=" w-[90%] mx-auto">
      <div className="w-1/2">

        <div className=" h-[111px] mt-10 bg-white flex flex-col justify-center border-[2px] border-gray-200 shadow-2xl rounded-[10px]">
          <div className=" ml-5 w-[110px] h-[33px] ">
            <p className="font-poppins font-[600] text-[22px] leading-[33px]">
              Logged In
            </p>
          </div>
          <div className=" ml-5 w-[260px] h-[33px]">
            <p className="text-[#6B6B6B] font-poppins font-[400] text-[22px] leading-[33px]">
              Customer | 91047 93373
            </p>
          </div>
        </div>

        

      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Checkout;
