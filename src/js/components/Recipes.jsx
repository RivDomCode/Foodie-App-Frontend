import React, { useState, useContext, useEffect } from "react";
import "../../styles/tabs.scss";
import "../../styles/recipe.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ModalDelete } from "../components/ModalDelete.jsx";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Recipes = () => {
	const { store, actions } = useContext(Context);
	const [recipeDelete, setRecipeDelete] = useState("");
	const [state, setState] = useState({
		showModal: false
	});
	useEffect(() => {
		actions.getRecipeByUser();
	}, []);
	const handleShow = recipe => {
		setState({ showModal: true });
		setRecipeDelete(recipe);
	};
	return (
		<div className="recipes-tab">
			<div className="col-sm-12 col-2">
				<div className="row first-line d-flex justify-content-sm-center justif">
					{store.myRecipes.length == 0 ? (
						<p className="start-message">You have not published any recipe yet.</p>
					) : (
						store.myRecipes.map((recipe, index) => {
							console.log(recipe, "Map recipe");
							return (
								<div className="post" key={index}>
									<div className="post-image">
										<img src={recipe.image} className="post-img" alt="..." />
									</div>
									<div className="right-side">
										<div className="text-title">
											<p className="post-title">{recipe.title}</p>
										</div>
										<div className="back-to-edit-profile row icons-recipe">
											<i
												onClick={() => {
													handleShow(recipe);
												}}
												/*onClick={() => {
													actions.deleteRecipe(recipe);
												}}*/
												className="far fa-trash-alt trash"
											/>
											<Link to="/editRecipe" recipe={recipe} key={index}>
												<i className="far fa-edit" />
											</Link>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
				<ModalDelete
					recipe={recipeDelete}
					show={state.showModal}
					onClose={() => setState({ showModal: false })}
				/>
			</div>
		</div>
	);
};
export default Recipes;
