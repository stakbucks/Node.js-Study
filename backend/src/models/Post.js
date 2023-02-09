import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  views: Number,
  createdAt: Date,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
