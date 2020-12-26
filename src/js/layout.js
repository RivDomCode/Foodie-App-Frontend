import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/login";
import { Home } from "./views/home";
import SignUp from "./views/signup";
import Profile from "./views/profile";
import injectContext from "./store/appContext";
import ProfileVir from "./views/profileVir";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/Login">
						<Login />
					</Route>
					<Route exact path="/signup">
						<SignUp />
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route exact path="/profileVir">
						<ProfileVir />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
