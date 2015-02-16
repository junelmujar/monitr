var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/monitr');

exports.Projects   = require('./projects');
exports.Activities = require('./activities');
exports.Users      = require('./users');
exports.Profiles   = require('./profiles');