const timeObject = {
  /**
   * 补零
   * @static
   * @since 1.0.0
   * @returns {number} Returns {}
   * @example
   *
   * var shallow = _.zeroFill(1);
   * console.log(shallow); // '10'
   *
   * var shallow = _.random(11);
   * console.log(shallow); // '11'
   */
  zeroFill(time) {
    return time < 10 ? `0${time}` : time.toString();
  },
  /**
   * 补零
   * @static
   * @since 1.0.0
   * @returns {number} Returns {}
   * @example
   *
   * var shallow = _.zeroFill(1);
   * console.log(shallow); // '10'
   *
   * var shallow = _.random(11);
   * console.log(shallow); // '11'
   */
  handleConputedDate: (i, times) => {
    const newTimes = {
      name: timeObject.zeroFill(i),
      undo: false,
    };
    if (times.length > 0) {
      times.every((time) => {
        const newTime = timeObject.zeroFill(time);
        newTimes.undo = newTime === newTimes.name;
        return !newTimes.undo;
      });
    }
    return newTimes;
  },
  /**
   * 用于时间组件相关，循环中的
   * @static
   * @since 1.0.0
   * @returns {number} Returns {}
   * @example
   *
   * 从 em-fe中寻找
   */
  handleConputedTime: (i, times) => {
    const newTimes = {
      num: timeObject.zeroFill(i),
      undo: false,
    };
    if (times.length > 0) {
      times.every((time) => {
        const newTime = timeObject.zeroFill(time);
        newTimes.undo = newTime === newTimes.num;
        return !newTimes.undo;
      });
    }
    return newTimes;
  },
  /**
   * 用于时间组件相关，循环中的
   * @static
   * @since 1.0.0
   * @returns {number} Returns {}
   * @example
   *
   * 从 em-fe中寻找
   */
  loopChoice: (times) => {
    let newUndo = true;
    times.every((time) => {
      newUndo = time.num;
      return time.undo;
    });
    return newUndo;
  },
};

export default timeObject;
