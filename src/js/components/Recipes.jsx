import React, { useState, useContext, useEffect } from "react";
import "../../styles/tabs.scss";
import { Context } from "../store/appContext";
import Card from "../components/Card.jsx";

const Recipes = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getRecipe(true);
	}, []);
	return (
		<div className="recipes-tab">
			{store.myRecipes.length == 0 ? (
				<p className="start-message">You have not published any recipe yet.</p>
			) : (
				store.myRecipes.map((recipe, index) => {
					return <Card recipe={recipe} key={index} />;
				})
			)}
		</div>
	);
};
export default Recipes;
