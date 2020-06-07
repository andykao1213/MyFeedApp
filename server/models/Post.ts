import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  content: String,
  imageUrl: String,
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      content: String,
    },
  ],
  likes: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
    },
  ],
});

const Post = model('Post', postSchema);

export default Post;
