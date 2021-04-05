const linguistJSON = require('./linguistData');

const colorMap = new Map<string, string>();

// put colours and langs into a map
Object.keys(linguistJSON.default).forEach((key: any) => {
  colorMap.set(key.toLowerCase(), linguistJSON.default[key].color);
});

// given a string, return the hex colour, or hex black if it is not found
export function GetHexColour(lang: string): string {
  return colorMap.get(lang.toLowerCase()) || '#000';
}

// return the entire colour map
export function GetColourMap(): Map<string, string> {
  return colorMap;
}
