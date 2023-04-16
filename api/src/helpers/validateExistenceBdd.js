const { Dog } = require("../db.js");

const validateExistenceBdd = async (name) => {
  const dog = await Dog.findOne({
    where: { name: name },
  });

  return !!dog;
};

module.exports = validateExistenceBdd;
