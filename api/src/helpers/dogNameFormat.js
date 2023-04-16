const dogNameFormat = (name) => {
  function capitaliFirstLetter(words) {
    // Replace utiliza Esta expresión regular, busca la primera letra en un texto
    // permite cualquier cantidad de caracteres que no sean letras.
    return words.replace(/^[^a-zA-Z]*[a-zA-Z]/, (firstLetter) =>
      firstLetter.toUpperCase()
    );
  }

  const wordsArray = name.toLowerCase().split(" ");
  const capitalWordsArray = wordsArray.map((word) => capitaliFirstLetter(word));
  const capitalizedSentence = capitalWordsArray.join(" ");
  return capitalizedSentence;
};

module.exports = dogNameFormat;
