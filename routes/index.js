var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var md5      = require('MD5');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {

	if (req.isAuthenticated()) {
		res.redirect('/dashboard');
	} else {
		res.render('login', { title: 'System Login' });
	}
  	
});

router.get('/login', function(req, res) {

	// var User = mongoose.model('User');

	// User.findOne({ username: 'jlmujar'}, function(err, user) {
	// 	if (!user) {
			
	// 		var u = new User({
	// 			username   : 'jlmujar',
	// 			password   : md5('password'),
	// 			type       : { id: 1, label: 'Administrator' },
	// 			created_at : new Date(),
	// 			updated_at : null
	// 		});

	// 		u.save();

	// 	} else {
	// 		var Profile = mongoose.model('Profile');
	// 		Profile.findOne({user_id: user._id}, function(err, profile) {
	// 			if (!profile) {
	// 				p = new Profile({
	// 					user_id  : user._id,
	// 					fullname : 'Junel Mujar',
	// 					nickname : 'junel',
	// 					email    : 'jlmujar@trends.com.ph',
	// 					mobile   : '0917 886 4821',
	// 					local    : '2099',
	// 					phone    : '811 8181'
	// 				});
	// 				p.save();
	// 			}
	// 		});

	// 		console.log(user);
	// 	}
	// });	
	
	res.render('login', { title: 'System Login' });
});

router.post('/login', passport.authenticate('local', { 
					successRedirect : '/', 
					failureRedirect : '/login', 
					failureFlash    : true 
				})
);

router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

module.exports = router;