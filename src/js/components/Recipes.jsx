import React, { useState, useContext, useEffect } from "react";
import "../../styles/tabs.scss";
import { Context } from "../store/appContext";
import Card from "../components/Card.jsx";

const Recipes = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getRecipeByUser();
	}, []);
	return (
		<div className="recipes-tab">
			<div className="col-sm-12 col-2">
				<div className="row first-line d-flex justify-content-sm-center justif">
					{store.myRecipes.length == 0 ? (
						<p className="start-message">You have not published any recipe yet.</p>
					) : (
						store.myRecipes.map((recipe, index) => {
							return <Card recipe={recipe} key={index} />;
						})
					)}
				</div>
			</div>
		</div>
	);
};
export default Recipes;
