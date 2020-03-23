/** 
 * webpack.config.js
 * To configure webpack to build javascript bundle
 */

const path = require('path');

const ABSOLUTE_PATH_OF_BUILD_DIR = path.resolve(__dirname, 'build');

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
        path: ABSOLUTE_PATH_OF_BUILD_DIR,
        publicPath: '/assets/'
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
        contentBase: ABSOLUTE_PATH_OF_BUILD_DIR,
        port: 4500,
        hot: true
    }

};

// module.exports = config; 