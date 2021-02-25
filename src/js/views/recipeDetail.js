import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/recipe-detail.scss";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Comment from "../components/Comment.jsx";

const RecipeDetail = () => {
	const { store, actions } = useContext(Context);
	const [inputComment, setInputComment] = useState("");
	const [comments, setComments] = useState([]);
	useEffect(() => {
		actions.getComments(store.selectedRecipe, setComments);
	}, []);

	const inputCommentHandler = e => {
		setInputComment(e.target.value);
	};

	const submitCommentHandler = e => {
		e.preventDefault();
		if (inputComment != "" && inputComment != null) {
			actions.createComments(inputComment, store.selectedRecipe);
		}
		setInputComment("");
	};

	return (
		<div className="container-fluid">
			<div className="detail">
				<div className="header-image">
					<img className="photo-post" src={store.selectedRecipe.image} alt="post-photo" />
				</div>
				<div className="inside-detail">
					<div className="recipe-title row">
						<div className="detail-title">
							<p className="title-bold">{store.selectedRecipe.title}</p>
						</div>
					</div>
					<div className="ingredients">
						<div className="row ingredients-title">
							<i className="fas fa-shopping-basket" />
							<p className="titles">Ingredients</p>
						</div>
						<div className="ingredient-list">{store.selectedRecipe.ingredients}</div>
					</div>
					<div className="elaboration">
						<div className="row elaboration-title">
							<i className="fas fa-utensils" />
							<p className="titles">Elaboration</p>
						</div>
						<p className="elaboration-text">{store.selectedRecipe.elaboration}</p>
					</div>
					<div className="comments">
						<div className="row comments-title">
							<i className="fas fa-comment" />
							<p className="titles">Comments</p>
						</div>
						<div className="comment-component row d-flex">
							<div className="detailcomments">
								<form>
									<div className="comment-detail ">
										<Avatar aria-label="recipe" src={store.user.urlImg} className="avatar lololo" />
										<div className="input-group mb-3">
											<input
												type="text"
												className="form-control comment-input"
												placeholder="Add your comment"
												aria-label="Username"
												aria-describedby="basic-addon1"
												value={inputComment}
												onChange={inputCommentHandler}
											/>
											<button
												type="submit"
												className="btn btn-danger add-comment-button"
												onClick={submitCommentHandler}>
												Add
											</button>
										</div>
									</div>
									<div className="comments-container-detail">
										<div className="single-comment">
											<Comment comments={store.comments} />
										</div>
									</div>
								</form>
								<div className="comments-number">{store.comments.length} comments</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

RecipeDetail.propTypes = {
	recipe: PropTypes.object
};

export default RecipeDetail;
