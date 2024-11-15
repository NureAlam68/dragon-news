import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mt-[50px]">
                <img className="w-[471px] h-[60px]" src={logo} alt="" />
            </div>
            <h2 className="mt-5 text-[18px] text-[#706F6F]">
            Journalism Without Fear or Favour
            </h2>
            <p className="mt-[10px] text-[20px] font-medium text-[#706F6F]">
                {moment().format("dddd, MMMM Do YYYY, h:mm")}
            </p>
        </div>
    );
};

export default Header;