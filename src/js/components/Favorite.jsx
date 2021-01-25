import React, { useState, useContext } from "react";
import "../../styles/tabs.scss";
import { Context } from "../store/appContext";

const Favorite = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="favorite-tab">
			{store.favorites.length == 0 ? (
				<p className="start-message">Your list of favorite recipes is empty.</p>
			) : (
				store.favorites.map((favorite, key) => {
					return (
						<p key={key}>
							{favorite}
							<i
								className="fas fa-times"
								onClick={() => {
									actions.deleteFavorites(favorite.id);
								}}
							/>
						</p>
					);
				})
			)}
		</div>
	);
};
export default Favorite;
