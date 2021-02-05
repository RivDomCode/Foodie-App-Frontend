import React from "react";
import PropTypes from "prop-types";

function IngredientList(props) {
	//console.log("props", props);
	const deleteItem = key => {
		const newList = props.itemList.filter(itemObj => {
			return itemObj.label != key; //Va a devolver todos los items de la lista menos el item que hemos borrado
		});
		props.updateItemList(newList);
	};
	return (
		<div>
			{props.itemList.map((itemObj, index) => {
				//itemObj va a contener todos los items uno por uno
				return (
					<div key={index} className="input-group">
						<p>{itemObj.label}</p>
						<button className="buttonDeleteTask" onClick={() => deleteItem(itemObj.label)}>
							<i className="fas fa-minus" />
						</button>
					</div>
				);
			})}
		</div>
	);
}

IngredientList.propTypes = {
	itemList: PropTypes.array,
	updateItemList: PropTypes.func
};

export default IngredientList;
