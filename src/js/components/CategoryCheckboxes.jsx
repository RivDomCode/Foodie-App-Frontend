import React, { useState } from "react";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import { useEffect } from "react";
import "../../styles/categoryCheckboxes.scss";

export const CategoryCheckboxes = ({ recipe, setRecipe }) => {
	const [checkedItems, setCheckedItems] = useState({});
	const [allCategories, setAllCategories] = useState([]);

	const handleChange = event => {
		let newAllCategories = [];

		let isInArray = allCategories.find(element => element == event.target.name);

		setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });

		if (!isInArray) {
			newAllCategories = [...allCategories, event.target.name];
		} else {
			newAllCategories = allCategories.filter(element => element !== event.target.name);
		}

		setAllCategories(newAllCategories);
		setRecipe({ ...recipe, categories: newAllCategories });
	};

	const checkboxes = [
		{
			name: "Meat",
			key: "Meat",
			label: "Meat",
			checked: false
		},
		{
			name: "Vegan",
			key: "Vegan",
			label: "Vegan",
			checked: false
		},
		{
			name: "Fish",
			key: "Fish",
			label: "Fish",
			checked: false
		},
		{
			name: "Seafood",
			key: "Seafood",
			label: "Seafood",
			checked: false
		},
		{
			name: "Pasta",
			key: "Pasta",
			label: "Pasta",
			checked: false
		},
		{
			name: "Dessert",
			key: "Dessert",
			label: "Dessert",
			checked: false
		}
	];

	return (
		<div id="checkboxSection">
			{checkboxes.map(item => (
				<label className="labelCheckbox" key={item.key}>
					<p className="itemName">{item.name}</p>
					<Checkbox
						id="checkbox"
						name={item.name}
						checked={checkedItems[item.name]}
						onChange={handleChange}
						setRecipe={setRecipe}
					/>
				</label>
			))}
		</div>
	);
};

CategoryCheckboxes.propTypes = {
	recipe: PropTypes.object,
	setRecipe: PropTypes.func
};

export default CategoryCheckboxes;
