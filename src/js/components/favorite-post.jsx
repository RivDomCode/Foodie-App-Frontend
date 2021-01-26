import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/favorite-post.scss";

const FavoritePost = props => {
	return (
		<div className="favorite-post">
			<div className="row no-gutters">
				<div className="col-md-6 favorite-post-image">
					<img
						src="https://cdn.pixabay.com/photo/2017/03/19/18/22/italian-food-2157243_960_720.jpg"
						className="favorite-post-img"
						alt="..."
					/>
				</div>
				<div className="col-md-6 right-side">
					<div className="card-body">
						<h5 className="favorite-title">Tiramisú</h5>
					</div>
					<div className="back-to-edit-profile row">
						{/*<Link to={"/profile"}>
							<i className="far fa-edit favorite-edit" />
                            </Link>*/}
						<i className="fas fa-trash-alt favorite-delete" />
					</div>
				</div>
			</div>
		</div>
	);
};

FavoritePost.propTypes = {
	imageUrl: PropTypes.string,
	recipeTitle: PropTypes.string
};

export default FavoritePost;
