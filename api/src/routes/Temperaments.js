const { Router } = require("express");
const getTemperaments = require("../controllers/getTemperaments");

const temperaments = Router();

temperaments.get("/", async (req, res) => {
  try {
    const Temp = await getTemperaments();
    res.status(200).json(Temp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = temperaments;
