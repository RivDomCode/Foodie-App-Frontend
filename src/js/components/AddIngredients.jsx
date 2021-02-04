import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import IngredientList from "./IngredientList.jsx";

const AddIngredients = () => {
	const [currentItem, setCurrentItem] = useState(null);
	const [itemList, updateItemList] = useState([]);
	const onChangeHandelr = e => {
		//console.log("check current value", e.target.value);
		setCurrentItem(e.target.value); //guarda el nuevo Item introducido por el usuario
	};
	const addItemToList = () => {
		//key es para añadirle un identificador único a cada item y así poder borrarlos de manera individual.
		updateItemList([...itemList, { label: currentItem, done: false }]); //va a ir añadiendo los nuevos items empujando en la lista los que ya existan. Nos saca la lista actualizada.

		//console.log("lista items", itemList);
		setCurrentItem(""); //hace que se vacíe el input después de añadir un item.
	};

	return (
		<div className="App">
			<div className="App-body">
				<div className="Input-body">
					<input placeholder="Write your task..." value={currentItem} onChange={onChangeHandelr} />
					<button className="buttonAddItem" onClick={addItemToList}>
						<i className="fas fa-plus" />
					</button>
				</div>
			</div>
			<div>
				<IngredientList itemList={itemList} updateItemList={updateItemList} />
			</div>
		</div>
	);
};

export default AddIngredients;
