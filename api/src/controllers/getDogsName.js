require("dotenv").config();
const axios = require("axios");
const { URL_BASE, API_KEY } = process.env;
const formatDogData = require("../helpers/formatDogData");

const getDogs = async () => {
  const response = await axios.get(`${URL_BASE}/breeds?key=${API_KEY}`);
  const dogs = response.data.map(formatDogData);
  return dogs;
};

module.exports = getDogs;
