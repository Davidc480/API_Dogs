require("dotenv").config();
const axios = require("axios");
const { URL_BASE, API_KEY } = process.env;
const { Dog } = require("../db.js");
const formatDogData = require("../helpers/formatDogData");

const getDogs = async (name) => {
  const response = await axios.get(`${URL_BASE}/breeds?key=${API_KEY}`);
  const dogs = response.data.reduce((array, dog) => {
    const validation = dog.name.toLowerCase().includes(name.toLowerCase());
    if (validation) {
      array.push(formatDogData(dog));
    }
    return array;
  }, []);

  if (dogs.length > 0) {
    return dogs;
  } else {
    const dogBdd = await Dog.findOne({ where: { name: name } });
    if (dogBdd) {
      return dogBdd;
    } else {
      throw new Error(`El nombre ${name} no se encuentra`);
    }
  }
};

module.exports = getDogs;
