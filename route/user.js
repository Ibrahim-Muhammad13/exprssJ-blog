const express = require("express");
const router = express.Router();
const user = require("./../controller/user");
const auth = require("./../middleware/auth");
router.get("/", (req, res) => {
    user.getAll(res);
});
router.get("/:id", auth,(req, res) => {
  user.getById(req,res);
});
router.post("/", (req, res) => {
  user.create(req.body, res);
});
router.put("/:id", (req, res) => {
  user.update(req, res);
});
router.delete("/:id", (req, res) => {
  user.deleteById(req, res);
});


router.post("/login", (req, res) => {
  user.login(req, res);
});

router.post("/register", (req, res) => {
  
  if(!req.body.email || !req.body.name) {
    return res.status(400).send("Missing email or password")
  }
  user.register(req, res);
});

module.exports = router;
