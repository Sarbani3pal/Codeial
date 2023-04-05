// importing user database
const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = function (req, res) {
    Post.find({})
    .populate('user')// to populate the user field
    .populate({
        path: 'comments',// to populate the comments of each post
        populate: {
            path: 'user'// to populate the user of each comment
        }
    })
    .exec(function (err, posts) {
        if (err) {
            console.log('Error in populating data.');
            return;
        }
        User.find({},function (err,users){
            return res.render('home', {
                title: 'Codeial : Home',
                posts: posts,
                friends: users
            });
        });
    });
};