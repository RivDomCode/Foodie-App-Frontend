import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import { CategoryCheckboxes } from "./../components/CategoryCheckboxes.jsx";
import "../../styles/recipeForm.scss";
import AddIngredients from "../components/AddIngredients.jsx";
import { UploadImage } from "../components/UploadImage.jsx";
import { Context } from "../store/appContext";

const RecipeForm = () => {
	const { store, actions } = useContext(Context);
	const [recipe, setRecipe] = useState({
		image: "",
		recipeTitle: "",
		category: [],
		ingredients: [],
		elaboration: ""
	});
	const [spinner, setSpinner] = useState(false);
	const [error, setError] = useState({
		msg: "",
		status: false
	});

	const handleChange = event => {
		setRecipe({ ...recipe, [event.target.name]: event.target.value });
	};
	const handleSubmit = e => {
		actions.createRecipe(recipe);
		//e.preventDefault();
		//console.log(recipe);
	};

	return (
		<div>
			<h2 className="sectionTitle">New recipe</h2>

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
					onChange={handleChange}
				/>
			</div>
			<div>
				<h4 className="h4title">Choose one or more categories for your recipe</h4>
			</div>

			<CategoryCheckboxes name="category" recipe={recipe} setRecipe={setRecipe} />

			<AddIngredients recipe={recipe} setRecipe={setRecipe} />
			<div className="mb-3">
				<textarea
					className="textArea"
					id="exampleFormControlTextarea1"
					rows="3"
					placeholder="Elaboration here"
					name="elaboration"
					onChange={handleChange}
				/>
			</div>
			<button className="buttonPublish" onClick={handleSubmit}>
				<div className="buttonTextPublish">Publish recipe</div>
			</button>
			<button type="button" className="buttonCancel">
				<div className="buttonTextCancel">Cancel</div>
			</button>
		</div>
	);
};

export default RecipeForm;
