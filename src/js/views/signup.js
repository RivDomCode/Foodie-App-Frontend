import React, { useState } from "react";
import "../../styles/signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
	//****var****//
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		cpassword: ""
	});
	//****validation functions****//
	const setError = msn => {
		const icono = "<i className='fas fa-exclamation-circle hidden' />";
		const error = document.querySelector("#error");
		error.classList.remove("hidden");
		error.innerHTML = msn + icono;
	};
	const validatePassword = user => {
		if (user.password == user.cpasword) {
			if (user.password.length >= 8) {
				document.querySelector("#btn-signUP").classList.add("hidden");
				document.querySelector("#load").classList.remove("hidden");
				console.log("llamar a la funcion crear usuario");
				// actions.createUser(user)
			} else {
				setError("The password must be 8 characters");
				console.log("mensaje de error en password debe tener 8 caracteres");
			}
		} else {
			setError("The password must be the same");
			console.log("mensaje de error en password");
		}
	};
	const validateInputs = user => {
		if (
			user.username.trim() != "" &&
			user.email.trim() != "" &&
			user.password.trim() != "" &&
			user.cpassword.trim() != ""
		) {
			validatePassword(user);
			console.log("llamar a la funcion validar password");
		} else {
			setError("All fields are required");
			console.log("mostrar error imputs VACIOS");
		}
	};

	///****functions to capture the event *****/
	const handelChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
		//console.log(user);
	};
	const handelSubmit = event => {
		event.preventDefault();
		validateInputs(user);
		console.log(user);
		//actions.addUser(user);
	};
	//****HTML****//
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
							<i className="fas fa-exclamation-circle hidden" id="icono-msn" />
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
