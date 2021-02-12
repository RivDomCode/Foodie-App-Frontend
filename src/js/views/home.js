import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getFavorites();
	}, []);

	return (
		<div className="Home">
			<div className="col-sm-12 col-3">
				<div className="row first-line d-flex justify-content-sm-center justif">
					{store.recipes.length == 0 ? (
						<p className="start-message">Recipes is empty</p>
					) : (
						store.recipes.map((recipe, index) => {
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
