import React from "react";
import { Link } from "react-router-dom";
import DetailComments from "../components/Detail-Comments.jsx";
import FavoritePost from "../components/favorite-post.jsx";

const Comments = () => {
	return (
		<div className="comments">
			Comentarios: Esta vista tiene que desaparecer, pero de momento la utilizo de pruebas para renderizar los
			componentes creados
			<DetailComments />
			<FavoritePost />
		</div>
	);
};

export default Comments;
