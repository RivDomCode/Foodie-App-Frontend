import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../../styles/recipe-detail.scss";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const RecipeDetail = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getRecipe();
	}, []);

	/*  	useEffect(() => {
		fetch("", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify([])
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	}, []);*/

	return (
		<div className="container-fluid">
			<div className="detail">
				<div className="header-image">
					<img
						className="photo-post"
						src="https://cdn.pixabay.com/photo/2018/05/26/18/58/sushi-3432035__340.jpg"
						alt="post-photo"
					/>
				</div>
				<div className="inside-detail">
					<div className="recipe-title row">
						<div className="detail-title">
							<p className="title-bold">Futti di Mare</p>
						</div>
					</div>
					<div className="ingredients">
						<div className="row ingredients-title">
							<i className="fas fa-shopping-basket" />
							<p className="titles">Ingredients</p>
						</div>
						<div className="ingredient-list">
							<p>Pasta</p>
							<p>Calamares</p>
							<p>Gambas</p>
							<p>Cebolla</p>
							<p>Vino blanco</p>
						</div>
					</div>
					<div className="elaboration">
						<div className="row elaboration-title">
							<i className="fas fa-utensils" />
							<p className="titles">Elaboration</p>
						</div>
						<p className="elaboration-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elit nulla, pulvinar sit
							amet purus id, euismod dapibus neque. Maecenas non est sodales, egestas urna at, ultricies
							urna. Ut imperdiet metus sed velit sodales, quis tristique augue vehicula. Nunc vitae ex a
							massa ullamcorper egestas. Integer eu dui nec diam lacinia placerat. Nulla facilisi. Vivamus
							et dolor erat. Morbi urna sem, mollis sit amet augue vitae, blandit ornare lacus. Phasellus
							mollis euismod odio, nec condimentum tortor pulvinar ac. Nam maximus.
						</p>
					</div>
					<div className="comments">
						<div className="row comments-title">
							<i className="fas fa-comment" />
							<p className="titles">Comments</p>
						</div>
						<div className="comment-component row d-flex">
							<div className="detailcomments">
								<form>
									<div className="comment-detail row d-flex">
										<Avatar
											className="post_avatar"
											alt="Pedro"
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsNnj_fxuHXEtqJ6MposaM67ua9_PWPhMFw&usqp=CAU"
										/>
										<input
											className="add-comment-input"
											type="text"
											placeholder="Add your comment"
											/*value={inputComment}*/
											/*onChange={inputCommentHandler}*/
										/>
										<button
											type="button"
											className="btn btn-danger add-comment-button"
											/*onClick={submitCommentHandler}*/
										>
											Add
										</button>
									</div>
								</form>
								<div className="comments-number">{/*{comments.length}*/} comments</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

RecipeDetail.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	ingredients: PropTypes.string,
	elaboration: PropTypes.string,
	recipe: PropTypes.object
};

export default RecipeDetail;
