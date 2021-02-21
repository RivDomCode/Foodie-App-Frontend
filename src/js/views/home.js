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
		actions.setPathName("/");
	}, []);

	return (
		<div className="homeBody">
			<div>
				<img
					className="photoCoverHome"
					src="https://res.cloudinary.com/df9k0kc8n/image/upload/v1613820053/photo_cover_4096x1539_k2empj.png"
					alt="homePhotoCover"
				/>
			</div>

			<div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-11" id="cardsBody">
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
