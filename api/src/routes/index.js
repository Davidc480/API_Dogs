const { Router } = require("express");
const getDogs = require("../controllers/getDogs");
const getDogsId = require("../controllers/getDogsId");
const getDogsName = require("../controllers/getDogsName");
const createDog = require("../controllers/createDog");
const validateDogCreationData = require("../middlewares/validateDogCreationData");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res) => {
  res.status(200).send("Server funcionando");
});

router.get("/dogs", async (req, res) => {
  try {
    const dogs = await getDogs();
    res.status(200).json(dogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/dogs/name", async (req, res) => {
  try {
    const { name } = req.query;
    const dogsName = await getDogsName(name);
    res.status(200).json(dogsName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/dogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dogsId = await getDogsId(id);
    res.status(200).json(dogsId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/dogs", async (req, res) => {
  try {
    const { name, life_span, temperament, weight, height, image } = req.body;
    validateDogCreationData(
      name,
      temperament,
      life_span,
      weight,
      height,
      image
    );
    const dogCreate = await createDog(
      name,
      life_span,
      temperament,
      weight,
      height,
      image
    );
    res.status(200).json(dogCreate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
