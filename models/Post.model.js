const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  // TODO add post schema
});

const PostModel = model("Post", postSchema);

module.exports = PostModel;