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

module.exports = mongoose.model('Profile', profileSchema, 'profiles');