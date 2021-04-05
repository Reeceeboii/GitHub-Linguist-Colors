const linguist = require('../dist/linguist');

// eslint-disable-next-line no-console
console.log(linguist.GetColourMap());

test('GetHexColour() JS uppercase', () => {
  expect(linguist.GetHexColour('JavaScript')).toBe('#f1e05a');
});

test('GetHexColour() JS lowercase', () => {
  expect(linguist.GetHexColour('javascript')).toBe('#f1e05a');
});

test('GetHexColour() Swift lowercase', () => {
  expect(linguist.GetHexColour('swift')).toBe('#ffac45');
});

test('GetHexColour() unknown language', () => {
  expect(linguist.GetHexColour('unobtainium')).toBe('#000');
});

test('GetColourMap() returns Map', () => {
  expect(linguist.GetColourMap() instanceof Map).toBe(true);
});
