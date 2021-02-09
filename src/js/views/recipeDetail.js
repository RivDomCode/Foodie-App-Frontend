import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../../styles/recipe-detail.scss";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import DetailComments from "../components/Detail-Comments.jsx";
import "../../styles/detail-comment.scss";
import "../../styles/comment.scss";

const RecipeDetail = ({ recipe }) => {
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
			<Navbar />
			<div className="detail">
				<div className="header-image">
					<img className="photo-post" src={recipe.image} alt="post-photo" />
				</div>
				<div className="inside-detail">
					<div className="recipe-title row">
						<div className="detail-title">
							<p className="title-bold">{recipe.title}</p>
						</div>
						<div className="like">
							<i className="far fa-heart" />
						</div>
					</div>
					<div className="ingredients">
						<div className="row ingredients-title">
							<i className="fas fa-shopping-basket" />
							<p className="titles">Ingredients </p>
						</div>
						<div className="ingredient-list">
							<p>-ingredient1</p>
							<p>-ingredient2</p>
							<p>-ingredient3</p>
							<p>-ingredient4</p>
							<p>-ingredient5</p>
						</div>
					</div>
					<div className="elaboration">
						<div className="row elaboration-title">
							<i className="fas fa-utensils" />
							<p className="titles">Elaboration</p>
						</div>
						<p className="elaboration-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, distinctio! Ratione quod
							vero reprehenderit! Cum necessitatibus, id exercitationem quam eaque explicabo et incidunt,
							atque ducimus rerum, neque expedita inventore pariatur ea? Ipsa consectetur aliquid ab
							itaque corporis, earum possimus aperiam ad veniam. Id, iste obcaecati? Amet temporibus
							molestiae maxime unde consequuntur corrupti necessitatibus autem in, sit totam expedita
							iusto, quaerat accusantium quo nisi explicabo repellendus vero voluptatibus, eligendi eum
							maiores facere odio id perferendis? Deleniti possimus et ab suscipit sunt quia perspiciatis
							magnam hic nam odio consequuntur facilis excepturi odit pariatur impedit sapiente quis nulla
							eos labore non, dolorem laboriosam! Natus, consectetur. Eaque illum libero deleniti suscipit
							commodi a, quae, non esse nesciunt distinctio laborum veritatis perspiciatis in asperiores
							doloribus? Ea, facilis debitis! Quam placeat quas harum repellendus est sunt, cupiditate
							fugit deserunt eum perspiciatis? Voluptates alias in eum facere dolorem est dignissimos, sed
							ea similique tenetur corrupti mollitia eaque illo molestias neque. Officiis, atque rerum sit
							dolor qui aperiam consequuntur odit repellat alias nulla, repellendus corrupti commodi
							aspernatur nesciunt tenetur amet quod iusto et ipsum magnam facere est. Cupiditate?
						</p>
					</div>
					<div className="comments">
						<div className="row comments-title">
							<i className="fas fa-comment" />
							<p className="titles">Comments</p>
						</div>
						<div className="comment-component row d-flex">
							<DetailComments />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

RecipeDetail.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	recipe: PropTypes.object
};

export default RecipeDetail;
