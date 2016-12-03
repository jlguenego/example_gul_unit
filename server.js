var express = require('express');
var serveIndex = require('serve-index');



var app = express();

var htdocs = '.';

var slowUrl = ['/app/25_compiling_lifecycle/tmpl/*'];

app.all(slowUrl, function(req, res, next) {
	console.log('slow url - req.url', req.url);
	setTimeout(function() {
		next();
	}, 2000);
});

app.use(function(req, res, next) {
	console.log('req.url', req.url);
	next();
});

var ws16 = require('./app/16_jlg-load-pictures/ws/index.js');
app.use('/app/16_jlg-load-pictures/ws', ws16);

app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {icons: true}));



app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

var port = 8000;
app.listen(port, function() {
	console.log('server started on port ' + port);
});
