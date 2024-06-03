const express = require("express");
const router = express.Router();
const postsController = require("../../controllers/posts.controller");

router.post("/", postsController.createPost);
router.get("/", postsController.getAllPosts);
router.get("/:id", postsController.getPostById);

module.exports = router;
