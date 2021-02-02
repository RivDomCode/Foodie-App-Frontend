import React from "react";
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

const Layout = () => {
	const basename = process.env.BASENAME || "";
	// const path = window.location.pathname
	const location = window.location.pathname;
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/card">
						<Card />
					</Route>
					<Route exact path="/comments">
						<Comments />
					</Route>
					{/*	<Route exact path="/detail">
						<RecipeDetail />
					</Route>*/}
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route exact path="/editProfile">
						<EditProfile />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				{/*location == "/login" || location == "/signup" ? null : <Footer />*/}
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);
