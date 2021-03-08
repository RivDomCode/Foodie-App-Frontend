import React from "react";
import "../../styles/footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="containet">
				<div className="row" id="top">
					<ul className="col-lg-5 col-md-4  col-xs-12 text-footer">
						<li className="title">Back-end Technologies</li>
						<li>Python</li>
						<li>Flask</li>
						<li>MySQL</li>
						<li>Tokens</li>
					</ul>
					<ul className="col-lg-4 col-md-4 col-xs-12 aling-items-center text-footer">
						<li className="title">Front-end Technologies</li>
						<li>React.js + Flux</li>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Bootstrap</li>
					</ul>
					<ul className="col-lg-3 col-md-4 col-xs-12 text-footer">
						<li className="title">
							Linked
							<i className="fab fa-linkedin" /> profile
						</li>
						<ul className="text-footer">
							<li>
								<a className="linkedin" href="https://www.linkedin.com/in/m-rivero-mirabal">
									Marigen Rivero Mirabal
								</a>
							</li>

							<li>
								<a className="linkedin" href="https://www.linkedin.com/in/pedrorivasdominguez/">
									Pedro Rivas Domínguez
								</a>
							</li>
							<li>
								<a className="linkedin" href="https://www.linkedin.com/in/virginiakmartinez/">
									{" "}
									Virginia K. Martínez
								</a>
							</li>
						</ul>
						<div />
					</ul>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
