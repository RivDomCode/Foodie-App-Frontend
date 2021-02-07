import React, { useState } from "react";
import ReactDOM from "react-dom";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
	console.log("Checkbox: ", name, checked);

	return <input type={type} name={name} checked={checked} onChange={onChange} />;
};

const CategoryCheckboxes = () => {
	const [checkedItems, setCheckedItems] = useState({});

	const handleChange = event => {
		setCheckedItems({
			...checkedItems,
			[event.target.name]: event.target.checked
		});
		console.log("checkedItems: ", checkedItems);
	};

	const checkboxes = [
		{
			name: "Meat",
			key: "Meat",
			label: "Meat"
		},
		{
			name: "Vegan",
			key: "Vegan",
			label: "Vegan"
		},
		{
			name: "Fish",
			key: "Fish",
			label: "Fish"
		},
		{
			name: "Seafood",
			key: "Seafood",
			label: "Seafood"
		},
		{
			name: "Pasta",
			key: "Pasta",
			label: "Pasta"
		},
		{
			name: "Dessert",
			key: "Dessert",
			label: "Dessert"
		}
	];

	return (
		<div>
			{checkboxes.map(item => (
				<label key={item.key}>
					{item.name}
					<Checkbox name={item.name} checked={checkedItems[item.name]} onChange={handleChange} />
				</label>
			))}
		</div>
	);
};

CategoryCheckboxes.propType = {
	type: PropTypes.any,
	name: PropTypes.any,
	checked: PropTypes.bool,
	onChange: PropTypes.func
};

export default CategoryCheckboxes;
