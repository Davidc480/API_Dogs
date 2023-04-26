const formatDataForm = ({ name, life, temperament, weight, height, image }) => {
  const dog = {
    name: name,
    life_span: `${life.min} - ${life.max} years`,
    temperament: temperament,
    weight: `${weight.min} - ${weight.max}`,
    height: `${height.min} - ${height.max}`,
    image: image,
  };

  return dog;
};

export default formatDataForm;
