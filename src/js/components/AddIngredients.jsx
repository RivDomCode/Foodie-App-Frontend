import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import IngredientList from "./IngredientList.jsx";

const AddIngredients = ({ recipe, setRecipe }) => {
	const addItemToList = () => {
		const newIngredient = [...recipe.ingredients];
		console.log(newIngredient);
		newIngredient.push(recipe.singleIngredient);
		console.log(newIngredient);
		setRecipe({
			...recipe,
			ingredients: newIngredient,
			singleIngredient: ""
		});
	};
	useEffect(
		() => {
			// console.log(recipe, "qskdhfkqhsdfhqsdfnmqsdfqdjfqsdmlfmqsjdfq");
		},
		[recipe]
	);
	return (
		<div className="addingredientGroup">
			<div>
				<input
					placeholder="Add your ingredient here"
					value={recipe.singleIngredient}
					className="inputIngredients"
					name="singleIngredient"
				/>
				<button className="buttonAddIngredients" onClick={addItemToList}>
					<i className="fas fa-plus " />
				</button>
			</div>

			<div>
				<IngredientList recipe={recipe} setRecipe={setRecipe} />
			</div>
		</div>
	);
};

AddIngredients.propTypes = {
	recipe: PropTypes.object,
	setRecipe: PropTypes.func
};

export default AddIngredients;
