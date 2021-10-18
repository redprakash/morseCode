import convertToMorse from './js-modules/englishToMorse.js';
import morseCodeObjectFormat from './js-modules/morseObjectFormat.js';
const emptyFieldError = new Error('Required');
describe('Test cases for the english to Morse function', () => {
  it('should return valid morse code', () => {
    expect(convertToMorse('e', morseCodeObjectFormat)).toBe('.');
  });
  it('should throw an error if str is empty', () => {
    expect(() => convertToMorse('', morseCodeObjectFormat)).toThrow(
      emptyFieldError
    );
  });
});
