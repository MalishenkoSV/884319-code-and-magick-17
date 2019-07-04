// similar.js
'use strict';
(function () {
  var wizards = [];

  /**
   * Функция сортировки похожих волшебников за ранками
  */
  var upgradeWizards = function () {
    window.wizardShow.showWizard(wizards.slice().sort(function (left, right) {
      var rankDiff = window.util.getRank(right) - window.util.getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };
  window.wizardShow.wizard.onEyesChange = function (color) {
    window.variables.eyesColor = color;
    upgradeWizards();
  };
  window.wizardShow.wizard.onCoatChange = function (color) {
    window.variables.coatColor = color;
    upgradeWizards();
  };
  /**
   * Функция cоздания массива
   * @param {object} data - данные о загруженных волшебниках c сервера
   */
  var onSuccess = function (data) {
    wizards = data;
    upgradeWizards();
  };
  window.backend.load(onSuccess, window.error.onError);
  window.similar = {
    upgradeWizards: upgradeWizards
  };
})();
