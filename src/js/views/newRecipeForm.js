<<<<<<< HEAD
import React from "react";
import "../../styles/newRecipeForm.scss";

const NewRecipeForm = () => {
	return (
		<div>
			<h2 className="sectionTitle">New recipe</h2>
			<div className="NoPhotoGreyBackgourd">
				<div className="noPhoto">
					<i className="fas fa-image" />
				</div>
			</div>
			<div className="mb-3">
				<input
					type="text"
					className="form-control placeholder"
					name="Recipe title"
					placeholder="Your recipe title"
				/>
			</div>
			<select className="form-select" aria-label="Default select example">
				<option selected>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
		</div>
	);
};

export default NewRecipeForm;
=======
import React from "react";
>>>>>>> 769a307 (creada branch new recipe form, para el formulario que publica recetas nuevas)
