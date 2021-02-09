import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
	return <input type={type} name={name} checked={checked} onChange={onChange} />;
};

Checkbox.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func
};
export default Checkbox;
