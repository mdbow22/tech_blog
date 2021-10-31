const Comment = require('./comments');
const User = require('./users');
const Post = require('./posts');
const Tag = require('./tags');
const PostTag = require('./post_tags');

//Create the 1-many relationship between users and their posts
User.hasMany(Post, {
    foreignKey: 'author_id'
});

Post.belongsTo(User, {
    foreignKey: 'author_id'
});

//Create the 1-many relationship between posts and their comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

//Create the 1-many relationship between users and their comments
User.hasMany(Comment, {
    foreignKey: 'author_id'
});

Comment.belongsTo(User, {
    foreignKey: 'author_id'
});

//Create the many-many relationship between posts and their tags
Post.belongsToMany(Tag, {
    through: PostTag
});

Tag.belongsToMany(Post, {
    through: PostTag
});

module.exports = { User, Post, Comment, Tag, PostTag };