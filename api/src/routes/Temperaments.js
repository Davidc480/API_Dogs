const { Router } = require("express");

const temperaments = Router();

temperaments.get("/", async (req, res) => {
  try {
    res.status(200).json("Route temperaments funcionando");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = temperaments;
