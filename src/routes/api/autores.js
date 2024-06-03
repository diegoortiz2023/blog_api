const express = require("express");
const router = express.Router();
const autoresController = require("../../controllers/autores.controller");

router.post("/", autoresController.createAutor);
router.get("/", autoresController.getAllAutores);
router.get("/:id", autoresController.getAutorById);
router.get("/:id/posts", autoresController.getPostsByAuthor);

module.exports = router;
