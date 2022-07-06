import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a
					className="navbar-brand"
					href="#"
					style={{ color: "#fc6a03" }}>
					Home
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							style={{ color: "#fc6a03" }}
							className="merch nav-link"
							href="#">
							Merch
						</a>
						<a
							className="tourDates nav-link"
							style={{ color: "#fc6a03" }}
							href="#">
							Tour Dates
						</a>
						<a
							className="podcast nav-link"
							style={{ color: "#fc6a03" }}
							href="#">
							Podcast
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
