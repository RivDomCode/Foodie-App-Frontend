import React, { useState, useContext } from "react";
import "../../styles/signup.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropsType from "prop-types";

const SignUp = props => {
	console.log(props);
	const { store, actions } = useContext(Context);
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
				setSpinner(true);
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
		} else {
			setError({
				msg: "All fields are required",
				status: true
			});
		}
	};

	///****functions to capture the event *****/
	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const handleSubmit = event => {
		event.preventDefault();
		validateInputs(user);
		actions.registerUser(user, props, setError, setSpinner);
	};
	const changePathName = () => {
		actions.setPathName("/login");
	};

	//****HTML****//
	return (
		<div className="backgroundUser">
			<div className="first-content">
				<h1 className="title-foodie">The Foodie Club</h1>
				<form className="signup" onChange={handleChange} onSubmit={handleSubmit}>
					<div className="signup-form">
						<h2 className="title-create-account">Create an account</h2>

						<input
							type="text"
							className="form-control placeholder"
							name="username"
							placeholder="User name here*"
						/>
						<input
							type="email"
							className="form-control placeholder"
							name="email"
							placeholder="Email here*"
						/>
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
									onClick={changePathName}
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
		</div>
	);
};

SignUp.propsType = {
	history: PropsType.object
};
export default SignUp;
