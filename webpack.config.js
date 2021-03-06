const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

let config = {
    entry: "./src/main.jsx",
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
            { test:/\.s[ac]ss$/i,  use:['style-loader','css-loader', 'sass-loader'] },
            { test: /\.(ttf|eot|woff|woff2)$/, use: { loader: "file-loader", options: { name: "fonts/[name].[ext]", }, },
            }
        ]
    },

    plugins: [
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

let web = Object.assign({}, config, {
    name: 'web',
    target: 'web',
    node: {
        fs: 'empty',
        child_process: 'empty',
    }
});

let electron = Object.assign({}, config, {
    name: 'electron',
    target: 'electron-main'
});

module.exports = [web, electron];