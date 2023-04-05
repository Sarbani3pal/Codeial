// importing user database
const Post = require('../models/post');
const Comment = require('../models/comment');
// create post
module.exports.createPost = function (req, res) {
    // return res.redirect('/');
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function (err, post) {
        if(err){
            console.log('Error in creating post');
            return;
        }
        return res.redirect('back');
    });
};
// delete post
module.exports.destroyPost = function (req,res) {
    Post.findById(req.params.id, function(err,post){
        if(post.user == req.user.id){
            post.remove();
            Comment.deleteMany({post: req.params.id}, function (err) {
                res.redirect('back');
            });
        }
    });
};