import React from "react";
import PropTypes from "prop-types";

function IngredientList({ recipe, setRecipe }) {
	//console.log("props", props);
	const deleteItem = (e, index) => {
		//const newList = props.itemList.filter(itemObj => {
		//return itemObj.label != key; //Va a devolver todos los items de la lista menos el item que hemos borrado
		//});
		//props.updateItemList(newList);
		e.preventDefault();
		const newList = recipe.ingredients;

		const deleteArray = newList.splice(index, 1);
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
						<button className="buttonDeleteTask" onClick={e => deleteItem(e, index)}>
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
