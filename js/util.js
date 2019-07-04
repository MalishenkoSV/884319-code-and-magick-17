// Файл util.js
'use strict';
(function () {
  /**
   * Создает рандомное число
   * @param {number} min — минимальное число
   * @param {number} max -максимальное число
   * @return {number} -- рандомное число
   */
  var getRandomFromInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /**
   * Создает рандомное число из массива
   * @param {array} arr -- массив
   * @return {array} arr
   */
  var getRandomElementFromArray = function (arr) {
    return arr[getRandomFromInterval(0, arr.length - 1)];
  };


  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.variables.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.variables.eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.util = {
    getRandomFromInterval: getRandomFromInterval,
    getRandomElementFromArray: getRandomElementFromArray,
    getRank: getRank,
    namesComparator: namesComparator
  };
})();
