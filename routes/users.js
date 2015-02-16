var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var md5      = require('MD5');

/* GET users listing. */
router.get('/', ensureAuthenticated, function(req, res){
	
	res.locals.route = 'users';

	res.render('users', { 
		user: req.user, 
		layout: 'layout'
	});
});

router.get('/create', function(req, res) {
});

router.post('/create', function(req, res) {
});

router.get('/create_profile', function(req, res) {
});

router.post('/create_profile', function(req, res) {
});

router.get('/edit', function(req, res) {
});

router.post('/edit', function(req, res) {
});

router.get('/edit_profile', function(req, res) {
});

router.post('/edit_profile', function(req, res) {
	// var Profile = mongoose.model('Profile');
	// Profile.findOne({user_id: user._id}, function(err, profile) {
	// 	if (!profile) {
	// 		p = new Profile({
	// 			user_id  : user._id,
	// 			fullname : 'Junel Mujar',
	// 			nickname : 'junel',
	// 			email    : 'jlmujar@trends.com.ph',
	// 			mobile   : '0917 886 4821',
	// 			local    : '2099',
	// 			phone    : '811 8181'
	// 		});
	// 		p.save();
	// 	}
	// });	
});

router.get('/delete', function(req, res) {
});

router.get('/changepass', function(req, res) {
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}

module.exports = router;