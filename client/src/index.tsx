import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

import { RootRouter } from "./routes/rootRouter";
import { Layout } from "./components/Layout/Layout";
import "./index.css";

library.add(faHeart, faComment);

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
