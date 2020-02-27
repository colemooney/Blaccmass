const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const postSchema = new Schema({
  title: String,
  image: String,
  text: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;