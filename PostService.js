import FileServis from "./FileServis.js";
import Post from "./Post.js";

class PostService {
  async create(post, picture) {
    const fileName = FileServis.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost(post);
  }

  async grtAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id не указан!')
    }
    const post = await Post.findById(id);
    return post;
  }

  async updata(post) {
    if (!post._id) {
      throw new Error('id не указан!')
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('id не указан!')
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();