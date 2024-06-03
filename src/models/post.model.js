const db = require("../config/db");

const create = (post) => {
  return db.query(
    "INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)",
    [post.titulo, post.descripcion, post.categoria, post.autor_id]
  );
};

const findById = (id) => {
  return db.query(
    "SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON p.autor_id = a.id WHERE p.id = ?",
    [id]
  );
};

const findAll = () => {
  return db.query(
    "SELECT p.*, a.nombre, a.email, a.imagen FROM posts p INNER JOIN autores a ON p.autor_id = a.id"
  );
};

module.exports = {
  create,
  findById,
  findAll,
};
