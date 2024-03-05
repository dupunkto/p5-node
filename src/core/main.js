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
  }
}

for (const k in constants) {
  p5.prototype[k] = constants[k];
}

p5.VERSION = constants.VERSION;
