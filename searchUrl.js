/**
 * 获取 url 问号后面的某一个值
 * @static
 * @since 1.0.7
 * @returns {string} Returns ''
 * @example
 *
 * var shallow = _.random();
 * console.log(shallow); // 返回 500-10000 之间的随机数
 *
 * var shallow = _.random(1, 20);
 * console.log(shallow); // 返回 1-20 之间的随机数
 */
function searchUrl(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var url = window.location.href.split('?');
  if (!url[1]) {
    return '';
  }
  var matchSearch = url[1].match(reg);
  return matchSearch ? matchSearch[2] : '';
}
export default searchUrl;
