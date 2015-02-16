var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

router.get('/api/activities/list', function(req, res) {
	// Input:
	// num_rows
	// page 

	// Output:
	// total_records
	// rows
});

router.get('/api/projects/list', function(req, res) {
	// Input:
	// num_rows
	// page 

	// Output:
	// total_records
	// rows	
});

module.exports = router;