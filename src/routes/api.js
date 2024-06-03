const express = require("express");
const router = express.Router();

router.use("/autores", require("./api/autores"));
router.use("/posts", require("./api/posts"));

module.exports = router;
