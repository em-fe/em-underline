/**
 * 根据年月返回对应的一个月的日期数
 * @static
 * @since 1.0.0
 * @returns {number} Returns {}
 * @example
 *
 * var shallow = _.getDayCountOfMonth(2017, 9);
 * console.log(shallow); // 30
 */
export const getDayCountOfMonth = (year, month) => {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  } else if (month === 1) {
    if (((year % 4 === 0) && (year % 100 !== 0)) || year % 400 === 0) {
      return 29;
    }
    return 28;
  }
  return 31;
};
/**
 * 根据清除的日期时间
 * @static
 * @since 1.0.0
 * @returns {number} Returns {}
 * @example
 *
 * var shallow = _.clearHours('2017/9/9');
 * console.log(shallow); // 时间格式
 */
export const clearHours = (time = '') => {
  const cloneDate = new Date(time);
  cloneDate.setHours(0, 0, 0, 0);
  return cloneDate.getTime();
};
/**
 * 设定固定的时间
 * @static
 * @since 1.0.0
 * @returns {number} Returns {}
 * @example
 *
 * var shallow = _.initTimeDate('2017/9/9');
 * console.log(shallow); // 时间格式
 */
export const initTimeDate = () => {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};
/**
 * 返回每月的第一天
 * @static
 * @since 1.0.0
 * @returns {number} Returns {}
 * @example
 *
 * var shallow = _.initTimeDate('2017/9/9');
 * console.log(shallow); // 时间格式
 */
export const getFirstDayOfMonth = (date) => {
  const temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};
