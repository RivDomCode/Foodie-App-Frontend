import React from "react";
import "../../styles/profile.scss";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";
import Tabs from "../components/Tabs.jsx";
import { Link } from "react-router-dom";

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
					<h5 className="name">Name LastName</h5>
					<p className="email">email@gmail.com</p>
				</div>

				<div className="addRecipeButton">
					<Link to="/newRecipeForm">
						<button type="button" className="buttonAdd">
							+ Add new recipe
						</button>
					</Link>
				</div>
				{/* Tabs */}
				<Tabs>
					<div label="recipes-tab">
						<p className="start-message">You have not published any recipe yet.</p>
					</div>
					<div label="favorite-tab">
						<p className="start-message">Your list of favorite recipes is empty.</p>
					</div>
				</Tabs>
			</div>
		</div>
	);
};
export default Profile;
