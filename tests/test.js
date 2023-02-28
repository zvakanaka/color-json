import colorJson from '../index.js';

console.log('default usage:');
const topPlanets = [
  {
    "planet": "Saturn",
    "radius": {
      "miles": 36184
    },
    "rings": true,
    "moons": 53
  },
  {
    "planet": "Earth",
    "radius": {
      "miles": 3959
    },
    "rings": null,
    "moons": 1
  }
];

console.log(colorJson(topPlanets));

console.log('passing in already stringified data:');
console.log(colorJson(JSON.stringify(topPlanets)));

console.log('switch colors:');
const customColors = {
  separator: 'yellow',
  string: 'yellow',
  number: 'blue',
  boolean: 'magenta',
  null: 'red',
  key: 'green'
};
console.log(colorJson(topPlanets, customColors));

console.log('custom color map:');
const customColorMap = {
  black: '\x1b[38;2;0;0;0m',
  red: '\x1b[38;2;249;133;123m',
  green: '\x1b[38;2;163;238;160m',
  yellow: '\x1b[38;2;209;154;102m',
  blue: '\x1b[38;2;75;167;239m',
  magenta: '\x1b[38;2;209;154;102m',
  cyan: '\x1b[36m',
  white: '\x1b[38;2;219;223;244m'
};
console.log(colorJson(topPlanets, undefined, customColorMap));

console.log('custom spacing (4):');
console.log(colorJson(topPlanets, undefined, undefined, 4));

console.log('custom spacing (0):');
console.log(colorJson(topPlanets, undefined, undefined, 0));

console.log('passing in already stringified data with custom spacing (0):');
console.log(colorJson(JSON.stringify(topPlanets), undefined, undefined, 0));
