import React from "react";
import PropTypes from "prop-types";

function IngredientList({ recipe, setRecipe }) {
	const deleteItem = index => {
		console.log(index);
		const newList = [...recipe.ingredients];
		console.log(newList);
		const deleteArray = newList.splice(index, 1);
		console.log(deleteArray);
		console.log(newList);
		setRecipe({ ...recipe, ingredients: newList });
	};
	return (
		<div>
			{recipe.ingredients.map((ingredients, index) => {
				//itemObj va a contener todos los items uno por uno
				return (
					<div key={index} className="input-group">
						<p>{ingredients}</p>
						<button className="buttonDeleteTask" onClick={() => deleteItem(index)}>
							<i className="fas fa-minus" />
						</button>
					</div>
				);
			})}
		</div>
	);
}

IngredientList.propTypes = {
	recipe: PropTypes.object,
	setRecipe: PropTypes.func
};

export default IngredientList;
