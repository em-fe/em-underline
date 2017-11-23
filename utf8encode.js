/**
 * 中文编码，防止乱码
 * @static
 * @since 1.0.11
 * @param {String} str 编码的字符串
 * @returns {String} Returns {}
 * @example
 console.log(toBase64(utf8encode(JSON.stringify({ name: '李梦龙', address: '北京市东城区', age: 18 }))));
 *
 */
function utf8Encode(str) {
  var string = (str + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  var utftext = '';
  var start = null;
  var end = null;
  var stringl = 0;
  var n = null;

  start = end = 0;
  stringl = string.length;

  for (n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if ((c1 > 127) && (c1 < 2048)) {
      enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
    } else {
      enc = String.fromCharCode((c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128);
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.substring(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.substring(start, string.length);
  }

  return utftext;
}

export default utf8Encode;
