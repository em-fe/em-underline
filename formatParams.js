import hOwnProperty from './hOwnProperty.js';
import random from './random.js';

/**
 * 用于jsonp的参数处理
 * @static
 * @since 1.0.0
 * @returns {number} Returns {}
 * @example
 *
 * var shallow = _.formatParams({a:1,b:2});
 * console.log(shallow); // a=1&b=2&callback=callback&v=1234
 */
export default (data, callbackName, way = 'jsonp') {
  const arr = [];
  Object.keys(data).forEach((dataKey) => {
    arr.push(`${encodeURIComponent(dataKey)}=${encodeURIComponent(data[dataKey])}`);
  });
  // 如果是用于 jsonp
  if (way === 'jsonp') {
    // 添加一个随机数，防止缓存
    if (!hOwnProperty(data, 'callback')) {
      arr.push(`callback=${callbackName}`);
    }
    arr.push(`v=${random()}`);
  }
  return arr.join('&');
};
