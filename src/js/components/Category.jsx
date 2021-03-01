import React, { useContext } from "react";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Category = props => {
	const { actions } = useContext(Context);
	return (
		<button
			onClick={() => {
				actions.getRecipeCategory(props.category.id);
				//console.log("get recipe", props.category.id);
			}}
			type="button"
			className="btn btn-danger btn-category">
			{props.category.name_category}
		</button>
	);
};
Category.propTypes = {
	category: PropTypes.object
};
