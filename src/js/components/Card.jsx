import React from "react";
import "../../styles/card.scss";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const Card = () => {
	return (
		<div className="component-card">
			<div className="card">
				<Link to={"/detail"}>
					<img
						src="https://cdn.pixabay.com/photo/2016/02/19/10/00/food-1209007_960_720.jpg"
						className="card-img-top"
						alt="..."
					/>
				</Link>
				<div className="card-body">
					<h5 className="card-title">Titulo de receta</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti hic ad delectus,
						blanditiis ratione, tempora tenetur veritatis eum accusamus ullam itaque facilis dolore, rem
					</p>
					<div className="row author-heart d-flex">
						<span>By Autor Receta</span>{" "}
						<span>
							<i className="far fa-heart" />
						</span>
					</div>
					<p className="comment">
						<Link to={"/comments"} className="comments-link">
							Read all comments
						</Link>
					</p>
					<div className="row d-flex last">
						<Avatar
							className="post_avatar"
							alt="Pedro Rivas"
							src="https://cuantohipster.com/wp-content/uploads/2012/05/se%C3%B1or-mayor-abulo-ruso-siberia-boina-hipster-beatnik.jpg"
						/>
						<div className="last-comment">
							<strong>Username </strong>
							Esto es un comentario..
						</div>
					</div>
					<div className="row d-flex">
						<Avatar
							className="post_avatar"
							alt="Pedro"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsNnj_fxuHXEtqJ6MposaM67ua9_PWPhMFw&usqp=CAU"
						/>
						<input className="border border-lightgray" type="text" placeholder="Add your comment" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
