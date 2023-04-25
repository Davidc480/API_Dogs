const validateData = (formState, errors, setErrors, measure, property) => {
  let isValid = true;

  // Validación para verificar si hay algo en los inputs
  if (!formState[measure][property]) {
    setErrors({
      ...errors,
      [measure]: {
        ...errors[measure],
        [property]: `Por favor ingrese un valor para ${measure}`,
      },
    });
    isValid = false;

    // Borra las propiedades min y max si hay error y guarda un string con el error
    setErrors((prevErrors) => ({
      ...prevErrors,
      [measure]: {
        ...prevErrors[measure],
        min: undefined,
        max: undefined,
        error: `Error en ${measure}: ${property}`,
      },
    }));
  } else if (
    // Validación para verificar que el valor mínimo sea menor que el valor máximo
    formState[measure].min !== "" &&
    formState[measure].max !== "" &&
    parseInt(formState[measure].min) >= parseInt(formState[measure].max)
  ) {
    setErrors({
      ...errors,
      [measure]: {
        ...errors[measure],
        [property]: `El valor mínimo debe ser menor que el valor máximo para ${measure}`,
      },
    });
    isValid = false;

    // Borra las propiedades min y max si hay error y guarda un string con el error
    setErrors((prevErrors) => ({
      ...prevErrors,
      [measure]: {
        ...prevErrors[measure],
        min: undefined,
        max: undefined,
        error: `Error en ${measure}: ${property}`,
      },
    }));
  } else if (
    // Validación para verificar si el campo "min" está vacío y "max" está lleno
    formState[measure].min === "" &&
    formState[measure].max !== ""
  ) {
    setErrors({
      ...errors,
      [measure]: {
        ...errors[measure],
        min: undefined,
        max: undefined,
        error: `Por favor ingrese un valor para "min" en ${measure}`,
      },
    });
    isValid = false;
  } else if (
    // Validación para verificar si el campo "max" está vacío y "min" está lleno
    formState[measure].max === "" &&
    formState[measure].min !== ""
  ) {
    setErrors({
      ...errors,
      [measure]: {
        ...errors[measure],
        min: undefined,
        max: undefined,
        error: `Por favor ingrese un valor para "max" en ${measure}`,
      },
    });
    isValid = false;
  } else {
    // Si la validación es exitosa, pisa el string de error y añade un objeto con las propiedades min y max iniciales
    setErrors((prevErrors) => ({
      ...prevErrors,
      [measure]: {
        ...prevErrors[measure],
        min: formState[measure].min,
        max: formState[measure].max,
        error: undefined,
      },
    }));
  }

  return isValid;
};

export default validateData;
