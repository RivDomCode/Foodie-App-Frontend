import React, { useContext, useState } from "react";
import "../../styles/profile.scss";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";
import Tabs from "../components/Tabs.jsx";
import { Link } from "react-router-dom";
import Logout from "../../icons/logout.jsx";
import { Context } from "../store/appContext";

const Profile = () => {
	const { store } = useContext(Context);
	const [user, setUser] = useState({
		username: store.user.username,
		email: store.user.email
	});
	return (
		<div>
			<Navbar />
			<div className="allBody">
				<div className="container">
					<User />
					<Edit />
				</div>
				<div className="user-data">
					<h5 className="name">{user.username}</h5>
					<p className="email">{user.email}</p>
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
			<Link to="/login">
				<Logout />
			</Link>
		</div>
	);
};
export default Profile;
