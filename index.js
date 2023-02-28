import { supportsColor } from './lib/supportsColor.js';

export const defaultColorMap = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

export const defaultColors = {
  separator: 'yellow',
  string: 'green',
  number: 'magenta',
  boolean: 'cyan',
  null: 'red',
  key: 'white'
};

/**
 * Given an object, it returns its JSON representation colored using
 * ANSI escape characters.
 * @param {(Object | string)} json - JSON object to highlighter.
 * @param {Colors} [colors] - A map with the ANSI characters for each supported color.
 * @param {ColorMap} [colorMap] - An object to configure the coloring.
 * @param {number} [spacing=2] - The indentation spaces.
 * @returns {string} Stringified JSON colored with ANSI escape characters.
 */
export default function colorJson(json, colors = defaultColors, colorMap = defaultColorMap, spacing = 2) {
  if (supportsColor()) {
    if (typeof json != 'string') json = JSON.stringify(json, undefined, spacing);
    else json = JSON.stringify(JSON.parse(json), undefined, spacing);
    return colorMap[colors.separator] + json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
      let colorCode = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) colorCode = 'key';
        else colorCode = 'string';
      } else if (/true|false/.test(match)) colorCode = 'boolean';
      else if (/null/.test(match)) colorCode = 'null';
      const color = colorMap[colors[colorCode]] || '';
      return `\x1b[0m${color}${match}${colorMap[colors.separator]}`;
    }) + '\x1b[0m';
  } else {
    if (typeof json != 'string') json = JSON.stringify(json, undefined, spacing);
    else json = JSON.stringify(JSON.parse(json), undefined, spacing);
    return json;
  }
}
