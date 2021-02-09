import React, { useState, useContext } from "react";
import "../../styles/tabs.scss";
import { Context } from "../store/appContext";
import "../../styles/favorite-post.scss";
import { useEffect } from "react";

const Favorite = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getFavoritesByUser();
	}, []);

	return (
		<div className="favorite-tab">
			{store.favorites.length == 0 ? (
				<p className="start-message">Your list of favorite recipes is empty.</p>
			) : (
				store.favorites.map((favorite, key) => {
					return (
						<div className="favorite-post" key={key}>
							<div className="row no-gutters">
								<div className="col-md-6 favorite-post-image">
									<img src={favorite.recipeImg} className="favorite-post-img" alt="..." />
								</div>
								<div className="col-md-6 right-side">
									<div className="card-body">
										<h5 className="favorite-title">{favorite.title}</h5>
									</div>
									<div className="back-to-edit-profile row">
										<i
											className="fas fa-heart like-favorite-post"
											onClick={() => {
												actions.deleteFavorites(favorite);
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
};
export default Favorite;
