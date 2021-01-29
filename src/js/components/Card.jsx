import React, { useContext, useState } from "react";
import "../../styles/card.scss";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Card = ({ recipe }) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="component-card">
			<div className="card">
				<Link to={"/detail"}>
					<img src={recipe.image} className="card-img-top" alt="..." />
				</Link>
				<div className="card-body">
					<h5 className="card-title">{recipe.title}</h5>
					<p className="card-text">
						<p>{recipe.ingredients}</p>
						<p>{recipe.elaboration}</p>
					</p>
					<div className="row author-heart d-flex">
						<span>By {recipe.user_name}</span>{" "}
						<span>
							<div className="like" onClick={() => actions.addToFavorites(recipe.title)}>
								{store.favorites.includes(recipe.title) ? (
									<i className="fas fa-heart" />
								) : (
									<i className="far fa-heart" />
								)}
							</div>
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
	recipe: PropTypes.object
};

export default Card;
