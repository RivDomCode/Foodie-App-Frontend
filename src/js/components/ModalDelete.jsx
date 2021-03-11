import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/modalDelete.scss";

export const ModalDelete = props => {
	const { actions } = useContext(Context);

	const handleDelete = () => {
		actions.deleteRecipe(props.recipe.id);
		props.onClose();
	};

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>{`Do you want to delete ${props.recipe.title} `}</p>
					</div>
					<div className="modal-footer">
						<button onClick={() => props.onClose()} type="button" className="btn btn-ohNo">
							Oh no!
						</button>

						<button
							type="button"
							className="btn btn-Doit"
							data-dismiss="modal"
							onClick={() => {
								handleDelete();
							}}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalDelete.propTypes = {
	props: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	location: PropTypes.object,
	recipe: PropTypes.object
};

ModalDelete.defaultProps = {
	show: false,
	onClose: null
};
export default ModalDelete;
