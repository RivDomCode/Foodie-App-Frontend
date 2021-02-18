import React, { useContext, useState, useEffect } from "react";
import "../../styles/card.scss";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Card = ({ recipe, history }) => {
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

	const selectedRecipe = () => {
		console.log(recipe);
		actions.selectedRecipe(recipe);
		history.push("/detail");
	};

	return (
		<div className="component-card">
			<div className="card">
				<p onClick={selectedRecipe}>
					<img src={recipe.image} className="card-img-top" alt="..." />
				</p>
				<div className="card-body">
					<h5 className="card-title">{recipe.title}</h5>
					<p className="card-text">{recipe.elaboration}</p>
					<div className="row author-heart d-flex">
						<span>By {recipe.user_name}</span>{" "}
						<span>
							<div className="like">{heart()}</div>
						</span>
					</div>
					<p className="comment">
						<Link to={"/detail"} className="comments-link" onClick={selectedRecipe}>
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
	history: PropTypes.object,
	recipe: PropTypes.object
};

export default Card;
