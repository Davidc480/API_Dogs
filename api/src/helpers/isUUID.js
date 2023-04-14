const isUUID = (id) => {
  const uuidRegex =
    /^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i;
  return uuidRegex.test(id);
};

module.exports = isUUID;
