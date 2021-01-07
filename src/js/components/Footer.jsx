import React from "react";
import "../../styles/footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-4  col-xs-12 text-footer">
						<p className="text-colum">
							<span className="subtitle">Final Project for 4Geeks Academy by</span>
							<span className="names">Marigen Rivero, Pedro Rivas and Virginia Martínez.</span>
						</p>
					</div>
					<div className="col-lg-4 col-md-4 col-xs-12 text-footer">
						<p className="text-colum">
							<span className="subtitle">Technologies used </span>
							HTML, CSS, React and Flux
						</p>
					</div>
					<div className="col-lg-3 col-md-4 col-xs-12 text-footer">
						<p className="text-colum">
							<span className="subtitle">
								Linked
								<i className="fab fa-linkedin" /> profile
							</span>
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
						</p>
						<div />
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
