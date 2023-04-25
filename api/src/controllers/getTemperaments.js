require("dotenv").config();
const axios = require("axios");
const { URL_BASE, API_KEY } = process.env;
const { Temperament } = require("../../src/db.js");
const validateExistenceBdd = require("../helpers/validateExistenceBdd.js");

const getTemperaments = async () => {
  const response = await axios.get(`${URL_BASE}/breeds?key=${API_KEY}`);
  const dogs = response.data.map((dog) => {
    return dog.temperament;
  });

  const addTemperaments = [];

  const temperaments = dogs.join(" ").split(", ");

  for (const temperament of temperaments) {
    const exists = await validateExistenceBdd(temperament, Temperament);

    if (!exists) {
      const temperamentBdd = await Temperament.create({
        name: temperament,
      });
      addTemperaments.push(temperamentBdd);
    }
  }

  const name = addTemperaments.map((dog) => {
    return dog.name;
  });
  if (addTemperaments.length === 0) {
    const temperamensBdd = await Temperament.findAll();
    const name = temperamensBdd.map((dog) => {
      return dog.name;
    });
    return name;
  } else {
    return name;
  }
};

module.exports = getTemperaments;
