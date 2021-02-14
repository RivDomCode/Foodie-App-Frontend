import React, { useState, useEffect, useContext } from "react";

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
		<div>
			<h2 className="sectionTitle">New recipe</h2>

			<div className="NoPhotoGreyBackgourd">
				<div className="noPhoto">
					<i className="fas fa-image" />
					<p className="textUploadPhoto">Click here to upload recipe photo</p>
					<div>
						<span>
							<input className="fileSelect" id="file" type="file" name="image" onChange={handleChange} />
							{recipe.image == "" ? null : <img src={recipe.image} />}
						</span>
					</div>
				</div>
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
			<button type="button" className="buttonCancel">
				<div className="buttonTextCancel">Cancel</div>
			</button>
		</div>
	);
};

RecipeForm.propsType = {
	history: PropsType.object
};

export default RecipeForm;
