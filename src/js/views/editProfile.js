import React, { useState, useContext, useEffect } from "react";
import "../../styles/editProfile.scss";
import { Context } from "../store/appContext";
import PropsType from "prop-types";

const EditProfile = props => {
	const { store, actions } = useContext(Context);
	const [error, setError] = useState({
		msg: "",
		status: false
	});
	useEffect(
		() => {
			actions.getUser();
		},
		[userProfile]
	);
	const [userProfile, setUserProfile] = useState({
		image: "",
		user_name: ""
	});
	//Para recoger los datos modifcados
	const handleChange = event => {
		event.preventDefault();
		if (event.target.name == "image") {
			const read = new FileReader();
			read.onload = () => {
				if (read.readyState === 2) {
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
		actions.editProfile(userProfile, file.files[0], props, setError);
	};
	return (
		<div className="editProfile">
			<div className="allBody">
				<div className="container">
					<h5 className="title">Edit Profile</h5>
					<div className="user">
						{userProfile.image == "" ? (
							<img src={store.user.urlImg} className="img-top" alt="Photo Profile" />
						) : (
							<img src={userProfile.image} className="img-top" alt="NewPhoto Profile" />
						)}
						<input onChange={handleChange} className="fileSelect" id="photo" type="file" name="image" />
					</div>

					<div className="user-data">
						<div className="name">
							{/**inicio mensaje de error */}
							{error.status ? (
								<div className="alert" id="error">
									<p>
										{" "}
										{error.msg}
										<i className="fas fa-exclamation-circle" id="icono-msn" />
									</p>
								</div>
							) : (
								""
							)}
							{/**fin mensaje de error */}
							<input
								name="user_name"
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
				</div>
			</div>
		</div>
	);
};
EditProfile.propsType = {
	history: PropsType.object
};
export default EditProfile;
