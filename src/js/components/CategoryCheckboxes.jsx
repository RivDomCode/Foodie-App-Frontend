import React, { useContext, useEffect, useState } from "react";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import "../../styles/categoryCheckboxes.scss";
import { Context } from "../store/appContext";

export const CategoryCheckboxes = ({ recipe, setRecipe }) => {
	const { store, actions } = useContext(Context);
	const [checkedItems, setCheckedItems] = useState({});
	const [allCategories, setAllCategories] = useState([]);
	console.log(recipe.categories, "categories");

	//verificar lo que esta en recipe.categories. y si esta cambiar a true check.
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
	const [checkboxes, setCheckboxes] = useState([]);
	const getCheckboxes = async () => {
		await actions.getCategories();
		const categories = [];
		store.categories.map(category => {
			categories.push({
				name: category.name_category,
				key: category.name_category,
				label: category.name_category,
				checked: false
			});
		});
		setCheckboxes(categories);
	};
	useEffect(() => {
		getCheckboxes();
	}, []);

	return (
		<div id="checkboxSection">
			{checkboxes.map(item => {
				return (
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
				);
			})}
		</div>
	);
};

CategoryCheckboxes.propTypes = {
	recipe: PropTypes.object,
	setRecipe: PropTypes.func
};

export default CategoryCheckboxes;
