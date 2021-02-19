import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Category } from "../components/Category.jsx";
import Card from "../components/Card.jsx";
import { Context } from "../store/appContext";

export const Home = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getFavorites();
		actions.setPathName("/");
	}, []);

	const categoryButtons = store.categories.map((category, index) => {
		return <Category key={index} category={category} />;
	});
	return (
		<div className="Home">
			<div className="categories">{categoryButtons}</div>
			<div className="col-sm-12 col-3">
				<div className="row first-line d-flex justify-content-sm-center justif">
					{store.recipes.length == 0 ? (
						<p className="start-message">Recipes is empty</p>
					) : (
						store.recipes.map((recipe, index) => {
							console.log(recipe, index);
							return <Card recipe={recipe} key={index} />;
						})
					)}
				</div>
			</div>
			<div className="see-more">
				<button className="btn-see-more btn" onClick={() => actions.getRecipe(store.page)}>
					See more...
				</button>
			</div>
		</div>
	);
};
