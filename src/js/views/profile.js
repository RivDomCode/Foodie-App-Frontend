import React, { useContext, useState, useEffect } from "react";
import "../../styles/profile.scss";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";
import Tabs from "../components/Tabs.jsx";
import { Link } from "react-router-dom";
import Logout from "../../icons/logout.jsx";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const Profile = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	useEffect(() => {
		actions.getUser();
	}, []);
	return (
		<div className="profile">
			<div className="allBody">
				<div className="container">
					<User />
					<Edit />
				</div>
				<div className="user-data">
					<h5 className="name">{store.user.user_name}</h5>
					<p className="email">{store.user.email}</p>
				</div>

				<div className="addRecipeButton">
					<Link to="/newRecipeForm">
						<button type="button" className="buttonAdd">
							+ Add new recipe
						</button>
					</Link>
				</div>
				{/* Tabs */}
				<Tabs />
			</div>

			<Logout />
		</div>
	);
};
export default Profile;
