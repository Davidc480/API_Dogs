require("dotenv").config();
const axios = require("axios");
const { URL_BASE, API_KEY } = process.env;
const formatDogData = require("../helpers/formatDogData");
const { Dog } = require("../db.js");

const getDogsName = async () => {
  const response = await axios.get(`${URL_BASE}/breeds?key=${API_KEY}`);
  const dogs = response.data.map(formatDogData);

  const dbDogs = await Dog.findAll();

  return [...dogs, ...dbDogs];
};

module.exports = getDogsName;
