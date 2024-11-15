import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center bg-[#F3F3F3] p-4 gap-5">
            <p className="bg-[#D72050] text-[20px] font-medium px-3 py-1 text-white">Latest</p>
            <Marquee pauseOnHover={true}>
                <Link className="text-[18px] font-semibold" to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam ullam illo dolore numquam culpa inventore quae laboriosam excepturi dolorum.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;