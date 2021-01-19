import React, { useState, useContext } from "react";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";
import "../../styles/editProfile.scss";
import { Context } from "../store/appContext";

const EditProfile = () => {
	const { store, actions } = useContext(Context);
	console.log(store.user);

	const [user, setUser] = useState({
		username: store.user.username,
		email: store.user.email
	});
	console.log(user, "holaaaa");

	//Para recoger los datos modifcados
	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
		console.log(user);
	};
	///Para enviar los datos modificados
	const handleSubmit = event => {
		event.preventDefault();
		///****LLAMAR A LA FUNCION DE EDITAR PERFIL****//
		//actions.editProfile(user.username);
	};
	return (
		<>
			<Navbar />
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
									defaultValue={user.username}
								/>
							</div>
							<p className="email" name="email">
								{user.email}
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
		</>
	);
};

export default EditProfile;
