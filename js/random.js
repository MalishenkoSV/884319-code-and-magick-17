// Файл random.js
'use strict';
(function () {
/**
 * Создает рандомное число
 * @param {number} min — минимальное число
 * @param {number} max -максимальное число
 * @return {number} -- рандомное число
 */
  window.random = {
    getRandomFromInterval: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getRandomElementFromArray: function (arr) {
      return arr[window.random.getRandomFromInterval(0, arr.length - 1)];
    }
  };
})();
