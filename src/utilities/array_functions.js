/**
 * @module Data
 * @submodule Array Functions
 * @for p5
 * @requires core
 */

import p5 from "../core/main";

/**
 * Randomizes the order of the elements of an array. Implements
 * <a href='http://Bost.Ocks.org/mike/shuffle/' target=_blank>
 * Fisher-Yates Shuffle Algorithm</a>.
 *
 * @method shuffle
 * @param  {Array}   array  Array to shuffle
 * @param  {Boolean} [bool] modify passed array
 * @return {Array}   shuffled Array
 * @example
 * <div><code>
 * function setup() {
 *   let regularArr = ['ABC', 'def', createVector(), TAU, Math.E];
 *   print(regularArr);
 *   shuffle(regularArr, true); // force modifications to passed array
 *   print(regularArr);
 *
 *   // By default shuffle() returns a shuffled cloned array:
 *   let newArr = shuffle(regularArr);
 *   print(regularArr);
 *   print(newArr);
 * }
 * </code></div>
 */
p5.prototype.shuffle = function (arr, bool) {
  const isView = ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(arr);
  arr = bool || isView ? arr : arr.slice();

  let rnd,
    tmp,
    idx = arr.length;
  while (idx > 1) {
    rnd = (this.random(0, 1) * idx) | 0;

    tmp = arr[--idx];
    arr[idx] = arr[rnd];
    arr[rnd] = tmp;
  }

  return arr;
};

export default p5;
