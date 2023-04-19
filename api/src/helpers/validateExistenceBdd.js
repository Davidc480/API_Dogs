const { Dog, Temperament } = require("../db.js");

const validateExistenceBdd = async (name, model) => {
  const dog = await model.findOne({
    where: { name: name },
  });

  return !!dog;
};

module.exports = validateExistenceBdd;
