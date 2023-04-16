const { Dog, Temperament } = require("../db.js");
const validateExistenceBdd = require("../helpers/validateExistenceBdd.js");
const dogNameFormat = require("../helpers/formatDogData.js");

const createDog = async (
  name,
  life_span,
  temperament,
  weight,
  height,
  image
) => {
  const nameFormat = dogNameFormat(name);
  if (validateExistenceBdd(nameFormat)) {
    const dog = await Dog.create({
      name,
      life_span,
      weight,
      height,
      image,
    });

    for (element of temperament) {
      const temperamentBdd = await Temperament.findOne({
        where: { name: element },
      });
      await dog.addTemperament([temperamentBdd]);
    }

    return `El perro con nombre ${nameFormat} fue creado con exito`;
  }
  throw Error(`El perro con el nombre ${nameFormat} ya existe`);
};

module.exports = createDog;
