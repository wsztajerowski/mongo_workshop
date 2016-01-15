var express 			= require('express');
var requireDirectory 	= require('require-directory');
var log 				= require('./libs/log').getLogger(module);
var config 				= require('./libs/config');
var loader          	= require('./libs/loader');
log.debug("Starting application");
var app = express();

module.exports = app;
