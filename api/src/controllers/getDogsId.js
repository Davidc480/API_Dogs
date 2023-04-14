require("dotenv").config();
const axios = require("axios");
const formatDogData = require("../helpers/formatDogData");
const { URL_BASE, API_KEY } = process.env;
const { Dog } = require("../db.js");
const isUUID = require("../helpers/isUUID");

const getDogsId = async (id) => {
  const response = await axios.get(`${URL_BASE}/breeds?key=${API_KEY}`);
  const dogId = response.data.find((dog) => {
    return dog.id == Number(id);
  });

  const validationUuid = isUUID(id);

  if (dogId) {
    return formatDogData(dogId);
  } else if (validationUuid) {
    const dogBdd = await Dog.findByPk(id);
    return dogBdd;
  } else {
    return `El id ${id} no se encuentra`;
  }
};

module.exports = getDogsId;
