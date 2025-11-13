import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../provider/AuthProvider";

const Login = () => {
	const {setUser, userLogin} = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		console.log(email, password);
		userLogin(email, password)
			.then(result => {
				const user = result.user;
				setUser(user);
			}).catch(error => {
				alert(error.code);
			})
	};

	return (
		<div>
			<form onSubmit={handleSubmit} action="" className="min-h-screen flex justify-center items-center">
				<div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
					<h2 className="text-2xl font-semibold text-center">Login your account</h2>
					<div className="card-body">
						<fieldset className="fieldset">
							<label className="label">Email</label>
							<input name="email" type="email" className="input" placeholder="Email" />
							<label className="label">Password</label>
							<input name="password" type="password" className="input" placeholder="Password" />
							<div>
								<a className="link link-hover">Forgot password?</a>
							</div>
							<button className="btn btn-neutral mt-4 rounded-none">Login</button>
						</fieldset>
					</div>
					<p className="text-center font-semibold">
						Don't have an account?{" "}
						<Link to="/auth/register" className="text-red-500">
							Register
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
