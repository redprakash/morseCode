const convertToMorse = (str, morseCodeObject) => {
  if (!str || !morseCodeObject) {
    return alert('errrr');
  }
  return str
    .toLowerCase()
    .split('')
    .map((elements) => {
      if (!morseCodeObject[elements]) {
        return elements;
      } else return morseCodeObject[elements];
    })
    .join(' ');
};
export default convertToMorse;
