import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Login = props => {
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
		setUserInfo([...userInfo, user]);
		setUser({
			email: "",
			password: ""
		});
	};
	return (
		<div className="login">
			<h1>The Foodie Club</h1>
			<div className="login-form">
				<form onChange={handleChange} onSubmit={handleSubmit}>
					<h3>Log in</h3>
					<div className="mb-3">
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="User name here *"
							name="email"
							value={user.email}
						/>
					</div>
					<div className="mb-3">
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Enter your password *"
							name="password"
							value={user.password}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Enter
					</button>
					<p>
						Dont have an account yet? <Link to="/signup"> click here</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

Login.propTypes = {
	email: PropTypes.string,
	password: PropTypes.string
};

export default Login;
