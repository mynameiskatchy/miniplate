var webpack = require('webpack'); 

var path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
    },
    module: {
        rules: [
            {
            loader: 'babel-loader',
            test: /\.(js)x?$/,
            exclude: /node_modules/
        }
    ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'build')
    }

};

// var config = {
//     devtool: 'source-map',
//     entry: [
//         srcPath + "/app.js"
//     ],
//     output: {
//         path: distPath,
//         publicPath: '/',
//         filename: "bundle.js"
//     },
//     resolve: {
//         extensions: ['.js', '.jsx']
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js?$/,
//                 exclude: /node_modules/,
//                 include: /client/,
//                 loader: "babel-loader",
//                 query: {
//                     presets: ['es2015']
//                 }
//             },
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 include: /client/,
//                 loader: "babel-loader",
//                 query: {
//                     presets: ['es2015', 'stage-2', 'react']
//                 }
//             }
//         ]
//     },
//     devServer: {
//         hot: true,
//         port: 4500
//     }
// }

// module.exports = config; 