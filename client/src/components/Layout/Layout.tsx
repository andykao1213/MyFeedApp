import React from "react";
import { Link } from "react-router-dom";

export const Layout: React.FC = (props) => {
	return (
		<>
			<nav className="border-b-2 flex flex-row justify-between">
				<Link to="/" className="text-xl m-4">
					My Feed App
				</Link>
				<Link to="user" className="border rounded-full h-12 w-12 m-2"></Link>
			</nav>
			<main className="flex flex-col items-center h-screen bg-gray-100">
				{props.children}
			</main>
		</>
	);
};
