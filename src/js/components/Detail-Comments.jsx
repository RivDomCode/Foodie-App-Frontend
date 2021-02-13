import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Comment from "./Comment.jsx";
import "../../styles/detail-comment.scss";

const DetailComments = () => {
	const [inputComment, setInputComment] = useState("");
	const [comments, setComments] = useState([]);

	const inputCommentHandler = e => {
		setInputComment(e.target.value);
	};

	const submitCommentHandler = e => {
		e.preventDefault();
		if (inputComment != "" && inputComment != null) {
			setComments([...comments, { label: inputComment, done: false }]);
		}
		setInputComment("");
	};

	//Obtener todos los comentarios

	/*useEffect(() => {
		fetch("url")
			.then(resp => {
				console.log(resp.ok);
				console.log(resp.status);
				console.log(resp);
				return resp.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}, []);*/

	//3.Añadir y borrar comentarios

	/*useEffect(
		() => {
			fetch("URL", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(todos)
			})
				.then(response => response.json())
				.then(data => {
					console.log("updated", data);
				})
				.catch(error => {
					console.error("Error:", error);
				});
		},
		[comments]
	);*/

	return (
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
						value={inputComment}
						onChange={inputCommentHandler}
					/>
					<button type="button" className="btn btn-danger add-comment-button" onClick={submitCommentHandler}>
						Enter
					</button>
				</div>
				<div className="comments-container-detail">
					<div className="single-comment">
						<Comment comments={comments} setComments={setComments} />
					</div>
				</div>
			</form>
			<div className="comments-number">{comments.length} comments</div>
		</div>
	);
};

export default DetailComments;
