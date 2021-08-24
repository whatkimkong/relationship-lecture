// BONUS

const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  // TODO add comment schema
});

const CommentModel = model("Comment", commentSchema);

module.exports = CommentModel;