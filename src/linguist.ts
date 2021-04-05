import { Colors, colors } from './linguistData';

// given a string, return the hex colour
export function getHexColour(lang: Colors): string {
  return colors[lang];
}

// return the entire colours map
export function getColourMap() {
  return colors;
}
