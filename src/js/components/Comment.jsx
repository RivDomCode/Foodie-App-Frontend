import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import "../../styles/comment.scss";
import { Context } from "../store/appContext";

const Comment = props => {
	const { store, actions } = useContext(Context);
	/*const deleteHandler = key => {
		const updatedCommentList = props.comments.filter(commentObj => {
			return commentObj.label != key;
		});
		props.setComments(updatedCommentList);
	};*/
	return (
		<div className="sigleComment ">
			{props.comments.map((commentObj, index, user) => {
				if (commentObj.text != "") {
					return (
						<div key={index} className="comment-container ">
							<span className="comment-userName">
								<Avatar className="avatar lololo" />
							</span>
							<span className="single-comment">{commentObj.text}</span>
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
