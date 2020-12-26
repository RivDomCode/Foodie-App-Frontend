import React from "react";
import "../../styles/profile.scss";
import User from "../../icons/user.jsx";
import Edit from "../../icons/edit.jsx";
import Navbar from "../components/Navbar.jsx";


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

				<div className="row tab">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						<li className="nav-item" role="presentation">
							<a
								className="nav-link active text-tab"
								id="recipes-tab"
								data-bs-toggle="tab"
								href="#recipes"
								role="tab"
								aria-controls="recipes"
								aria-selected="true">
								My recipes
							</a>
						</li>
						<li className="nav-item" role="presentation">
							<a
								className="nav-link text-tab"
								id="favorite-tab"
								data-bs-toggle="tab"
								href="#favorite"
								role="tab"
								aria-controls="favorite"
								aria-selected="false">
								Favorite
							</a>
						</li>
					</ul>
				</div>

				<div className="tab-content" id="myTabContent">
					<div
						className="tab-pane fade show active"
						id="recipes"
						role="tabpanel"
						aria-labelledby="recipes-tab">
						Estoy en mis recetas
					</div>
					<div className="tab-pane fade" id="favorite" role="tabpanel" aria-labelledby="favorite-tab">
						Estoy en vavoritos
					</div>
				</div>
			</div>
		</div>
	);
};
export default Profile;
