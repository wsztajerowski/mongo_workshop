var Post = require("../models/Post");

exports.index = function(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { posts: posts });
    });
};

exports.show = function(req, res, next) {
    Post.findOne({ link: req.params.link }, function(err, post) {
        if (!post) {
          return next();
        }
        res.render('posts/show', { post: post });
    });
}
