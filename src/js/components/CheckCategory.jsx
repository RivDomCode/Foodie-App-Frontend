import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CheckCategory = () => {
	const { store, actions } = useContext(Context);
	if (store.category.length == 0) {
		return <i className="far fa-square" />;
	} else {
		let isFound = false;
		store.category.map(recipe => {
			if (recipe.title == recipeTitle) {
				isFound = true;
			}
		});
		if (isFound) {
			return <i className="fas fa-check-square" />;
		} else {
			return <i className="far fa-square" />;
		}
	}
};

export default CheckCategory;
