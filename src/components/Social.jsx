import { FaGithub, FaGoogle } from "react-icons/fa";


const Social = () => {
    return (
        <div>
            <h2 className="text-[20px] font-semibold">Login With</h2>
            <div className="mt-5 *:w-full space-y-2">
                <button className="btn border-2 border-blue-500 text-blue-500 text-[18px]">
                    <FaGoogle></FaGoogle> Login with Google
                </button>
                <button className="btn border-2 border-black text-[18px]">
                    <FaGithub></FaGithub> Login with Github
                </button>
            </div>
        </div>
    );
};

export default Social;