import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import "../../styles/comment.scss";
import { Context } from "../store/appContext";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";

const Comment = props => {
	const { store, actions } = useContext(Context);
	/*const deleteHandler = key => {
		const updatedCommentList = props.comments.filter(commentObj => {
			return commentObj.label != key;
		});
		props.setComments(updatedCommentList);
    };*/
	const currDate = new Date().toLocaleDateString();
	const currTime = new Date().toLocaleTimeString();
	return (
		<div className="sigleComment ">
			{props.comments.map((commentObj, index, user) => {
				if (commentObj.text != "") {
					return (
						<div key={index} className="comment-container ">
							<Card className="single-comments-card">
								<CardHeader
									avatar={
										<Avatar
											aria-label="recipe"
											alt={store.user.user_name}
											src={store.user.urlImg}
										/>
									}
									action={<IconButton aria-label="settings" />}
									title={commentObj.text}
									subheader={currDate}
									className="single-comment"
								/>
							</Card>
							{/*	<i
								className="fas fa-trash-alt delete-comment-button"
								onClick={() => deleteHandler(commentObj.label)}
                        />*/}
						</div>
					);
				}
			})}
		</div>
	);
};

Comment.propTypes = {
	user: PropTypes.object,
	comments: PropTypes.array
};

export default Comment;
