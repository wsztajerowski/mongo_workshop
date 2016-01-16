var express 			= require('express');
var requireDirectory 	= require('require-directory');
var log 				= require('./libs/log').getLogger(module);
var config 				= require('./libs/config');
var loader          	= require('./libs/loader');
var postRoutes = require('./routes/posts');

log.debug("Starting application");
var app = express();

app.set('view engine', 'jade');

app.get('/', postRoutes.index);
app.get('/posts/:link', postRoutes.show);

module.exports = app;
