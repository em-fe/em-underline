import guidS4 from './guidS4.js';
/**
 * 随机数
 * @static
 * @since 1.0.0
 * @returns {Object} Returns {}
 * @example
 *
 * var shallow = _.guid();
 * console.log(shallow); // 359b53bab8ff1b0b1f7f9a32ac20c2aa
 */
 function guid(obj) {
   return guidS4() + guidS4() + guidS4() +
   guidS4() + guidS4() + guidS4() + guidS4() + guidS4();
 }
export default guid;
