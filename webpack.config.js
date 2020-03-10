const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

let config = {
    entry: "./src/main.jsx",
    target: 'web',
    output: {
        path: __dirname + "/public",
        filename: "app.js",
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            { test:/\.css$/,  use:['style-loader','css-loader'] },
            { test: /\.(ttf|eot|woff|woff2)$/, use: { loader: "file-loader", options: { name: "fonts/[name].[ext]", }, },
            }
        ]
    },

    plugins: [
        new webpack.EnvironmentPlugin(['PLATFORM']),
        new Dotenv({
            path: './.env',
            safe: true,
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};

module.exports = config;