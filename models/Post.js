"use strict";

var mongoose = require('mongoose');

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
        comment : {
            author: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        },
        _id : false
    }]
}, {_id: true});

mongoose.model('Post', PostSchema);
