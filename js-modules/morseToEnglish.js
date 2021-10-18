const morseToEnglish = (str, obj) => {
  if (!str || !obj) {
    throw new Error('Required');
  }
  return str
    .split('  ')
    .map((elem) =>
      elem
        .split(' ') //character code 1 space apart
        .map((char) => obj[char])
        .join('')
    )
    .join(' ') // adding spaces between words
    .trim(); //Removes the leading and trailing white space and line terminator characters from a string.
};
export default morseToEnglish;
