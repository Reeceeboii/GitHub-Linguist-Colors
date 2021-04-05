const linguist = require('../dist/linguist');

test('GetHexColour() JS uppercase', () => {
  expect(linguist.getHexColour('JavaScript')).toBe('#f1e05a');
});

test('GetColourMap() returns Map', () => {
  expect(linguist.getColourMap() instanceof Object).toBe(true);
});
