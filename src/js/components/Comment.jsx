import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import "../../styles/comment.scss";

const Comment = props => {
	console.log(props.comments);
	/*const deleteHandler = key => {
		const updatedCommentList = props.comments.filter(commentObj => {
			return commentObj.label != key;
		});
		props.setComments(updatedCommentList);
	};*/
	return (
		<div className="sigleComment ">
			{props.comments.map((commentObj, index) => {
				if (commentObj.text != "") {
					return (
						<div key={index} className="comment-container row d-flex">
							<Avatar className="avatar" />
							<p className="single-comment">{commentObj.text}</p>
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
	comments: PropTypes.array
};

export default Comment;
