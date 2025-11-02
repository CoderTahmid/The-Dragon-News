import {Link} from "react-router-dom";

const Register = () => {
	return (
		<div className="min-h-screen flex justify-center items-center ">
			<div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
				<h2 className="text-2xl font-semibold text-center">Register your account</h2>
				<div className="card-body">
					<fieldset className="fieldset">
						<label className="label">Photo URL</label>
						<input type="text" className="input" placeholder="Photo URL" />
						<label className="label">Name</label>
						<input type="text" className="input" placeholder="Name" />
						<label className="label">Email</label>
						<input type="email" className="input" placeholder="Email" />
						<label className="label">Password</label>
						<input type="password" className="input" placeholder="Password" />
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button className="btn btn-neutral mt-4 rounded-none">Register</button>
					</fieldset>
				</div>
				<p className="text-center font-semibold">
					Already have an account?{" "}
					<Link to="/auth/register" className="text-red-500">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
