import React, { useContext } from "react";
import "../../styles/home.scss";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="Home">
			<Navbar />
			<div className="col-sm-12 col-3">
				<div className="row first-line d-flex justify-content-sm-center justif">
					{store.recipes.length == 0 ? (
						<p>No hay recetas</p>
					) : (
						store.recipes.map((recipe, index) => {
							return <Card recipe={recipe} key={index} />;
						})
					)}
				</div>
			</div>
		</div>
	);
};
