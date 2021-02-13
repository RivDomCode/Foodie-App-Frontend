import React, { useContext, useState, useEffect } from "react";
import "../../styles/card.scss";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Card = ({ recipe }) => {
	const { store, actions } = useContext(Context);
	const heart = () => {
		if (store.favorites.length == 0) {
			console.log("principio funcion");

			return <i className="far fa-heart like" onClick={() => actions.addToFavorites(recipe)} />;
		} else {
			let isFound = false;
			let idFavorite = null;
			store.favorites.map(recipeFavorite => {
				if (recipeFavorite.recipe_id == recipe.id) {
					isFound = true;
					idFavorite = recipeFavorite.id;
				}
			});
			console.log(isFound, idFavorite);
			if (isFound) {
				return (
					<i
						className="fas fa-heart like"
						onClick={() => {
							actions.deleteFavorites(idFavorite);
							console.log(isFound, idFavorite);
						}}
					/>
				);
			} else {
				return (
					<i
						className="far fa-heart like"
						onClick={() => {
							actions.addToFavorites(recipe);
							console.log(isFound, idFavorite);
						}}
					/>
				);
			}
		}
	};
	return (
		<div className="component-card">
			<div className="card">
				<Link to={"/detail"}>
					<img src={recipe.image} className="card-img-top" alt="..." />
				</Link>
				<div className="card-body">
					<h5 className="card-title">{recipe.title}</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti hic ad delectus,
						blanditiis ratione, tempora tenetur veritatis eum accusamus ullam itaque facilis dolore, rem
					</p>
					<div className="row author-heart d-flex">
						<span>By {recipe.user_name}</span>{" "}
						<span>
							<div className="like">{heart()}</div>
						</span>
					</div>
					<p className="comment">
						<Link to={"/detail"} className="comments-link">
							Read all comments
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	/*	recipeImg: PropTypes.string,
	username: PropTypes.string,
    recipeTitle: PropTypes.string*/
	recipe: PropTypes.object
};

export default Card;
