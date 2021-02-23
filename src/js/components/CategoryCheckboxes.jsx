import React, { useContext, useEffect, useState } from "react";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import "../../styles/categoryCheckboxes.scss";
import { Context } from "../store/appContext";

export const CategoryCheckboxes = ({ recipe, setRecipe }) => {
	const { store, actions } = useContext(Context);
	const [checkedItems, setCheckedItems] = useState({});
	const [allCategories, setAllCategories] = useState([]);
	const [pepito, setPepito] = useState([]);
	//console.log(recipe.categories, "categorias originales");
	let categoriesUpdate = [];
	recipe.categories.map((category, index) => {
		categoriesUpdate.push(category.category_name);
		//console.log(categoriesUpdate, "receta selec", index);
	});

	let newAllCategories = categoriesUpdate;

	//console.log(newAllCategories);

	//verificar lo que esta en recipe.categories. y si lo que hay activar  true check.
	const handleChange = event => {
		//let newAllCategories = [];

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
		//setPepito(categories);
		/////
		//console.log(categories, "todas las categorias");
		//console.log(categoriesUpdate, typeof categoriesUpdate, "-----------------");
		categoriesUpdate.map(name => {
			//console.log(name, "el valor de name ");
			categories.map(item => {
				if (item["name"] === name) {
					item.checked = true;
				}
				//console.log(categories, "en el if");
			});
		});
		setPepito(categories);
		/////
	};
	useEffect(() => {
		getCheckboxes();
	}, []);

	return (
		<div id="checkboxSection">
			{pepito.map(item => {
				return (
					<label className="labelCheckbox" key={item.key}>
						<p className="itemName">{item.name}</p>
						<Checkbox
							id="checkbox"
							name={item.name}
							checked={item["checked"]}
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
