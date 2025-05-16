const express = require("express");
const router = express.Router();
const { Book } = require("../models");

router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Помилка сервера" });
  }
});

module.exports = router;