const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: String,
  description: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Student" //whatever you defined the model as "blabla" in the model
  }
});

const PostModel = model("Post", postSchema);

module.exports = PostModel;