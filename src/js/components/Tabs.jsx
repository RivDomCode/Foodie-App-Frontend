import React, { useState } from "react";
import "../../styles/tabs.scss";
import PropTypes from "prop-types";

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);
	return (
		<div>
			<ul className="tabs">
				{children.map(tab => (
					<li key={tab.props.label} className="current">
						{children.props.label}
					</li>
				))}
			</ul>
			{children.map(one => (
				<div key={one.props.label} className="tabs-content">
					{one.props.children}
				</div>
			))}
		</div>
	);
};
export default Tabs;
Tabs.propTypes = {
	children: PropTypes.any,
	label: PropTypes.any
};
