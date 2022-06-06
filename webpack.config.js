const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./frontend/src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "./frontend/public"),
        filename: "bundle.js",
    },
    devServer: {
        port: 3000,
        hot: true,
        static: {
            directory: path.join(__dirname, "./frontend/public"),
        },
    },
};
