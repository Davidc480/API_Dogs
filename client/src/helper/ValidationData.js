const validateData = (formState, errors, setErrors, measure, property) => {
  let isValid = true;
  const newErrors = { ...errors };
  const {
    [measure]: { [property]: propertyValue },
    ...rest
  } = formState;
  if (propertyValue === null) {
    setErrors({
      ...newErrors,
      [measure]: `Por favor ingrese un valor mínimo y máximo para ${measure}`,
    });
    isValid = false;
  } else if (
    property === "max" &&
    rest[measure][property] <= rest[measure].min
  ) {
    setErrors({
      ...newErrors,
      [measure]: `El valor mínimo de ${measure} debe ser menor que el valor máximo`,
    });
    isValid = false;
  } else if (
    property === "min" &&
    rest[measure][property] >= rest[measure].max
  ) {
    setErrors({
      ...newErrors,
      [measure]: `El valor mínimo de ${measure} debe ser menor que el valor máximo`,
    });
    isValid = false;
  } else {
    setErrors({ ...newErrors, [measure]: "" });
  }

  return isValid;
};

export default validateData;
