/**
 * @module Structure
 * @submodule Structure
 * @for p5
 * @requires constants
 */

import * as constants from "./constants";

export default class p5 {
  constructor() {
    this._lcg_random_state = null;
    this._gaussian_previous = false;
    this._colorMode = constants.RGB;
    this._colorMaxes = {
      rgb: [255, 255, 255, 255],
      hsb: [360, 100, 100, 1],
      hsl: [360, 100, 100, 1],
    };
  }
}

for (const k in constants) {
  p5.prototype[k] = constants[k];
}

p5.VERSION = constants.VERSION;
