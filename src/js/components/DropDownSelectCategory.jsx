import React, { useState } from "react";
import "../../styles/dropDownSelectCategory.scss";
import Dropdown from "react-bootstrap/Dropdown";

const DropDownSelectCategory = () => {
	const [dropdown, setDropdown] = useState("Tag your categorie");
	const [isChecked, setIsCheched] = useState(false);
	return (
		<form className="dropdownCategory">
			<select
				value={dropdown}
				onChange={e => {
					setDropdown(e.target.value);
				}}>
				<option value="Cualquiercosa01">Cualquiercosa01</option>
				<option value="Cualquiercosa02">Cualquiercosa02</option>
				<label>Category 01</label>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={e => {
						setIsCheched(e.target.checked);
					}}
				/>
			</select>

			<label>Category 01</label>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={e => {
					setIsCheched(e.target.checked);
				}}
			/>
		</form>
	);
};

export default DropDownSelectCategory;
