var mongoose = require('mongoose');
var Post=mongoose.model('Post');

exports.readAll = function (callback){
    Post.find({}, {comments: 0},function (err, data) {
        if(err) {
            return callback(err);
        }
        callback(null, data);
    });
};

exports.read = function(link, callback) {
    Post.findOne({link: link }, function (err, data) {
        if(err) {
            return callback(err);
        }
        if(data === null){
            return callback('Invalid post link: ' + link);
        }
        callback(null, data);
    });
};

exports.create = function(postBody, callback) {
    var post = new Post(postBody);
    post.save(function(err, data) {
        if(err) {
            return callback(err);
        }
        callback(null, data);
    });
};

exports.createComment = function(postId, comment, callback) {
  Post.findOne({ _id: postId }, function(err, post) {
      if (err) {
          return callback(err);
      }

      post.comments.push(comment);

      post.save(function(err, data) {
          if(err) {
              return callback(err);
          }
          callback(null, data);
      });
  });
};
