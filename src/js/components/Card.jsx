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
			if (isFound) {
				return (
					<i
						className="fas fa-heart like"
						onClick={() => {
							actions.deleteFavorites(idFavorite);
						}}
					/>
				);
			} else {
				return (
					<i
						className="far fa-heart like"
						onClick={() => {
							actions.addToFavorites(recipe);
						}}
					/>
				);
			}
		}
	};

	const selectedRecipe = () => {
		actions.selectedRecipe(recipe);
		localStorage.setItem("recipeDetail", JSON.stringify(recipe));
		history.push("/detail");
	};

	const maxLength = 80;

	return (
		<div className="component-card">
			<div className="card">
				<p onClick={selectedRecipe}>
					<img src={recipe.image} className="card-img-top" alt="..." />
				</p>
				<div className="card-body">
					<h5 className="card-title">{recipe.title}</h5>
					<p className="card-text">
						{recipe.elaboration.length > maxLength ? (
							<p>
								{`${recipe.elaboration.substring(0, maxLength)}`}
								<Link to={"/detail"} onClick={selectedRecipe}>
									...
								</Link>
							</p>
						) : (
							<p>{recipe.elaboration}</p>
						)}
						{/*recipe.elaboration*/}
					</p>
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
	history: PropTypes.object,
	recipe: PropTypes.object
};

export default Card;
