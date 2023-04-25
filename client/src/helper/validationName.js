const validateName = (formState, errors, setErrors) => {
  let isValid = true;
  const newErrors = { ...errors };

  if (!formState.name) {
    setErrors({ ...newErrors, name: "Nombre vacio" });
    isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(formState.name)) {
    setErrors({ ...newErrors, name: "Nombre invalido" });
    isValid = false;
  } else if (formState.name.length < 5) {
    setErrors({
      ...newErrors,
      name: "El nombre debe tener al menos 5 caracteres",
    });
    isValid = false;
  } else {
    setErrors({ ...newErrors, name: "" });
  }

  return isValid;
};

export default validateName;
