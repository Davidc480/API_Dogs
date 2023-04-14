function formatDogData({ id, name, life_span, temperament, image }) {
  return {
    id,
    name,
    life_span,
    temperament,
    image: image.url,
  };
}
module.exports = formatDogData;
