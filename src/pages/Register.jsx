import {use, useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../provider/AuthProvider";

const Register = () => {
	const {createNewUser, setUser} = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = new FormData(e.target);
		const photo = form.get("photo");
		const name = form.get("name"); // this is the new way to get data from a form
		const email = form.get("email");
		const password = form.get("password");

		createNewUser(email, password)
			.then((result) => {
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				console.log(errorCode, errorMessage);
			});
	};

	return (
		<div>
			<form action="" onSubmit={handleSubmit} className="min-h-screen flex justify-center items-center">
				<div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
					<h2 className="text-2xl font-semibold text-center">Register your account</h2>
					<div className="card-body">
						<fieldset className="fieldset">
							<label className="label">Photo URL</label>
							<input name="photo" type="text" className="input" placeholder="Photo URL" />
							<label className="label">Name</label>
							<input name="name" type="text" className="input" placeholder="Name" />
							<label className="label">Email</label>
							<input name="email" type="email" className="input" placeholder="Email" />
							<label className="label">Password</label>
							<input name="password" type="password" className="input" placeholder="Password" />
							<div>
								<a className="link link-hover">Forgot password?</a>
							</div>
							<button className="btn btn-neutral mt-4 rounded-none">Register</button>
						</fieldset>
					</div>
					<p className="text-center font-semibold">
						Already have an account?{" "}
						<Link to="/auth/login" className="text-red-500">
							Login
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Register;
