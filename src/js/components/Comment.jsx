import React, { useState, useContext, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import "../../styles/comment.scss";
import { Context } from "../store/appContext";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";

const Comment = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getUser();
	}, []);
	return (
		<div className="sigleComment ">
			{props.comments.map((commentObj, index, user) => {
				if (commentObj.text != "") {
					return (
						<div key={index} className="comment-container ">
							<Card className="single-comments-card">
								<CardHeader
									avatar={<Avatar aria-label="recipe" src={commentObj.user.urlImg} />}
									action={<IconButton aria-label="settings" />}
									title={commentObj.text}
									subheader={commentObj.date_comment}
									className="single-comment"
								/>
							</Card>
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
