const validateDogCreationData = (
  name,
  life_span,
  temperament,
  weight,
  height,
  image
) => {
  const data = [name, life_span, weight, height, image];

  if (data.some((element) => !element)) {
    throw new Error("Faltan datos para la creacion del perro");
  }

  const isValid = data.every((element) => {
    return typeof element === "string";
  });

  if (temperament.length === 0) {
    throw new Error("No tiene temperamentos asociados");
  }

  if (!isValid) {
    throw new Error("Los datos ingresados no son del tipo correcto");
  }
};

module.exports = validateDogCreationData;
