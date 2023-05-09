const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'users'}
    });

const post = mongoose.model('posts', postSchema);

module.exports = post;