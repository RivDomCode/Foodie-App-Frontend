import React, { useContext, useEffect, useState } from "react";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import "../../styles/categoryCheckboxes.scss";
import { Context } from "../store/appContext";

export const CategoryCheckboxes = ({ recipe, setRecipe }) => {
	const { store, actions } = useContext(Context);
	const [checkedItems, setCheckedItems] = useState({});
	const [allCategories, setAllCategories] = useState([]);
	const [checkboxes, setCheckboxes] = useState([]);
	useEffect(() => {
		getCheckboxes();
		if (recipe.categories) {
			let category2 = [];
			let selectCategory = {};
			recipe.categories.map(element => {
				selectCategory[element.category_name] = true;
				category2.push(element.category_name);
			});
			setAllCategories(category2);
			setCheckedItems(selectCategory);
		}
	}, []);
	let categoriesUpdate = [];
	// recipe.categories.map((category, index) => {
	// 	categoriesUpdate.push(category.category_name);
	// });

	let newAllCategories = categoriesUpdate;

	//verificar lo que esta en recipe.categories. y si lo que hay activar  true check.
	const handleChange = event => {
		let isInArray = allCategories.find(element => element == event.target.name);
		setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
		if (isInArray == undefined) {
			newAllCategories = [...allCategories, event.target.name];
		} else {
			newAllCategories = allCategories.filter(element => element !== event.target.name);
		}
		setAllCategories(newAllCategories);
		setRecipe({ ...recipe, categories: newAllCategories });
	};
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
		categoriesUpdate.map(name => {
			categories.map(item => {
				if (item["name"] === name) {
					item.checked = true;
				}
			});
		});
		setCheckboxes(categories);
	};
	return (
		<div className="my-categories" id="checkboxSection">
			{checkboxes.map(item => {
				return (
					<label className="labelCheckbox" key={item.key}>
						<p className="itemName">{item.name}</p>
						<Checkbox
							id="checkbox"
							name={item.name}
							checked={checkedItems[item.name]}
							onChange={handleChange}
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
