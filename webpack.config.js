const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.scss$/, use: [
                MiniCssExtractPlugin.loader,
                { loader: "css-loader" }, // translates CSS into CommonJS
                { loader: "sass-loader" }, // compiles Sass to CSS
            ]},
        ],
    },
    devServer: {
        contentBase: "dist",
        compress: true,
    },
};