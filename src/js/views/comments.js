import React from "react";
import { Link } from "react-router-dom";
import DetailComments from "../components/Detail-Comments.jsx";

const Comments = () => {
	return (
		<div className="comments">
			Comentarios: Esta vista tiene que desaparecer, pero de momento la utilizo de pruebas para renderizar los
			componentes creados
			<DetailComments />
		</div>
	);
};

export default Comments;
