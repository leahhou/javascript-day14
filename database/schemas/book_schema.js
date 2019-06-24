const mongoose = require("mongoose");
const CommentSchema = require("./comment_schema");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author" // name of the database it refer to
    },
    comments: [CommentSchema]
});

module.exports = BookSchema;