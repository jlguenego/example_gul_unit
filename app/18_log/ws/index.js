var express = require('express');

// eslint-disable-next-line new-cap
var router = express.Router();
module.exports = router;

var Promise = require('bluebird');
var fs = require("fs");
Promise.promisifyAll(fs);

router.use(function(req, res, next) {
	console.log('router 18 req.url', req.url);
	next();
});

router.post('/log', function(req, res) {
	console.log('appending to trace.log', req.body);
	fs.appendFileAsync('trace.log', JSON.stringify(req.body) + '\n').then(function() {
		res.json({});
	});
});


