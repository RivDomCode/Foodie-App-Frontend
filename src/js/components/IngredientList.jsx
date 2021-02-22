import React from "react";
import PropTypes from "prop-types";

function IngredientList({ recipe, setRecipe }) {
	const deleteItem = index => {
		//const newList = props.itemList.filter(itemObj => {
		//return itemObj.label != key; //Va a devolver todos los items de la lista menos el item que hemos borrado
		//});
		//props.updateItemList(newList);
		//e.preventDefault();
		const newList = recipe.ingredients;

		const deleteArray = newList.splice(index, 1);

		setRecipe({ ...recipe, ingredients: newList });
	};

	return (
		<div className="row rowIngredients">
			{recipe.ingredients.map((ingredients, index) => {
				//itemObj va a contener todos los items uno por uno
				return (
					<div key={index} className="ingredientsList col-2">
						<p id="ingredientText">{ingredients}</p>
						<button className="buttonDeleteTask" onClick={() => deleteItem(index)}>
							<i className="fas fa-times" />
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
