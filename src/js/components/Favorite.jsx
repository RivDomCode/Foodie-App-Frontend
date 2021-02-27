import React, { useState, useContext, useEffect } from "react";
import "../../styles/tabs.scss";
import { Context } from "../store/appContext";
import "../../styles/favorite-post.scss";
import PropTypes from "prop-types";

const Favorite = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getFavorites();
	}, []);
	const selectedRecipe = recipe => {
		console.log(recipe);
		actions.selectedRecipe(recipe);
		localStorage.setItem("recipeDetail", JSON.stringify(recipe));
		props.history.push("/detail");
	};

	return (
		<div className="favorite-tab">
			{store.favorites.length == 0 ? (
				<p className="start-message">Your list of favorite recipes is empty.</p>
			) : (
				store.favorites.map((favorite, key) => {
					console.log(favorite);
					return (
						<div className="favorite-post" key={key}>
							<div className="row no-gutters">
								<img src={favorite.image} className="favorite-post-img" alt="..." />

								<div className="col-md-6 right-side">
									<div className="text-title">
										<p className="post-title">{favorite.title}</p>
									</div>
								</div>
								<div className="back-to-edit-profile row">
									<i
										className="fas fa-heart like-favorite-post"
										onClick={() => {
											actions.deleteFavorites(favorite.id);
										}}
									/>
								</div>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
};

Favorite.propTypes = {
	history: PropTypes.object
};

export default Favorite;
