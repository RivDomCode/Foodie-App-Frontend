import React, { useContext, useState } from "react";
import "../../styles/card.scss";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Card = ({ recipeTitle, username, recipeImg }) => {
	const { store, actions } = useContext(Context);
	const recipe = {
		title: recipeTitle,
		recipeImg: recipeImg
	};
	const heart = () => {
		if (store.favorites.length == 0) {
			return <i className="fas fa-heart like" />;
		} else {
			let isFound = false;
			store.favorites.map(recipe => {
				if (recipe.title == recipeTitle) {
					isFound = true;
				}
			});
			if (isFound) {
				return <i className="fas fa-heart like" />;
			} else {
				return <i className="fas fa-heart like" />;
			}
		}
	};
	return (
		<div className="component-card">
			<div className="card">
				<Link to={"/detail"}>
					<img src={recipeImg} className="card-img-top" alt="..." />
				</Link>
				<div className="card-body">
					<h5 className="card-title">{recipeTitle}</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti hic ad delectus,
						blanditiis ratione, tempora tenetur veritatis eum accusamus ullam itaque facilis dolore, rem
					</p>
					<div className="row author-heart d-flex">
						<span>By {username}</span>{" "}
						<span>
							<div className="like" onClick={() => actions.addToFavorites(recipe)}>
								{heart()}
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
	recipeImg: PropTypes.string,
	username: PropTypes.string,
	recipeTitle: PropTypes.string
};

export default Card;
