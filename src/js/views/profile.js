import React from "react";
import "../../styles/profile.scss";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";
import Tabs from "../components/Tabs.jsx";

const Profile = () => {
	return (
		<div>
			<Navbar />
			<div className="allBody">
				<div className="container">
					<User />
					<Edit />
				</div>
				<div className="user-data">
					<h5 className="name">Virginia Martínez</h5>
					<p className="email">email@gmail.com</p>
				</div>

				<div className="addRecipeButton">
					<button type="button" className="buttonAdd">
						+ Add new recipe
					</button>
				</div>
				{/* Tabs */}
				<Tabs />
			</div>
		</div>
	);
};
export default Profile;
