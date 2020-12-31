import React, { useState } from "react";
import "../../styles/dropDownSelectCategory.scss";

const DropDownSelectCategory = () => {
	const [dropdown, setDropdown] = useState("Tag your categorie");
	const [isChecked, setIsCheched] = useState(false);
	const expanded = false;
	const showCheckboxes = () => {
		var checkboxes = document.getElementById("checkboxes");
		if (!expanded) {
			checkboxes.style.display = "block";
			expanded = true;
		} else {
			checkboxes.style.display = "none";
			expanded = false;
		}
	};

	return (
		<div>
			<div className="dropdownCategory">
				<div className="selectBox">
					<select
						value={dropdown}
						onChange={e => {
							setDropdown(e.target.value);
						}}>
						<option>Tag your recipe</option>
					</select>
					<div className="overSelect" />
				</div>
				<div id="checkboxes">
					<label htmlFor="one" value="One">
						<input
							type="checkbox"
							checked={isChecked}
							onChange={e => {
								setIsCheched(e.target.checked);
							}}
							id="one"
						/>
						Category One
					</label>
					<label htmlFor="two">
						<input type="checkbox" id="one" />
						Category Two
					</label>
					<label htmlFor="three">
						<input type="checkbox" id="one" />
						Category Three
					</label>
				</div>
			</div>
		</div>
	);
};

export default DropDownSelectCategory;
