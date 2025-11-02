import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
		<div className="flex justify-center items-center gap-2 py-2 flex-col">
			<div className="logo">
				<img className="w-[300px]" src={logo} alt="" />
			</div>
            <h2 className="text-gray-400">Journalist without fear and favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
		</div>
	);
};

export default Header;