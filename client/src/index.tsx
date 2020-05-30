import React from "react";
import ReactDOM from "react-dom";
import { RootRouter } from "./routes/rootRouter";

const App: React.FC = () => {
	return <RootRouter />;
};

ReactDOM.render(<App />, document.getElementById("root"));
