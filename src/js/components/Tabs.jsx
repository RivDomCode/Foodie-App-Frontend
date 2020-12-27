import React from "react";
import "../../styles/tabs.scss";

const Tabs = () => {
	return (
		<div>
			<ul className="tabs">
				<li className="current">My Recipes</li>
				<li>Favorites</li>
			</ul>
			<div className="tabs-content" />
		</div>
	);
};
export default Tabs;
