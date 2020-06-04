import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => console.log("Hello World"));

app.listen(port, () => {
	console.log(`Server Ready at ${port}`);
});
