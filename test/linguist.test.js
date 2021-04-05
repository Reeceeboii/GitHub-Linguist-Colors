// eslint-disable-next-line no-unused-vars
const linguist = require('../dist/linguist');

test('GetHexColour() uppercase', () => {
  expect(linguist.GetHexColour('JavaScript')).toBe('#f1e05a');
});

test('GetHexColour() lowercase', () => {
  expect(linguist.GetHexColour('javascript')).toBe('#f1e05a');
});

test('GetColourMap()', () => {
  expect(linguist.GetColourMap() instanceof Map).toBe(true);
});
