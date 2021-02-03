import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import PropsType from "prop-types";

const Login = props => {
	//VAR
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState({
		email: "",
		password: ""
	});
	const [spinner, setSpinner] = useState(false);

	const [error, setError] = useState({
		msg: "",
		status: false
	});

	// This should be in the Data Base. Just to check Login Funcionality

	//Check email, password and fields

	const validateInputs = user => {
		setSpinner(true);
		//aqui el se llamaría a la función que compruebe si los email está en base de datos, y en caso de existir que esté asociado al password dado
		console.log("Todo Bien");
		if (user.email.trim() == "" || user.password.trim() == "") {
			setError({
				msg: "All fields are required",
				status: true
			});
		} else {
			actions.login(user, props);
		}
		/*else {
			setError({
				msg: "Email or password incorrect",
				status: true
			});
			console.log("alguno vacio");
		}*/
	};

	//EVENTS

	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		validateInputs(user);
		actions.login(user, props);
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
						Dont have an account yet? <Link to="/signup"> click here</Link>
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
