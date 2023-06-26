const express = require("express");

const router = express.Router();

// register
router.get("/", (req, res) => {
  res.send("Second");
});

router.get("/new", (req, res) => {
  res.send("Third");
});

//getUserProfile
router.get("/:id", (req, res) => {
  res.send(`User get With id ${req.params.id}`);
});

module.exports = router;
