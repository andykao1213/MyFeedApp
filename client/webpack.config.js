const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				loader: "ts-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
		],
	},
	// Told webpack that if the import path doesn't have extesion, try to resolve
	// it by the follow extensions
	resolve: { extensions: [".ts", ".tsx", ".js"] },
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.join(__dirname, "public/"),
		port: 3000,
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true,
		historyApiFallback: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};
