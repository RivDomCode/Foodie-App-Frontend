import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/recipe-detail.scss";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const RecipeDetail = () => {
	const { store, actions } = useContext(Context);
	console.log(store.selectedRecipe);
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
	recipe: PropTypes.object
};

export default RecipeDetail;
