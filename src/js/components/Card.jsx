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
							<button type="button" className="" onClick={() => actions.addToFavorites(recipeTitle)}>
								{store.favorites.includes(recipeTitle) ? (
									<i className="far fa-heart" />
								) : (
									<i className="fas fa-heart" />
								)}
							</button>
						</span>
					</div>
					<p className="comment">
						<Link to={"/comments"} className="comments-link">
							Read all comments
						</Link>
					</p>
					{/*
					<div className="row d-flex last">
						<Avatar
							className="post_avatar"
							alt="Pedro Rivas"
							src="https://cuantohipster.com/wp-content/uploads/2012/05/se%C3%B1or-mayor-abulo-ruso-siberia-boina-hipster-beatnik.jpg"
						/>
						<div className="last-comment">
							<strong>{username} </strong>
							Esto es un comentario..
						</div>
					</div>
					<div className="row d-flex">
						<Avatar
							className="post_avatar"
							alt="Pedro"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsNnj_fxuHXEtqJ6MposaM67ua9_PWPhMFw&usqp=CAU"
						/>
						<input className="border border-lightgray" type="text" placeholder="Add your comment" />
                    </div>
                    */}
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
