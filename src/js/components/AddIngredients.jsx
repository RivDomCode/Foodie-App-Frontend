import React from "react";

const AddIngredients = () => {
	return (
		<div className="input-group mb-3">
			<input
				type="text"
				className="form-control"
				placeholder="Add the ingredients here"
				aria-label="Recipient's username"
				aria-describedby="button-addon2"
				name="ingredients"
			/>
			<button className="buttonAddIngredients" type="button">
				<div className="addIconDropdown">
					<i className="fas fa-plus" />
				</div>
			</button>
		</div>
	);
};

export default AddIngredients;
