import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import PropTypes from "prop-types";
import NavbarUserIconProfile from "../../icons/NavbarUserIconProfile.jsx";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<Link to={"/"} className="navbar-brand" href="#">
						The Foodie Club
					</Link>
					<div className="profileIcon">
						<Link to={"/profile"}>
							<NavbarUserIconProfile />
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

Navbar.propTypes = {
	webSection: PropTypes.string
};
