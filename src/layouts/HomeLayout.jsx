import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/LeftNavbar";
import RightNav from "../components/RightNav";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <Helmet>
                <title>Home | Dragon News</title>
            </Helmet>
            <header>
                <Header></Header>
                <section className="w-[1140px] mx-auto mt-[30px]">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-[1140px] mx-auto mt-5">
                <Navbar></Navbar>
            </nav>
            <main className="w-[1140px] mx-auto mt-[80px] grid grid-cols-12 gap-6">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">Dragon News Home</section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;