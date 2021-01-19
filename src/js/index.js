//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";
import Footer from "./components/Footer.jsx";

//render your react application

const location = window.location.pathname;
ReactDOM.render(
	<>
		<Layout />
		{location == "/login" || location == "/signup" ? null : <Footer />}
	</>,
	document.querySelector("#app")
);
