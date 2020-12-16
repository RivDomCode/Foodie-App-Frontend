import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const [userInfo, setUserInfo] = useState([]);

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(user);
	};
	return (
		<div className="container">
			<h1>The Foodie Club</h1>
			<div className="login-form">
				<form className="login" onChange={handleChange} onSubmit={handleSubmit}>
					<h2 className="title">Login</h2>
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
					<div className="alert hidden alert-danger" role="alert" id="error">
						Email or password incorrect <i className="fas fa-exclamation-circle" />
					</div>

					<div className="btn-s">
						<button type="submit" className="btn btn-login">
							Enter
						</button>
					</div>

					<p className="acount">
						Dont have an account yet? <Link to="/signup"> click here</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
