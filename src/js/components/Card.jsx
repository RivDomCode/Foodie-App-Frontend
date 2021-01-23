import React, { useContext, useState } from "react";
import "../../styles/card.scss";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Card = ({ recipeTitle, username, imageUrl }) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="component-card">
			<div className="card">
				<Link to={"/detail"}>
					<img src={imageUrl} className="card-img-top" alt="..." />
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
							<div className="like" onClick={() => actions.addToFavorites(recipeTitle)}>
								{store.favorites.includes(recipeTitle) ? (
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
	imageUrl: PropTypes.string,
	username: PropTypes.string,
	recipeTitle: PropTypes.string
};

export default Card;
