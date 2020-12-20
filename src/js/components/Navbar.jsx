import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss"

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						The Foodie Club
					</a>
					<button type="button" className="btn btn-success">
						Success
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
