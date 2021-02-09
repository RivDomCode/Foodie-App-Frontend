import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import IngredientList from "./IngredientList.jsx";

const AddIngredients = ({ recipe, setRecipe }) => {
	const [ingredient, setIngredient] = useState("");

	const addItemToList = e => {
		e.preventDefault();
		let newIngredients = [...recipe.ingredients, ingredient];
		setRecipe({
			...recipe,
			ingredients: newIngredients
		});
		setIngredient("");
	};

	return (
		<div className="addingredientGroup">
			<div>
				<input
					placeholder="Add your ingredient here"
					value={ingredient}
					className="inputIngredients"
					name="singleIngredient"
					onChange={() => setIngredient(event.target.value)}
				/>
				<button className="buttonAddIngredients" onClick={e => addItemToList(e)}>
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
