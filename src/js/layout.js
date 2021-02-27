import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/login";
import { Home } from "./views/home";
import SignUp from "./views/signup";
import Card from "./components/Card.jsx";
import Comments from "./views/comments";
//import recipe Detail from "./views/recipe detail";
import Profile from "./views/profile";
import EditProfile from "./views/editProfile";
import "../../src/styles/error404.scss";
import injectContext from "./store/appContext";
import Navbar from "./components/Navbar.jsx";
import RecipeForm from "./views/recipeForm";
import Footer from "./components/Footer.jsx";
import ModalDelete from "./components/ModalDelete.jsx";
import RecipeDetail from "./views/recipeDetail";
import PropsType from "prop-types";
import { Context } from "./store/appContext";

const Layout = props => {
	const { store, actions } = useContext(Context);
	const basename = process.env.BASENAME || "";
	const [location, setlocation] = useState(window.location.pathname);
	useEffect(() => {}, [store.pathName]);
	console.log(store.pathName);
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				{store.pathName == "/login" || store.pathName == "/signup" ? "" : <Navbar />}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/card" component={Card} />
					<Route exact path="/comments" component={Comments} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/editProfile" component={EditProfile} />
					<Route exact path="/newRecipeForm" component={RecipeForm} />
					<Route exact path="/modalDelete" component={ModalDelete} />
					<Route exact path="/detail" component={RecipeDetail} />
					<Route exact path="/editRecipeForm" component={RecipeForm} />
					<Route>
						<div className="bodyImage404">
							<img
								className="Image404"
								src="https://res.cloudinary.com/df9k0kc8n/image/upload/v1614159394/Error_404_ok_lbnq9a.png"
								alt="404 page not found photo"
							/>
						</div>
					</Route>
				</Switch>
				{store.pathName == "/login" || store.pathName == "/signup" ? "" : <Footer />}
			</BrowserRouter>
		</div>
	);
};
Layout.propsType = {
	history: PropsType.object
};

export default injectContext(Layout);
