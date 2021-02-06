import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import "../../styles/recipeForm.scss";
import AddIngredients from "../components/AddIngredients.jsx";

const RecipeForm = () => {
	const [recipe, setRecipe] = useState({
		recipeTitle: "",
		elaboration: "",
		category: [],
		ingredients: [],
		singleIngredient: ""
	});
	const [spinner, setSpinner] = useState(false);
	const [error, setError] = useState({
		msg: "",
		status: false
	});
	const handelChange = event => {
		console.log("recipe form", event.target.value, event.target.name);
		setRecipe({ ...recipe, [event.target.name]: event.target.value });
	};
	const handelSubmit = e => {
		e.preventDefault();
		console.log("estoy en el publishSubmit");
	};
	console.log(recipe);
	return (
		<div>
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
				<div>
					<h4 className="h4title">Choose one or more categories for your recipe</h4>
					<div className="categoryChecks">
						<Form.Group controlId="formBasicCheckbox" onChange={handelChange} onSubmit={handelSubmit}>
							<Form.Check type="checkbox" label="Meat" />
						</Form.Group>

						<Form.Group controlId="formBasicCheckbox" onChange={handelChange} onSubmit={handelSubmit}>
							<Form.Check type="checkbox" label="Vegan" />
						</Form.Group>

						<Form.Group controlId="formBasicCheckbox" onChange={handelChange} onSubmit={handelSubmit}>
							<Form.Check type="checkbox" label="Fish" />
						</Form.Group>

						<Form.Group controlId="formBasicCheckbox" onChange={handelChange} onSubmit={handelSubmit}>
							<Form.Check type="checkbox" label="Seafood" />
						</Form.Group>

						<Form.Group controlId="formBasicCheckbox" onChange={handelChange} onSubmit={handelSubmit}>
							<Form.Check type="checkbox" label="Pasta" />
						</Form.Group>

						<Form.Group controlId="formBasicCheckbox" onChange={handelChange} onSubmit={handelSubmit}>
							<Form.Check type="checkbox" label="Desserts" />
						</Form.Group>
					</div>
				</div>

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
