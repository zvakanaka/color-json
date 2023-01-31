Color JSON in the console with no dependencies

![screenshot](https://i.imgur.com/175gebf.png)

## Usage
### Default Usage
```js
import cj from 'color-json';

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

console.log(cj(topPlanets));
```
### Switch Colors
```js
const customColors = {
  separator: 'yellow',
  string: 'yellow',
  number: 'blue',
  boolean: 'magenta',
  null: 'red',
  key: 'green'
};
console.log(cj(topPlanets, customColors));
```
### Customize Colors
```js
const customColorMap = {
  black: '\x1b[38;2;0;0;0m',
  red: '\x1b[38;2;249;133;123m',
  green: '\x1b[38;2;163;238;160m',
  yellow: '\x1b[38;2;209;154;102m',
  blue: '\x1b[36m',
  magenta: '\x1b[38;2;209;154;102m',
  cyan: '\x1b[38;2;75;167;239m',
  white: '\x1b[38;2;219;223;244m'
};
console.log(cj(topPlanets, undefined, customColorMap));
```

### Custom Spacing
```js
console.log(cj(topPlanets, undefined, undefined, 4));
```

## Versions
### 3.0.x
Converted to [ESM](https://github.com/sindresorhus/meta/discussions/15) (`import` instead of `require`).
### 2.x.x 
Use this version if you still need `require` syntax (CommonJS).

## Color Tool
[hex to console color](https://codepen.io/zvakanaka/pen/MVWGJG)

## Credits
[user123444555621](https://stackoverflow.com/a/7220510/4151489) for the syntax highlight regular expressions  

