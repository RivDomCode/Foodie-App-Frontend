import React, { useState } from "react";
import "../../styles/dropDownSelectCategory.scss";

const DropDownSelectCategory = () => {
	const [dropdown, setDropdown] = useState("Tag your categorie");
	return (
		<form className="dropdownCategory">
			<select
				value={dropdown}
				onChange={e => {
					setDropdown(e.target.value);
				}}>
				<option value="Cualquiercosa01">Cualquiercosa01</option>
				<option value="Cualquiercosa02">Cualquiercosa02</option>
			</select>
		</form>
	);
};

export default DropDownSelectCategory;
