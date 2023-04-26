const { Dog, Temperament } = require("../db.js");
const validateExistenceBdd = require("../helpers/validateExistenceBdd.js");

const createDog = async (
  name,
  life_span,
  temperament,
  weight,
  height,
  image
) => {
  if (!(await validateExistenceBdd(name, Dog))) {
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
    return `El perro con nombre ${name} fue creado con exito`;
  }
  throw Error(`El perro con el nombre ${name} ya existe`);
};

module.exports = createDog;
