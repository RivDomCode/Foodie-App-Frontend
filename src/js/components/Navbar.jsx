import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import PropTypes from "prop-types";
import NavbarUserIconProfile from "../../icons/NavbarUserIconProfile.jsx";
import { Context } from "../store/appContext";

const Navbar = () => {
	const { actions } = useContext(Context);
	let buttons;
	if (actions.userLogged()) {
		buttons = (
			<Link className="profileIcon" to={"/profile"}>
				<NavbarUserIconProfile />
			</Link>
		);
	} else {
		buttons = (
			<Link className="profileIcon" id="loginButton" to={"/login"}>
				Go to login
			</Link>
		);
	}
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<Link to={"/"} className="navbar-brand" href="#">
						The Foodie Club
					</Link>

					{buttons}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

Navbar.propTypes = {
	webSection: PropTypes.string
};
