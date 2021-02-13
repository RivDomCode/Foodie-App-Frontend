import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import IngredientList from "./IngredientList.jsx";

const AddIngredients = ({ recipe, setRecipe }) => {
	const [ingredient, setIngredient] = useState("");

	const addItemToList = () => {
		//e.preventDefault();
		let newIngredients = [...recipe.ingredients, ingredient];
		setRecipe({
			...recipe,
			ingredients: newIngredients
		});
		setIngredient("");
	};

	return (
		<div>
			<div className="addingredientGroup">
				<input
					placeholder="Add your ingredient here"
					value={ingredient}
					className="inputIngredients"
					name="singleIngredient"
					onChange={() => setIngredient(event.target.value)}
				/>
				<button className="buttonAddIngredients" onClick={() => addItemToList()}>
					<i className="fas fa-plus " />
				</button>
			</div>
			<IngredientList recipe={recipe} setRecipe={setRecipe} />
		</div>
	);
};

AddIngredients.propTypes = {
	recipe: PropTypes.object,
	setRecipe: PropTypes.func
};

export default AddIngredients;
