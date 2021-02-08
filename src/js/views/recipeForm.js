import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { CategoryCheckboxes } from "./../components/CategoryCheckboxes.jsx";
import "../../styles/recipeForm.scss";
import AddIngredients from "../components/AddIngredients.jsx";
import { UploadImage } from "../components/UploadImage.jsx";

const RecipeForm = () => {
	const [recipe, setRecipe] = useState({
		recipeTitle: "",
		elaboration: "",
		category: [],
		singleCategory: "",
		ingredients: [],
		singleIngredient: ""
	});
	const [spinner, setSpinner] = useState(false);
	const [error, setError] = useState({
		msg: "",
		status: false
	});

	const handelChange = event => {
		// console.log("recipe form", event.target.value, event.target.name);
		setRecipe({ ...recipe, [event.target.name]: event.target.value });
		// console.log(recipe);
	};
	const handelSubmit = e => {
		e.preventDefault();
		console.log("estoy en el publishSubmit");
	};
	// console.log(recipe);

	return (
		<div>
			<h2 className="sectionTitle">New recipe</h2>
			<form onChange={handelChange} onSubmit={handelSubmit}>
				<div className="NoPhotoGreyBackgourd">
					<div className="noPhoto">
						<i className="fas fa-image" />
						<p className="textUploadPhoto">Click here to upload recipe photo</p>
					</div>
					<UploadImage />
				</div>
				<div className="mb-3 recipeTitle">
					<input
						type="text"
						className="form-control placeholder"
						name="recipeTitle"
						placeholder="Your recipe title"
					/>
				</div>
				<div>
					<h4 className="h4title">Choose one or more categories for your recipe</h4>
				</div>

				<CategoryCheckboxes name="category" onChange={handelChange} recipe={recipe} setRecipe={setRecipe} />

				<AddIngredients recipe={recipe} setRecipe={setRecipe} />
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

export default RecipeForm;
