export type ColorMap = {
  black: string,
  red: string,
  yellow: string,
  blue: string,
  magenta: string,
  cyan: string,
  white: string
};

export type Colors = {
  separator: keyof ColorMap,
  string: keyof ColorMap,
  number: keyof ColorMap,
  boolean: keyof ColorMap,
  null: keyof ColorMap,
  key: keyof ColorMap,
}

/**
 * Given an object, it returns its JSON representation colored using
 * ANSI escape characters.
 * @param {(Object | string)} json - JSON object to highlighter.
 * @param {Colors} [colors] - A map with the ANSI characters for each supported color.
 * @param {ColorMap} [colorMap] - An object to configure the coloring.
 * @param {number} [spacing=2] - The indentation spaces.
 * @returns {string} Stringified JSON colored with ANSI escape characters.
 */
export default function colorJson(
  json: (Object | string),
  colors?: Colors,
  colorMap?: ColorMap,
  spacing?: number,
): string
