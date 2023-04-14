function formatDogData({
  id,
  name,
  life_span,
  temperament,
  image,
  weight,
  height,
}) {
  return {
    id,
    name,
    life_span,
    temperament,
    weight: weight.imperial,
    height: height.imperial,
    image: image.url,
  };
}
module.exports = formatDogData;
