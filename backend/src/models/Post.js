import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  text: { type: String, required: true, trim: true },
  views: { type: Number, require: true, default: 0 },
  createdAt: { type: Date, required: true, default: Date.now },
  createdBy: { type: String, required: true },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
