import React, { useState } from "react";
import "../../styles/tabs.scss";
import PropTypes from "prop-types";

const Tabs = () => {
	return (
		<div>
			<ul className="tabs">
				<li className="current">My Recipes</li>
				<li className="tabs">Favorites</li>
			</ul>

			<div className="tabs-content" />
		</div>
	);
};
export default Tabs;
