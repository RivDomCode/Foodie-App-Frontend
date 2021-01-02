import React from "react";
import "../../styles/footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="row">
				<div className="col-5 students">
					<p>
						Final students project for 4Geeks Academy by: Marigen Rivero, Pedro Rivas and Virginia Martínez.
					</p>
				</div>
				<div className="col-4 tecno">
					<p>Technologies used: HTML, CSS, React, Flux.</p>
				</div>
				<div className="col-3 linked">
					<i className="fab fa-linkedin" />
					<ul className="developers">
						<li>
							<a href="https://www.linkedin.com/in/m-rivero-mirabal">Marigen Rivero Mirabal</a>
						</li>

						<li>
							<a href="https://www.linkedin.com/in/pedrorivasdominguez/">Pedro Rivas Domínguez</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/virginiakmartinez/"> Virginia K. Martínez</a>
						</li>
					</ul>

					<div />
				</div>
			</div>
		</footer>
	);
};
export default Footer;
