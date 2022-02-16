const mongoose = require("mongoose");
const PostsSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    title: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    author: {
      name: {
        type: String,
      },
      image: {
        type: String,
      },
    },
    created_at: {
      type: String,
    },
    url: {
      type: String,
    },
    likes: {
      type: Number,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Posts || mongoose.model("Posts", PostsSchema);
