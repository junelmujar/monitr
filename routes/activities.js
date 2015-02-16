var express  = require('express');
var mongoose = require('mongoose');
var router   = express.Router();

/* GET activities listing. */

var Activity = mongoose.model('Activity');

router.get('/', ensureAuthenticated, function(req, res) {

	res.locals.route = 'activities';

	Activity
		.find({ user_id: req.user._id })
		.limit(5) 
		.sort('-created_at')
		.exec(function(err, activities) {	

			res.render('activities', { 
				user       : req.user, 
				activities : activities 
			});

		});
});

router.get('/view/:id', ensureAuthenticated, function(req, res) {

	res.locals.route = 'activities';
	if (req.params.id) {
		Activity.findOne({ _id : req.params.id }, function(err, activity) {

	        res.render('activity', { 
				user     : req.user, 
				activity : activity 
	        });

		});
	} else {
		res.redirect('/activities');
	}
});

router.get('/create', ensureAuthenticated, function(req, res) {
	console.log('add');
	res.locals.route = 'activities';
    res.render('activity_add', { 
		user : req.user
    });

});

router.post('/create', ensureAuthenticated, function(req, res) {

	var a = new Activity({
		user_id     : req.user._id,
		title       : req.body.title,
		description : req.body.description,
		created_at  : new Date(),
		updated_at  : null
	});

	a.save();

	res.redirect('/activities');
});

router.get('/edit/:id', ensureAuthenticated, function(req, res) {

	if (req.params.id) {

		res.locals.route = 'activities';

		Activity.findOne({ _id : req.params.id }, function(err, activity) {

			if (err) res.redirect('/activities');

	        res.render('activity_edit', { 
				user     : req.user, 
				activity : activity 
	        });

		});		
	} else {
		res.redirect('/activities');
	}
});

router.post('/edit', ensureAuthenticated, function(req, res) {
	
	Activity.findOne({ _id : req.body.id }, function(err, activity) {

		if (err) res.redirect('/activities');

		activity.title       = req.body.title;
		activity.description = req.body.description;
		updated_at           = new Date(),

        activity.save();

        res.redirect('/activities');
	});	

});

router.get('/delete', ensureAuthenticated, function(req, res) {
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}


module.exports = router;