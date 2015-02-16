var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/', function(req, res) {
	
	res.locals.route = 'projects';

	res.render('projects', { 
		user: req.user, 
		layout: 'layout'
	});	
});

router.get('/', function(req, res) {
});

router.get('/create', function(req, res) {
});

router.post('/create', function(req, res) {
});

router.get('/edit', function(req, res) {
});

router.post('/edit', function(req, res) {
});

router.get('/delete', function(req, res) {
});

router.get('/changepass', function(req, res) {
});

module.exports = router;