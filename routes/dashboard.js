var express  = require('express');
var mongoose = require('mongoose');
var router   = express.Router();

/* GET activities listing. */
router.get('/', ensureAuthenticated, function(req, res) {

	var Activity = mongoose.model('Activity');
	
	res.locals.route = 'dashboard';

	Activity
		.find({ user_id: req.user._id })
		.limit(5) 
		.sort('-created_at')
		.exec(function(err, activities) {	

			res.render('dashboard', { 
				user       : req.user, 
				activities : activities 
			});

		});

});

router.get('/', ensureAuthenticated, function(req, res) {
});

router.get('/create', ensureAuthenticated, function(req, res) {
});

router.post('/create', ensureAuthenticated, function(req, res) {
});

router.get('/edit', ensureAuthenticated, function(req, res) {
});

router.post('/edit', ensureAuthenticated, function(req, res) {
});

router.get('/delete', ensureAuthenticated, function(req, res) {
});

router.get('/changepass', ensureAuthenticated, function(req, res) {
});

function ensureAuthenticated(req, res, next) {
		if (req.isAuthenticated()) { return next(); }
		res.redirect('/login')
}

module.exports = router;