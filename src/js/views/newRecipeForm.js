import React, { useState } from "react";

import "../../styles/newRecipeForm.scss";
import Navbar from "../components/Navbar.jsx";

const NewRecipeForm = () => {
	const [recipe, setRecipe] = useState({
		recipeTitle: "",
		elaboration: ""
	});
	const [spinner, setSpinner] = useState(false);
	const [error, setError] = useState({
		msg: "",
		status: false
	});
	const handelChange = event => {
		console.log(recipe);
		setRecipe({ ...recipe, [event.target.name]: event.target.value });
	};
	const handelSubmit = e => {
		e.preventDefault();
		console.log("estoy en el publishSubmit");
	};

	return (
		<div>
			<Navbar />
			<h2 className="sectionTitle">New recipe</h2>
			<form onChange={handelChange} onSubmit={handelSubmit}>
				<div className="NoPhotoGreyBackgourd">
					<div className="noPhoto">
						<i className="fas fa-image" />
						<p className="textUploadPhoto">Click here to upload recipe photo</p>
					</div>
				</div>
				<div className="mb-3 recipeTitle">
					<input
						type="text"
						className="form-control placeholder"
						name="recipeTitle"
						placeholder="Your recipe title"
					/>
				</div>

				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Add the ingredients here"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>
					<button className="buttonAddIngredients" type="button">
						<div className="addIconDropdown">
							<i className="fas fa-plus" />
						</div>
					</button>
				</div>
				<div className="mb-3">
					<textarea
						className="textArea"
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="Elaboration here"
						name="elaboration"
					/>
				</div>
				<button type="button" className="buttonPublish">
					<div className="buttonTextPublish">Publish recipe</div>
				</button>
				<button type="button" className="buttonCancel">
					<div className="buttonTextCancel">Cancel</div>
				</button>
			</form>
		</div>
	);
};

export default NewRecipeForm;
