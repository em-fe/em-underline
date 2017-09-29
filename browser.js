export default {
  /**
   * 浏览器判断是否是手机
   * @static
   * @since 1.0.0
   * @returns {Object<booean>} Returns {isMobile是否是手机, os是否是ios}
   * @example
   *
   * _.versions()
   * // => Logs {isMobile: true, os: true} // 是一个ios手机
   */
  versions() {
    const ua = navigator.userAgent;
    const isAndroid = /Android/i.test(ua);
    const isBlackBerry = /BlackBerry/i.test(ua);
    const isWindowPhone = /IEMobile/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isMobile = isAndroid || isBlackBerry || isWindowPhone || isIOS;
    let os = 'pc';
    if (isAndroid) os = 'android';
    if (isBlackBerry) os = 'BlackBerry';
    if (isWindowPhone) os = 'WindowPhone';
    if (isIOS) os = 'IOS';
    return {
      isMobile,
      os,
    };
  },
};
