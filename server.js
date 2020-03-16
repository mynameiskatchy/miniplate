var express = require('express');
var path = require('path');

var app = express();

var port = 5000;

// PUBLIC_DIR = path.resolve(__dirname, 'public')
// HTML_FILE = path.join(PUBLIC_DIR, 'index.html')

// app.use(express.static(PUBLIC_DIR))

// app.get('/', (req, res) => {
//     res.send(HTML_FILE)
// })

app.use(express.static('public'));  // where index.html and webpack bundle reside

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/api', function (req, res) {
    res.send('<p>This is a api Data</p>');
});

app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Application running on port: " + port);
    }
})  