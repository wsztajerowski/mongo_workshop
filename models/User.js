"use strict";

var mongoose = require('mongoose');
var salt = "password_salt"

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
	name: {
		type: String,
		required: true
	},
    needChangePassword: {
        type: Boolean,
        default: false
    },
	role: {
		type: String,
		required: true,
		default: 'USER',
		enum: ['USER', 'ADMIN']
	}
}, {_id: true});

//Model transformation
if (!UserSchema.options.toJSON) UserSchema.options.toJSON = {};
UserSchema.options.toJSON.transform = function (doc, ret, options) {
    return { name: ret.name, email: ret.email, needChangePassword: ret.needChangePassword }
};

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        user.password = hash;
        next();
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    cb(null, passw + this.salt ==  this.password);
};

module.exports = mongoose.model('User', UserSchema, 'users');
