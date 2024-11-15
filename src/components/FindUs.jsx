import fb from "../assets/fb.png"
import twr from "../assets/twitter.png"
import ins from "../assets/instagram.png"
import pOne from "../assets/swimming.png"
import pTwo from "../assets/class.png"
import pThree from "../assets/playground.png"

const FindUs = () => {
  return (
    <div className="mt-[30px]">
      <h2 className="text-[20px] font-semibold">Find Us On</h2>
      <div className="join flex  join-vertical *:bg-white mt-5">
        <button className="btn join-item justify-start space-x-2 text-[18px] text-[#706F6F]">
            <img src={fb} alt="" /> <span>Facebook</span>
        </button>
        <button className="btn join-item justify-start space-x-2 text-[18px] text-[#706F6F]">
            <img src={twr} alt="" /> <span>Twitter</span>
        </button>
        <button className="btn join-item justify-start space-x-2 text-[18px] text-[#706F6F]">
            <img src={ins} alt="" /> <span>Instagram</span>
        </button>
        
      </div>
      <div className="mt-5 py-4 bg-[#F3F3F3] px-2">
        <h2 className="text-[20px] font-semibold">Q-Zone</h2>
        <div className="mt-5"><img src={pOne} alt="" /></div>
        <div className="mt-5"><img src={pTwo} alt="" /></div>
        <div className="mt-5"><img src={pThree} alt="" /></div>
      </div>
    </div>
  );
};

export default FindUs;
