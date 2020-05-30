import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { SignUp } from "../page/SignUp";
import { User } from "../page/User";

export const RootRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
				<Route path="/user" component={User} />
				<Route path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	);
};
