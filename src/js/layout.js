import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Login from "./views/login";
import { Home } from "./views/home";
import SignUp from "./views/signup";
import Profile from "./views/profile";
import EditProfile from "./views/editProfile";
import injectContext from "./store/appContext";
import Footer from "./components/Footer.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	//const location = useLocation();
	//const { pathname } = useLocation();
	function Footer() {
		let location = useLocation();

		if (location.pathname === "/") {
			return null;
		}

		return (
			<div>
				<Footer />
			</div>
		);
	}
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
					<Route exact path="/editProfile">
						<EditProfile />
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
