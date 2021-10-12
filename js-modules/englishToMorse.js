const convertToMorse = (str, morseCodeObject) => {
  if (!str || !morseCodeObject) {
    // return alert('error');
    throw new Error('Required');
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
// .replace(/[^A-Z]/g,"")
// /[^.-/ ]/
// [^.\-/ ]
