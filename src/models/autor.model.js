const db = require("../config/db");

const create = (autor) => {
  return db.query(
    "INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)",
    [autor.nombre, autor.email, autor.imagen]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM autores WHERE id = ?", [id]);
};

const findAll = () => {
  return db.query("SELECT * FROM autores");
};

const findPostsByAuthor = (id) => {
  return db.query(
    "SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON p.autor_id = a.id WHERE a.id = ?",
    [id]
  );
};

module.exports = {
  create,
  findById,
  findAll,
  findPostsByAuthor,
};
