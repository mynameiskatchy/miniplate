/** 
 * webpack.config.js
 * To configure webpack to build javascript bundle
 */

var path = require('path');

// const {
//     NODE_ENV = 'production',
// } = process.env;

// Webpack Configuration 
module.exports = {
    // to define entry point to start start bundle
    entry: './src/app.js',
    // to define where final bundle is outputted & can be accessed
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    // to specify extensions that don't need to be typed out
    resolve: {
        extensions: [
            '.js', '.jsx',
            '.ts', '.tsx'
        ],
    },
    // to specify loaders to load static assets to webpack
    module: {
        rules: [
            // javascript & jsx files
            {
                loader: 'babel-loader',
                test: /\.(js)x?$/,
                exclude: /node_modules/
            },
            // typescript & tsx files
            {
                loader: 'ts-loader',
                test: /\.(ts)x?$/,
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development',
    // target: 'node'.
    // devtool: 'source-map', 
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 4500,
        hot: true
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