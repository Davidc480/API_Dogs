const { Router } = require("express");
const getDogs = require("../controllers/getDogs");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res) => {
  res.status(200).send("Server funcionando");
});

router.get("/dogs", (req, res) => {
  try {
    res.status(200).json(getDogs());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
