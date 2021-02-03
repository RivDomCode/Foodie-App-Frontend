import React from "react";
import "../../styles/home.scss";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import PropTypes from "prop-types";

export const Home = props => (
	<div className="Home">
		<div className="col-sm-12 col-3">
			<div className="row first-line d-flex justify-content-sm-center justif">
				<Card
					recipeImg="https://cdn.pixabay.com/photo/2016/02/19/10/00/food-1209007_960_720.jpg"
					username="Toti Williams"
					recipeTitle="Chiles del infierno"
				/>
				<Card
					recipeImg="https://cdn.pixabay.com/photo/2016/11/23/18/31/close-up-1854245_960_720.jpg"
					username="Manolito Garcia"
					recipeTitle="Pasta el Pesto"
				/>
				<Card
					recipeImg="https://cdn.pixabay.com/photo/2016/04/15/09/03/food-1330531_960_720.jpg"
					username="nino tototot"
					recipeTitle="Curry de pollo"
				/>
				<Card
					recipeImg="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg"
					username="ramiro ddfd"
					recipeTitle="Pizza vegetal"
				/>
			</div>
		</div>
	</div>
);
