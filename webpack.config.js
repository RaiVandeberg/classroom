
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")


module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    plugins: [ new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            exclude: "/node_modules",
            },
            {
                test: /\.js$/i,
                exclude: "/node_modules",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", { targets: "defaults"}]],
                    }
                }
            }
        ],
    },
}