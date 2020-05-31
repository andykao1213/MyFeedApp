import React from "react";
// import "./Layout.css";

export const Layout: React.FC = (props) => {
	return (
		<>
			<nav className="border border-red-600">
				<a>My Feed App</a>
				<div>h</div>
			</nav>
			<main>{props.children}</main>
		</>
	);
};
