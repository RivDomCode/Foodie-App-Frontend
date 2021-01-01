import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../../styles/recipe-detail.scss";

const RecipeDetail = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="header-image">
				<img
					className="photo-post"
					src="https://cdn.pixabay.com/photo/2016/02/19/10/00/food-1209007_960_720.jpg"
					alt="post-photo"
				/>
			</div>
			<div className="recipe-title row">
				<div>
					<p className="title-bold">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere beatae et nisi, aperiam
						provident esse.
					</p>
				</div>
				<div className="like">
					<i className="far fa-heart" />
				</div>
			</div>
			<div className="ingredients">
				<div className="row ingredients-title">
					<i className="fas fa-shopping-basket" />
					Ingredients
				</div>
				<ul className="ingredient-list">
					<li>-ingredient1</li>
					<li>-ingredient2</li>
					<li>-ingredient3</li>
					<li>-ingredient4</li>
					<li>-ingredient5</li>
					<li>-ingredient6</li>
					<li>-ingredient7</li>
				</ul>
			</div>
			<div className="elaboration">
				<div className="row elaboration-title">
					<i className="fas fa-utensils" />
					Elaboration
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, distinctio! Ratione quod vero
					reprehenderit! Cum necessitatibus, id exercitationem quam eaque explicabo et incidunt, atque ducimus
					rerum, neque expedita inventore pariatur ea? Ipsa consectetur aliquid ab itaque corporis, earum
					possimus aperiam ad veniam. Id, iste obcaecati? Amet temporibus molestiae maxime unde consequuntur
					corrupti necessitatibus autem in, sit totam expedita iusto, quaerat accusantium quo nisi explicabo
					repellendus vero voluptatibus, eligendi eum maiores facere odio id perferendis? Deleniti possimus et
					ab suscipit sunt quia perspiciatis magnam hic nam odio consequuntur facilis excepturi odit pariatur
					impedit sapiente quis nulla eos labore non, dolorem laboriosam! Natus, consectetur. Eaque illum
					libero deleniti suscipit commodi a, quae, non esse nesciunt distinctio laborum veritatis
					perspiciatis in asperiores doloribus? Ea, facilis debitis! Quam placeat quas harum repellendus est
					sunt, cupiditate fugit deserunt eum perspiciatis? Voluptates alias in eum facere dolorem est
					dignissimos, sed ea similique tenetur corrupti mollitia eaque illo molestias neque. Officiis, atque
					rerum sit dolor qui aperiam consequuntur odit repellat alias nulla, repellendus corrupti commodi
					aspernatur nesciunt tenetur amet quod iusto et ipsum magnam facere est. Cupiditate?
				</p>
			</div>
			<div className="comments">
				<div className="row comments-title">
					<i className="fas fa-comment" />
					Comments
				</div>
				<div className="some-comments">some comments here....</div>
			</div>
		</div>
	);
};

export default RecipeDetail;
