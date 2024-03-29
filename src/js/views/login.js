import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../styles/login.scss";
import PropsType from "prop-types";
import { Context } from "../store/appContext";

const Login = props => {
	//VAR
	const { actions } = useContext(Context);
	const [user, setUser] = useState({
		email: "",
		password: ""
	});
	const [spinner, setSpinner] = useState(false);

	const [error, setError] = useState({
		msg: "",
		status: false
	});
	useEffect(() => {
		actions.setPathName("/login");
	}, []);

	// This should be in the Data Base. Just to check Login Funcionality

	//Check email, password and fields

	const validateInputs = user => {
		setSpinner(true);
		if (user.email.trim() == "" || user.password.trim() == "") {
			setError({
				msg: "All fields are required",
				status: true
			});
			setSpinner(false);
		} else {
			actions.login(user, props, setError, setSpinner);
		}
	};

	//EVENTS

	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		validateInputs(user);
		actions.login(user, props, setError, setSpinner);
	};
	const changePathName = () => {
		actions.setPathName("/signup");
	};

	return (
		<div className="login-container">
			<h1 className="login-header">The Foodie Club</h1>
			<div className="login-content">
				<form className="login-form" onChange={handleChange} onSubmit={handleSubmit}>
					<h2 className="login-title">Login</h2>
					<div className="mb-3">
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="User name here *"
							name="email"
						/>
					</div>
					<div className="mb-3">
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Enter your password *"
							name="password"
						/>
					</div>
					{error.status ? (
						<div className="alert hidden alert-danger" role="alert" id="error">
							<span>
								{" "}
								{error.msg} <i className="fas fa-exclamation-circle" />
							</span>
						</div>
					) : (
						""
					)}
					{spinner == false ? (
						<div className="btn-s">
							<button type="submit" className="btn btn-login">
								Enter
							</button>
						</div>
					) : (
						<div className="btn-s">
							<button className="btn-load" id="load">
								<div className="spinner-border text-light" role="status" />
							</button>
						</div>
					)}

					<p className="text-login">
						Dont have an account yet?{" "}
						<Link onClick={changePathName} to="/signup">
							{" "}
							click here
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};
Login.propsType = {
	history: PropsType.object
};
export default Login;
