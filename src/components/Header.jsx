import { Link } from "react-router-dom";
import frame from "../assets/Frame.png";

const Header = () => {
  return (
    // <div className="absolute z-10">
    <div className="flex absolute z-10 justify-around items-center w-[1257px] h-[88px] bg-[#74B9FF] rounded-[50px] mt-6 ml-32">
      <Link to={"/"}>
        <img
          className="w-[232px] h-[88px]"
          src="https://s3-alpha-sig.figma.com/img/07ec/39ff/bd2035c9695c1fb4a115b5ecb32c0ae3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EuYxym8NaI94Gyj6FgbHKFALYBXQXUfcUQukoIPZLfqlyxm1i9wuHy88k~5o0XEOzBCAOIAzQNU-ryCeLDKA5Kchywey7lpJCQlc-MkASI4oA95Ugr0Cv7~jpbhuioxNY~THCJ8apxGcFUygWbJNjVi785fu~ZrYAo3jvVYkUVL3wBnBgpLohyGYceTYYdVNL3KD6NOK14SEYWfJ4kKwBMsdKHG3Cv0JZbRoRPGV0ycd~tRvwRlJrHfq8ZawUOOYaotiN36Q1wNWaMz7ClxJMWDD5g~dF0TVowy9l-tawBCwXjX~JJoofTrJXkgiBxj0QPyKr3ZHcJl8DU4iBuGDOg__"
          alt=""
        />
      </Link>
      <Link
        to={"/"}
        className={`font-poppin h-[30px] w-[60px] font-[400] leading-[30px]`}
      >
        Home
      </Link>

      <Link
        to={"/about"}
        className="font-poppin h-[30px] w-[90px] font-[400] leading-[30px]"
      >
        About Us
      </Link>

      <Link
        to={"/services"}
        className="font-poppin h-[30px] w-[83px] font-[400] leading-[30px]"
      >
        Services
      </Link>

      <Link
        to={"/contactus"}
        className="font-poppin h-[30px] w-[111px] font-[400] leading-[30px]"
      >
        Contact Us
      </Link>

      <Link
        to={"/"}
        className="w-[136px] justify-center gap-3 flex items-center  h-[47px] bg-white rounded-[10px]"
      >
        <img src={frame} className="w-[17px] h-[17px]" alt="" />
        <p className="w-[47px] h-[24px] font-poppin font-[400] leading-[24px]">
          Log In
        </p>
      </Link>
    </div>
    // </div>
  );
};

export default Header;
