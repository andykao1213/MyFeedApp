import React from "react";
import ReactDOM from "react-dom";
import { RootRouter } from "./routes/rootRouter";
import { Layout } from "./components/Layout/Layout";
import "./index.css";

const App: React.FC = () => {
	return (
		<Layout>
			<RootRouter />
		</Layout>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
