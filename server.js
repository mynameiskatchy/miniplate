/**
 * server.js
 * To set up express server to load bundle.js and index.html files
 */

const path = require('path');
const express = require('express');

const app = express();
const PORT = 5000;

// const {
//     PORT = 5000,
// } = process.env;

app.use(express.static('build'));  // where index.html and webpack bundle reside

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/build/' + 'index.html'));
});

//// testing
app.get('/api', function (req, res) {
    res.send('<p>This is a api Data</p>');
});

app.listen(PORT, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Application server started at http://localhost:%s', PORT);
    }
})  

