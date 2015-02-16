var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
	user_id     : mongoose.Schema.Types.ObjectId,
	title       : String,
	description : String,
	created_at  : Date,
	updated_at  : Date
});

module.exports = mongoose.model('Project', projectSchema, 'projects');