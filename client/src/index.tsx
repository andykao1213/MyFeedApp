import React from "react";
import ReactDOM from "react-dom";
import { RootRouter } from "./routes/rootRouter";
import { Layout } from "./components/Layout/Layout";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Layout>
				<RootRouter />
			</Layout>
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
