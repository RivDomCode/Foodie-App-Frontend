import React, { useState, useContext, useEffect } from "react";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";
import "../../styles/editProfile.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const EditProfile = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	useEffect(() => {
		actions.getUser();
	}, []);
	console.log(store.user);

	const [userName, setUserName] = useState(store.user.user_name);

	//Para recoger los datos modifcados
	const handleChange = event => {
		event.preventDefault();
		setUserName(event.target.value);
	};
	///Para enviar los datos modificados
	const handleSubmit = event => {
		event.preventDefault();
		actions.editProfile(userName, () => {
			history.push("/profile");
		});
	};
	return (
		<div className="editProfile">
			<div className="allBody">
				<div className="container">
					<h5 className="title">Edit Profile</h5>
					<form onChange={handleChange} onSubmit={handleSubmit}>
						<User />
						<p className="upload-photo">Upload Photo</p>
						<div className="user-data">
							<div className="name">
								<input
									name="username"
									className="name-input"
									type="text"
									defaultValue={store.user.user_name}
								/>
							</div>
							<p className="email" name="email">
								{store.user.email}
							</p>
						</div>
						<div className="buttons-edit">
							<button type="submit" className="buttonSaveChange">
								<p className="text-button">Save Changes</p>
							</button>
							<button type="submit" className="buttonCancel">
								<p className="text-button">Cancel</p>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
