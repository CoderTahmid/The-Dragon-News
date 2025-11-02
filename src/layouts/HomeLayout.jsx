import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
	return (
		<div>
			<header>
				<Header></Header>
				<section className="w-11/12 mx-auto">
					<LatestNews></LatestNews>
				</section>
			</header>
			<nav className="w-11/12 mx-auto py-2">
				<Navbar></Navbar>
			</nav>
			{/* <Main></Main> */}
		</div>
	);
};

export default HomeLayout;
