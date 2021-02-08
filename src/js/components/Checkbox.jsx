import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange, recipe, setRecipe, addItemToList }) => {
	return <input type={type} name={name} checked={checked} onChange={onChange} onClick={addItemToList} />;
};

Checkbox.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	recipe: PropTypes.object,
	setRecipe: PropTypes.func,
	addItemToList: PropTypes.func
};
export default Checkbox;
