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
import Navbar from "./components/Navbar.jsx";
const Layout = () => {
	const basename = process.env.BASENAME || "";
	const location = window.location.pathname;
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				{location == "/login" || location == "/signup" ? null : <Navbar />}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/card" component={Card} />
					<Route exact path="/comments" component={Comments} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/editProfile" component={EditProfile} />
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);
