import React, { useState, useContext, useEffect } from "react";
import "../../styles/tabs.scss";
import "../../styles/recipe.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Recipes = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getRecipeByUser();
	}, []);
	return (
		<div className="recipes-tab">
			<div className="col-sm-12 col-2">
				<div className="row first-line d-flex justify-content-sm-center justif">
					{store.myRecipes.length == 0 ? (
						<p className="start-message">You have not published any recipe yet.</p>
					) : (
						store.myRecipes.map((recipe, index) => {
							//return <ViewCard recipe={(recipe, index)} key={index} />;
							return (
								<div className="post" key={index}>
									{/* <div className="row no-gutters"> */}
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
													actions.deleteRecipe(recipe);
												}}
												className="far fa-trash-alt trash"
											/>
											<Link to="/editRecipe" recipe={recipe} key={index}>
												<i className="far fa-edit" />
											</Link>
										</div>
									</div>
									{/* </div> */}
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};
export default Recipes;
