import React, { useState } from "react";
import "../../styles/signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
	//var
	const [user, setUser] = useState();
	//functions
	const validatePassword = (password, cpasword) => {};
	const handelChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
		//console.log(user);
	};
	const handelSubmit = event => {
		event.preventDefault();
		console.log(user);
		//actions.addUser(user);
	};
	//html
	return (
		<div className="container">
			<h1>The Foodie Club</h1>
			<form className="signup" onChange={handelChange} onSubmit={handelSubmit}>
				<h2 className="title">Create an account</h2>
				<div className="mb-3">
					<input
						type="text"
						className="form-control placeholder"
						name="username"
						placeholder="User name here*"
					/>
					<input type="email" className="form-control placeholder" name="email" placeholder="Email here*" />
					<div className="group-input">
						<input
							type="password"
							className="form-control placeholder"
							name="password"
							placeholder="Enter your password here*"
						/>
					</div>

					<input
						type="password"
						className="form-control placeholder"
						id="confirm-password"
						name="cpasword"
						placeholder="Confirm your password here*"
					/>
					<div className="alert">
						<p>
							The password must be the same <i className="fas fa-exclamation-circle" />
						</p>
					</div>
					<div className="btn-s">
						<button type="submit" className="btn-signup">
							Sing Up
						</button>
					</div>
					<div className="center-text">
						<label className="form-check-label text-login" htmlFor="exampleCheck1">
							Already have an account?{" "}
							<Link
								to={{
									pathname: "/login"
								}}>
								{" "}
								click here
							</Link>
						</label>
					</div>
				</div>
			</form>
		</div>
	);
};
export default SignUp;
