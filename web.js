// web.js
var express = require('express');
var path = require('path');
var app = express();
var logfmt = require('logfmt');


app.use(logfmt.requestLogger());
app.use(express.static(path.normalize(__dirname) + '/app'));
app.use('/bower_components',express.static(path.normalize(__dirname + '/bower_components')));

// app.set('views', path.normalize(__dirname) + '/app');
// app.set('view engine', 'html');

var port = Number(process.env.PORT || 8000);

app.get('/', function(req, res) {
	res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port);

console.log("Express server listening to port " + port);
