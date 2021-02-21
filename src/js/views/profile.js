import React, { useContext, useState, useEffect } from "react";
import "../../styles/profile.scss";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";
import Tabs from "../components/Tabs.jsx";
import { Link } from "react-router-dom";
import Logout from "../../icons/logout.jsx";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Profile = props => {
	//console.log(props.history.location.state, "****************************");
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getUser();
		actions.sendToLogin(props);
	}, []);
	return (
		<div className="profile">
			<div className="allBody">
				<div className="container">
					{/*<User />foto statica user*/}
					<img src={store.user.urlImg} className="img-user-profile" alt="..." />
					<Edit />
				</div>
				<div className="user-data">
					<h5 className="name">{store.user.user_name}</h5>
					<p className="email">{store.user.email}</p>
				</div>

				<div className="addRecipeButton">
					<Link
						to={{
							pathname: "/newRecipeForm",
							state: {
								title: "Add new recipe"
							}
						}}>
						<button type="button" className="buttonAdd">
							+ Add new recipe
						</button>
					</Link>
				</div>
				<Tabs />
			</div>
			<Logout />
		</div>
	);
};
Profile.propTypes = {
	history: PropTypes.any,
	location: PropTypes.object,
	recipe: PropTypes.object,
	state: PropTypes.object
};
export default Profile;
