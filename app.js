var express       = require('express');
var session       = require('express-session')
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose      = require('mongoose');
var md5           = require('md5');
var flash         = require('connect-flash');
var swig          = require('swig');

var models        = require('./models');

var routes        = require('./routes/index');
var users         = require('./routes/users');
var projects      = require('./routes/projects');
var activities    = require('./routes/activities');
var dashboard     = require('./routes/dashboard');

var app           = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.enable('view cache');
app.set('layout', 'base');
app.engine('html', swig.renderFile);

// Disable cache for development
app.set('view cache', false);
swig.setDefaults({ cache: false });

//app.engine('html', require('hogan-express'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
            {
                    secret: '1234567890QWERTY',
                    saveUninitialized: true,
                    resave: true
            })
        );
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes);
app.use('/dashboard', dashboard);
app.use('/activities', activities);
app.use('/projects', projects);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

passport.use(new LocalStrategy(function(username, password, done) {
    var User = mongoose.model('User');
    User.findOne({ username: username, password: md5(password) }, function(err, user) {
        if (err) { return done(err); }
        if (!user) { 
            return done(null, false, { message: 'Unknown/invalid user!'}); 
        } else {
            return done(null, user);
        }
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
    var User = mongoose.model('User');
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})

module.exports = app;
