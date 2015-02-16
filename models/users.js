var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
	user_id  : mongoose.Schema.Types.ObjectId,
	fullname : String,
	nickname : String,
	email    : String,
	mobile   : String,
	local    : String,
	phone    : String
});


/*
* User Types: 1 - Administrator, 2 - User
* 
 */
var userSchema = mongoose.Schema({
	username   : String,
	password   : String,
	type       : {},
	profile    : {},
	created_at : Date,
	updated_at : Date
});


module.exports = mongoose.model('User', userSchema, 'users');