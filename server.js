/**
 * server.js
 * To set up express server to load bundle.js and index.html files
 */

const path = require('path');
const express = require('express');

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfigOptions = require('./webpack.config');
const compiler = webpack(webpackConfigOptions);

const app = express();
const PORT = 5000;


app.use(express.static('build')); 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/', 'index.html'));
});

app.use(middleware(compiler, {
        noInfo: true, 
        publicPath: webpackConfigOptions.output.publicPath
    })
);

app.listen(PORT, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Application server started at http://localhost:%s', PORT);
    }
})  



//// testing
app.get('/api', function (req, res) {
    res.send('<p>This is a api Data</p>');
});