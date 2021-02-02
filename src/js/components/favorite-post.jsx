import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/favorite-post.scss";
import { Context } from "../store/appContext";

const FavoritePost = props => {
	const { store, actions } = useContext(Context);
	return <div>hola</div>;
};

FavoritePost.propTypes = {
	imageUrl: PropTypes.string,
	recipeTitle: PropTypes.string
};

export default FavoritePost;
