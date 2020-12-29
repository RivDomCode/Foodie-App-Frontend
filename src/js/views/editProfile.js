import React, { useState } from "react";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";
import "../../styles/editProfile.scss";

const EditProfile = () => {
	return (
		<div>
			<Navbar />
			<div className="allBody">
				<div className="container">
					<h5 className="title">Edit Profile</h5>
					<User />
					<p className="upload-photo">Upload Photo</p>
				</div>
				<div className="user-data">
					<h5 className="name">Name LastName</h5>
					<p className="email">email@gmail.com</p>
				</div>
				<div className="buttons-edit">
					<button type="submit" className="buttonSaveChange">
						<p className="text-button">Save Changes</p>
					</button>
					<button type="submit" className="buttonCancel">
						<p className="text-button">Cancel</p>
					</button>
				</div>
			</div>
		</div>
	);
};
export default EditProfile;
