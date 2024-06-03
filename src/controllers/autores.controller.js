const {
  create,
  findAll,
  findById,
  findPostsByAuthor,
} = require("../models/autor.model");

const createAutor = async (req, res) => {
  try {
    const [result] = await create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllAutores = async (req, res) => {
  try {
    const [autores] = await findAll();
    res.status(200).json(autores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAutorById = async (req, res) => {
  try {
    const [autor] = await findById(req.params.id);
    if (autor.length === 0)
      return res.status(404).json({ error: "Autor no Encontrado" });
    res.status(200).json(autor[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostsByAuthor = async (req, res) => {
  try {
    const [posts] = await findPostsByAuthor(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAutor,
  getAllAutores,
  getAutorById,
  getPostsByAuthor,
};
