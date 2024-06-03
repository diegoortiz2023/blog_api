const { create, findById, findAll } = require("../models/post.model");

//const Post = require("../models/post.model");

const createPost = async (req, res) => {
  try {
    const [result] = await create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const [posts] = await findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const [post] = await findById(req.params.id);
    if (post.length === 0)
      return res.status(404).json({ error: "Post no econtrado" });
    res.status(200).json(post[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};
