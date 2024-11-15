import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data} = useLoaderData();
    
    
    
    return (
        <div>
            <h1 className="text-[20px] font-semibold">
            Dragon News Home
            </h1>
            <div className="mt-5 grid grid-cols-1 gap-8">
                {
                    data.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;