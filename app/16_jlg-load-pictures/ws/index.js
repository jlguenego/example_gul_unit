var express = require('express');
// eslint-disable-next-line new-cap
var router = express.Router();
module.exports = router;

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var fs = require('fs');

router.use(function(req, res, next) {
	console.log('router 16 req.url', req.url);
	next();
});

router.get('/s1', function(req, res) {
	setTimeout(function() {
		res.json({result: 's1', titi: 'toto'});
	}, 200);
});

var upl = upload.fields([{ name: 'pictures', maxCount: 8 }, { name: 'others', maxCount: 1 }])
router.post('/upload-form-with-nice-pictures', upl, function(req, res, next) {
	console.log('req.files', req.files);
	console.log('req.body', req.body);

	for (var name in req.files) {
		var array = req.files[name];
		for (var i = 0; i < array.length; i++) {
			var spec = array[i];
			console.log('spec', spec);
			var targetPath = 'uploads/' + spec.originalname;
			fs.rename(spec.path, targetPath);
		}
	}
	res.json(req.files);
});

