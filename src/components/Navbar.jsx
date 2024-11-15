import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"


const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="flex text-[18px] text-[#706F6F] gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="flex gap-3 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className="w-[140px] bg-[#403F3F] text-white text-[20px] font-semibold h-[44px]">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;