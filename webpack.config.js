const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(env, argv) {
    // hack until hot loading can be fixed better
    // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/34
    const styleLoader = argv.mode === "development"
        ? { loader: "style-loader" }
        : MiniCssExtractPlugin.loader;

    return {
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
                    styleLoader,
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
};