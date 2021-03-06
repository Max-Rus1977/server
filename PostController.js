import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    }
    catch (e) {
      res.status(500).json(e);
    }
  }

  async grtAll(req, res) {
    try {
      const posts = await PostService.grtAll();
      return res.json(posts);
    }
    catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    }
    catch (e) {
      res.status(500).json(e);
    }
  }

  async updata(req, res) {
    try {
      const updatedPost = await PostService.updata(req.body);
      return res.json(updatedPost);
    }
    catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      return res.json(post);
    }
    catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();