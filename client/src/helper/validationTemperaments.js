const validateTemperaments = (formState, errors, setErrors) => {
  let isValid = true;
  const newErrors = { ...errors };
  const temperament = formState.temperament;

  if (temperament.length < 2 || temperament.length > 5) {
    setErrors({
      ...newErrors,
      temperament: "Mínimo 2 temperamentos, máximo 5",
    });
    isValid = false;
  } else {
    setErrors({ ...newErrors, temperament: "" });
  }

  return isValid;
};

export default validateTemperaments;
