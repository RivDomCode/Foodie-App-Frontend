import React, { useState, useContext, useEffect } from "react";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";
import "../../styles/editProfile.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import PropsType from "prop-types";

const EditProfile = props => {
	const { store, actions } = useContext(Context);
	//let history = useHistory();
	useEffect(() => {
		actions.getUser();
	}, []);
	console.log(store.user);

	//const [userName, setUserName] = useState(store.user.user_name);
	const [userProfile, setUserProfile] = useState({
		image: store.user.urlImg,
		username: store.user.user_name
	});

	//Para recoger los datos modifcados
	const handleChange = event => {
		event.preventDefault();
		// setUserName(event.target.value);
		if (event.target.name == "image") {
			console.log("entrado en imagen", event.target.files[0]);
			const read = new FileReader();
			read.onload = () => {
				if (read.readyState === 2) {
					console.log("entrado en el read", read.result);
					setUserProfile({
						...userProfile,
						image: read.result
					});
				}
			};
			if (event.target.files[0] != undefined) {
				read.readAsDataURL(event.target.files[0]);
			}
		} else {
			setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
		}
	};
	///Para enviar los datos modificados
	const handleSubmit = event => {
		event.preventDefault();
		const file = document.querySelector("#photo");
		console.log("imagen", userProfile);
		actions.editProfile(userProfile, file.files[0], props);
		console.log(userProfile, "USER");
		/*actions.editProfile(userName () => {
			history.push("/profile");
		});*/
	};
	return (
		<div className="editProfile">
			<div className="allBody">
				<div className="container">
					<h5 className="title">Edit Profile</h5>
					{/*<form onChange={handleChange} onSubmit={handleSubmit}>*/}
					<div className="user">
						{/*<User /> este es el icono de user*/}
						{store.user.urlImg == "" ? null : <img src={store.user.urlImg} className="img-top" alt="..." />}
						<input onChange={handleChange} className="fileSelect" id="photo" type="file" name="image" />
					</div>

					<div className="user-data">
						<div className="name">
							<input
								name="username"
								className="name-input"
								type="text"
								defaultValue={store.user.user_name}
								onChange={handleChange}
							/>
						</div>
						<p className="email" name="email">
							{store.user.email}
						</p>
					</div>
					<div className="buttons-edit">
						<button type="submit" className="buttonSaveChange" onClick={handleSubmit}>
							<p className="text-button">Save Changes</p>
						</button>
						<button type="submit" className="buttonCancel">
							<p className="text-button">Cancel</p>
						</button>
					</div>
					{/*</form>*/}
				</div>
			</div>
		</div>
	);
};
EditProfile.propsType = {
	history: PropsType.object
};
export default EditProfile;
