import React, { useState } from "react";
import "../../styles/signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
	//var
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		cpasword: ""
	});
	//functions
	const setError = msn => {
		const error = document.querySelector("#error");
		error.classList.remove("hidden");
		error.innerHTML = msn;
	};
	const validatePassword = user => {
		if (user.password == user.cpasword) {
			// actions.createUser(user)
			document.querySelector("#btn-signUP").classList.add("hidden");
			document.querySelector("#load").classList.remove("hidden");
			console.log("llamar a la funcion crear usuario");
		} else {
			setError("The password must be the same");
			console.log("mensaje de error en password");
		}
	};
	const validateInputs = user => {
		console.log(user, "VALIDAR");
		if (user.username != "" && user.email != "" && user.pasword != "" && user.cpasword != "") {
			validatePassword(user);
			console.log("llamar a la funcion validar password");
		} else {
			setError("All fields are required");
			console.log("mostrar error imputs VACIOS");
		}
	};
	const handelChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
		//console.log(user);
	};
	const handelSubmit = event => {
		event.preventDefault();
		validateInputs(user);

		//validateInputs(event);
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
					<div className="alert hidden" id="error">
						<p>
							The password must be the same <i className="fas fa-exclamation-circle" />
						</p>
					</div>
					<div className="btn-s" id="btn-signUP">
						<button type="submit" className="btn-signup">
							Sing Up
						</button>
					</div>
					<div className="btn-s">
						<button className="hidden btn-load" id="load">
							<div className=" spinner-border text-light " role="status" />
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
