const express = require("express");
const router = express.Router();
const posts = require("./../controller/posts");

router.get("/", (req, res) => {
    posts.getAll(res);
});
router.get("/:id", (req, res) => {
  posts.getById(req,res);
});
router.post("/", (req, res) => {
  posts.create(req.body, res);
});
router.put("/:id", (req, res) => {
  posts.update(req, res);
});
router.delete("/:id", (req, res) => {
  posts.deleteById(req, res);
});

module.exports = router;
