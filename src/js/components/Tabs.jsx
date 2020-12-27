import React from "react";
import "../../styles/tabs.scss";

const Tabs = () => {
	return (
		<div>
			<ul className="tabs">
				<li className="current">My Recipes</li>
				<li>Favorites</li>
			</ul>
			<div className="tabs-content">
				<div>
					<p className="start-message">You have not published any recipe yet.</p>
				</div>
				<div>
					<p className="start-message">Your list of favorite recipes is empty.</p>
				</div>
			</div>
		</div>
	);
};
export default Tabs;
