import morseCodeObjectFormat from './js-modules/morseObjectFormat.js';
import swapKeyValue from './js-modules/swapKeyValue.js';
import convertToMorse from './js-modules/englishToMorse.js';
import morseToEnglish from './js-modules/morseToEnglish.js';

const changedObj = swapKeyValue(morseCodeObjectFormat);

const convertBtn = document.querySelector('.input__button');
const convertOption = document.querySelector('.input__options');
const output = document.querySelector('.output');

convertBtn.addEventListener('click', () => {
  const userInputValue = document.querySelector('.input__textarea').value;
  if (userInputValue === '') {
    alert('Please enter the text or morse code');
  } else {
    const userOption = convertOption.selectedIndex;
    if (userOption === 0) {
      //0 => engligh to Morse

      let convertedVal = convertToMorse(userInputValue, morseCodeObjectFormat);

      output.textContent = convertedVal;
    } else {
      //1 => Morse to English
      if (/[^.-/ ]/.test(userInputValue)) {
        alert('Please enter a valid morse code');
      } else {
        let convertedEnglishText = morseToEnglish(userInputValue, changedObj);
        output.textContent = convertedEnglishText;
      }
    }
  }
});

// console.log(
//   morseToEnglish('.. / .- -- / .--. .-. .- -.- .- ... ....', changedObj)
// );

// console.log(convertToMorse('I am Prakash', morseCodeObjectFormat));
