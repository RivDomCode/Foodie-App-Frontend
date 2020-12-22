import React, { useState } from "react";
import "../../styles/signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
	//****var****//
	const [error, setError] = useState({
		msg: "",
		status: false
	});
	const [spinner, setSpinner] = useState(false);
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		cpassword: ""
	});
	//****validation functions****//

	const validatePassword = user => {
		if (user.password == user.cpassword) {
			if (user.password.length >= 8) {
				setError({
					msg: "",
					status: false
				});
				console.log("llamar a la funcion crear usuario");
				setSpinner(true);
				//actions.createUser(user)
			} else {
				setError({
					msg: "The password must be 8 characters",
					status: true
				});
				console.log("mensaje de error en password debe tener 8 caracteres");
			}
		} else {
			setError({
				msg: "The password must be the same",
				status: true
			});
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
			setError({
				msg: "All fields are required",
				status: true
			});
			console.log("mostrar error imputs VACIOS");
		}
	};

	///****functions to capture the event *****/
	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
		//console.log(user);
	};
	const handleSubmit = event => {
		event.preventDefault();
		validateInputs(user);
		console.log(user);
		//actions.addUser(user);
	};
	//****HTML****//
	return (
		<div className="container">
			<h1>The Foodie Club</h1>
			<form className="signup" onChange={handleChange} onSubmit={handleSubmit}>
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
						name="cpassword"
						placeholder="Confirm your password here*"
					/>

					{error.status ? (
						<div className="alert" id="error">
							<p>
								{" "}
								{error.msg}
								<i className="fas fa-exclamation-circle" id="icono-msn" />
							</p>
						</div>
					) : (
						""
					)}
					{spinner == false ? (
						<div className="btn-s" id="btn-signUP">
							<button type="submit" className="btn-signup">
								Sing Up
							</button>
						</div>
					) : (
						<div className="btn-s">
							<button className="btn-load" id="load">
								<div className="spinner-border text-light" role="status" />
							</button>
						</div>
					)}
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