import React, { useState } from "react";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import { useEffect } from "react";

export const CategoryCheckboxes = ({ recipe, setRecipe }) => {
	const [checkedItems, setCheckedItems] = useState({});
	const [allCategories, setAllCategories] = useState([]);

	const addItemToList = () => {
		const newCategory = allCategories;
		console.log(newCategory);
		setRecipe({
			...recipe,
			category: newCategory
		});
	};

	const handleChange = event => {
		let isInArray = allCategories.find(element => element == event.target.name);
		setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
		if (!isInArray) {
			setAllCategories([...allCategories, event.target.name]);
		} else {
			// setAllCategories(allCategories => allCategories.pop(element => element != event.target.name));
		}
	};

	useEffect(
		() => {
			addItemToList();
			console.log(allCategories);
		},
		[checkedItems]
	);

	useEffect(
		() => {
			console.log(recipe);
		},
		[recipe]
	);

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
		<div>
			{checkboxes.map(item => (
				<label key={item.key}>
					{item.name}
					<Checkbox
						name={item.name}
						checked={checkedItems[item.name]}
						onChange={handleChange}
						recipe={recipe}
						setRecipe={setRecipe}
						onClick={addItemToList}
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
