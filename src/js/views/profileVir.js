import React from "react";
import "../../styles/profileVir.scss";
import { Link } from "react-router-dom";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";

const ProfileVir = () => {
	return (
		<div>
			<Navbar />
			<div className="allBody">
				<User />
				<Edit />
				<div className="addRecipeButton">
					<button type="button" className="buttonAdd">
						+Add new recipe
					</button>
				</div>

				<div className="user-data">
					<h5 className="name">Virginia Martínez</h5>
					<p className="email">email@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileVir;
