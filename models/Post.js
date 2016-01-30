"use strict";
var requireFrom = require('requirefrom');
var libs        = requireFrom('libs');
var logger		  = libs('log').getLogger(module);
var mongoose    = require('mongoose');

var PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comments : [{
        author: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        _id : false
    }]
}, {_id: true});

function startDebug() {
  logger.debug(this instanceof mongoose.Query); // true
  this.start = Date.now();
}

function finishDebug(result) {
  logger.debug(this instanceof mongoose.Query); // true
  // prints returned documents
  logger.debug('find() returned ' + JSON.stringify(result, null, '\t'));
  // prints number of milliseconds the query took
  logger.debug('find() took ' + (Date.now() - this.start) + ' millis');
}

function slugify(string) {
  return string.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
}

module.exports = mongoose.model('Post', PostSchema);
logger.info('Post schema loaded');
