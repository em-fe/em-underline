/**
 * 是否有一样的
 * @static
 * @since 1.0.0
 * @returns {boolean} Returns {}
 * @example
 *
 * var objects = [1,2,3,4,1];
 * var shallow = _.hasRepeat(objects);
 * console.log(shallow); // true
 */
function hasRepeat(arrays) {
  let isRepeat = false;
  const len = arrays.length;
  if (len > 1) {
    for (let i = 0; i < len; i++) {
      if (arrays.every(as => arrays[i] === as)) {
        isRepeat = true;
        break;
      }
    }
  }
  return isRepeat;
}
export default hasRepeat;
