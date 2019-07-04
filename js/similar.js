// similar.js
'use strict';
(function () {
  var wizards = [];
  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };
  /**
   * Функция сортировки похожих волшебников за ранками
  */
  var upgradeWizards = function () {
    window.wizard.showWizard(wizards.sort(function (left, right) {
      var rankDiff = window.util.getRank(right) - window.util.getRank(left);
      if (rankDiff === 0) {
        rankDiff = window.util.namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };
  window.wizard.onEyesChange = function () {
    window.variables.eyesColor = wizard.color;
    upgradeWizards();
  };
  window.wizard.onCoatChange = function () {
    window.variables.coatColor = wizard.color;
    upgradeWizards();
  };
  /**
   * Функция cоздания массива
   * @param {object} data - данные о загруженных волшебниках c сервера
   */
  var onLoad = function (data) {
    wizards = data;
    window.wizard.showWizard(wizards);
    upgradeWizards();
  };
  window.backend.load(onLoad, window.error.onError);
  window.similar = {
    upgradeWizards: upgradeWizards
  };
})();
