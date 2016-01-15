var mongoose 		= require('mongoose');
var libs            = require('requirefrom')('libs');
var log 			= libs('log').getLogger(module);
var config 			= libs('config');

//connect to MongoDB and load all models
mongoose.connect(config.get('mongoose:uri'));
mongoose.connection.once('connected', function() {
    log.info("Connected to mongo database");
});

require('../models');
