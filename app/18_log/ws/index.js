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
	var text = '';
	for (var i = 0; i < req.body.length; i++) {
		text += req.body[i][0] + '\n';
		for (var j = 1; j < req.body[i].length; j++) {
			text += req.body[i][j] + " ";
		}
		text += '\n';
		text += '\n';
	}

	fs.appendFileAsync('trace.log', text).then(function() {
		res.json({});
	});
});


