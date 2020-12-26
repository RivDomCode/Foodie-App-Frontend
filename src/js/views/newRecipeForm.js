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
			<div className="mb-3 recipeTitle">
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
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Add the ingredients here"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
				<button className="btn btn-outline-secondary" type="button" id="button-addon2">
					+
				</button>
			</div>
			<div className="mb-3">
				<textarea
					className="textArea"
					id="exampleFormControlTextarea1"
					rows="3"
					placeholder="Elaboration here"
				/>
			</div>
			<button type="buttonPublishRecipe" className="btn btn-warning">
				Publish recipe
			</button>
			<button type="buttonCancel" className="btn btn-warning">
				Cancel
			</button>
		</div>
	);
};

export default NewRecipeForm;
