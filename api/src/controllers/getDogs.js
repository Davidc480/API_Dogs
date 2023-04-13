const axios = require("axios");
const { URL_BASE, API_KEY } = process.env;

const getDogs = async () => {
  const response = await axios.get(`${URL_BASE}/breeds?key=${API_KEY}`);
  const dogs = response.data.map(
    ({ id, name, life_span, temperament, image }) => ({
      id,
      name,
      life_span,
      temperament,
      image: image.url,
    })
  );
  return dogs;
};
