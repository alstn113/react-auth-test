import mongoose from "mongoose";
const {
  Types: { ObjectId },
} = mongoose.Schema;

const PostSchema = mongoose.Schema({
  title: String,
  body: String,
  tags: [String],
  user: {
    _id: ObjectId,
    username: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
