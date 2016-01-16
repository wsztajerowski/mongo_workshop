var express 			= require('express');
var requireDirectory 	= require('require-directory');
var log 				= require('./libs/log').getLogger(module);
var config 				= require('./libs/config');
var loader          	= require('./libs/loader');
var bodyParser = require('body-parser');
var postRoutes = require('./routes/posts');

log.debug("Starting application");
var app = express();

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', postRoutes.index);
app.get('/posts/:link', postRoutes.show);
app.post('/posts', postRoutes.create);
app.post('/posts/:id/comments', postRoutes.createComment);

module.exports = app;
