var requireFrom = require('requirefrom');
var libs        = requireFrom('libs');
var log 			  = libs('log').getLogger(module);
var services    = requireFrom('services');
var postService     = services('PostService');


exports.index = function(req, res) {
    postService.readAll(function(err, posts) {
        res.render('posts/index', { posts: posts });
    });
};

exports.show = function(req, res, next) {
    postService.read( req.params.link , function(err, post) {
        if (!post) {
          return next();
        }
        res.render('posts/show', { post: post });
    });
};

exports.create = function(req, res) {
    var post = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    postService.create(post, function (err) {
        if(err){
          log.error(err);
        }
        res.redirect("/");
    });
};

exports.createComment = function(req, res, next) {
    var comment = {
        author: req.body.author,
        content: req.body.content
    };
    postService.createComment( req.params.id, comment, function(err, post) {
        if(err){
          log.error(err);
        }
        res.redirect("/posts/" + post.link);
    });
};
