import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const FindUs = () => {
	return (
		<div>
			<h2 className="font-semibold mb-3">Find us on</h2>
			<div className="join flex join-vertical *:bg-base-100">
				<button className="btn join-item justify-start">
					<FaFacebook></FaFacebook>Button
				</button>
				<button className="btn join-item justify-start">
					<FaInstagram></FaInstagram>Button
				</button>
				<button className="btn join-item justify-start">
					<FaTwitter></FaTwitter>Button
				</button>
			</div>
		</div>
	);
};

export default FindUs;
