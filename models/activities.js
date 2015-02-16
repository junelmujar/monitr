var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
		user_id     : mongoose.Schema.Types.ObjectId,
		title       : String,
		description : String,
		created_at  : Date,
		updated_at  : Date
	}	
);

module.exports = mongoose.model('Activity', activitySchema, 'activities');