import { useEffect, useState } from "react";


const LeftNavbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data.data.news_category))
    }, [])

    return (
        <div>
            <h2 className="text-[20px] font-semibold">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-1 mt-5">
                {
                    categories.map(category => <button className="btn bg-white text-[#9F9F9F] text-[20px] font-medium" key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;