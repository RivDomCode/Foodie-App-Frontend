import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryCheckboxes } from "./../components/CategoryCheckboxes.jsx";
import "../../styles/recipeForm.scss";
import AddIngredients from "../components/AddIngredients.jsx";
import PropsType from "prop-types";

import { Context } from "../store/appContext";

const RecipeForm = props => {
	const { store, actions } = useContext(Context);
	const [recipe, setRecipe] = useState({
		image: "",
		recipeTitle: "",
		categories: [],
		ingredients: [],
		elaboration: ""
	});
	const [spinner, setSpinner] = useState(false);
	const [error, setError] = useState({
		msg: "",
		status: false
	});

	const handleChange = event => {
		if (event.target.name == "image") {
			// console.log("entrado en imagen", event.target.files[0]);
			const read = new FileReader();
			read.onload = () => {
				if (read.readyState === 2) {
					// console.log("entrado en el read", read.result);
					setRecipe({
						...recipe,
						image: read.result
					});
				}
			};
			if (event.target.files[0] != undefined) {
				read.readAsDataURL(event.target.files[0]);
			}
		} else {
			setRecipe({ ...recipe, [event.target.name]: event.target.value });
		}
	};
	const handleSubmit = e => {
		e.preventDefault();
		const file = document.querySelector("#file");
		actions.createRecipe(recipe, file.files[0], props);

		console.log(recipe);
	};
	console.log(recipe);
	return (
		<div className="bodyRecipeForm">
			<h2 className="sectionTitle">New recipe</h2>

			<div>
				{recipe.image == "" ? (
					<img
						src="https://dummyimage.com/600x330/D8D8D8/888888&text=Click+the+button+to+upload+your+recipe+photo"
						className="recipeFormPhoto"
						alt="Photo Profile"
					/>
				) : (
					<img src={recipe.image} className="recipeFormPhoto" alt="newPhotoRecipe" />
				)}
			</div>
			<div>
				<input onChange={handleChange} className="fileSelect" id="file" type="file" name="image" />
			</div>

			<input
				type="text"
				id="inputTitleRecipe"
				className="form-control placeholder"
				name="recipeTitle"
				placeholder="Your recipe title"
				onChange={handleChange}
			/>

			<h4 className="h4title">Choose one or more categories for your recipe</h4>
			<CategoryCheckboxes name="categories" recipe={recipe} setRecipe={setRecipe} />

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
			<Link to={"/profile"}>
				<button type="button" className="buttonCancel">
					<div className="buttonTextCancel">Cancel</div>
				</button>
			</Link>
		</div>
	);
};

RecipeForm.propsType = {
	history: PropsType.object
};

export default RecipeForm;
