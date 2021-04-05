let linguistJSON = require('./linguistData')
linguistJSON = linguistJSON["default"]

let colorMap = new Map<string, string>();

for (var key in linguistJSON) {
  if (linguistJSON.hasOwnProperty(key)) {
    colorMap.set(key.toLowerCase(), linguistJSON[key].color)
  }
}

// given a string, return the hex colour, or hex black if it is not found
export function GetHexColour(lang: string): string {
  return colorMap.get(lang.toLowerCase()) || '#000';
}

// return the entire colour map
export function GetColourMap(): Map<string, string> {
  return colorMap;
}