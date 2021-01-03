import React, { useState } from "react";
import "../../styles/tabs.scss";
import Favorite from "../components/Favorite.jsx";
import Recipes from "../components/Recipes.jsx";

const Tabs = () => {
	const [activeTab, setActiveTab] = useState("recipes");
	const handleClick = (event, text) => {
		setActiveTab(text);
		console.log(text);
	};
	return (
		<div>
			<ul className="tabs">
				<li
					className={`tabs ${activeTab == "recipes" ? "current" : "tabs"}`}
					onClick={e => {
						handleClick(e, "recipes");
					}}>
					My Recipes
				</li>
				<li
					className={`tabs ${activeTab == "favorite" ? "current" : "tabs"}`}
					onClick={e => {
						handleClick(e, "favorite");
					}}>
					Favorites
				</li>
			</ul>

			<div className="tabs-content" />
			{activeTab == "recipes" ? <Recipes /> : <Favorite />}
		</div>
	);
};
export default Tabs;
