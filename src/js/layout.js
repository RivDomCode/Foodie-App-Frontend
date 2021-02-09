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

import injectContext from "./store/appContext";
import Navbar from "./components/Navbar.jsx";
import RecipeForm from "./views/recipeForm";
import Footer from "./components/Footer.jsx";
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
					<Route exact path="/recipeForm" component={RecipeForm} />
					<Route>
						<h1>Not found!</h1>
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
