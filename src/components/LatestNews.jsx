import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
	return <div className="flex gap-2 items-center bg-base-300 p-2">
        <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
        {/* <p>Lorem ipsum dolor sit amet onsecteti tenetur. Perspiciatis quis numquam, error repellat veniam cupiditate tempore modi vero vel labore adipisci dolorum laborum, sunt, magnam cum.</p> */}
        <Marquee className="space-x-10" pauseOnHover={true} speed={100}>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, velit!</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, velit!</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, velit!</Link>
        </Marquee>
    </div>;
};

export default LatestNews;
