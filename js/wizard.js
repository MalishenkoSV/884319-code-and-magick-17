// Файл wizard.js
'use strict';
(function () {
//   /**
//  * Создает обьект
//  * @return {object} -- объект данных о объявлении
//  */
//   var createWizard = function () {
//     var wizardObject = {
//       name: window.util.getRandomElementFromArray(window.variables.WIZARD_NAMES) + ' ' + window.util.getRandomElementFromArray(window.variables.WIZARD_SURNAMES),
//       coatColor: window.util.getRandomElementFromArray(window.variables.COLOR_COAT),
//       eyes: window.util.getRandomElementFromArray(window.variables.COLOR_EYES)
//     };
//     return wizardObject;
//   };

  //   /**
  //    * Создает массив обьектов Волшебников
  //    */
  //   var arrayWizards = [];
  //   for (var i = 0; i < window.variables.NUMBERS_WIZARD; i++) {
  //     var arrayWizard = createWizard();
  //     arrayWizards.push(arrayWizard);
  //   }
  /**
   * Создает и отрисовывает  Волшебников
   * @param {object} wizardOriginal - данные обьекта для отрисовки Волшебника
   * @return {object} -- элемент с данными о Волшебнике,  которые позже отрисуется из массива
   */

  var renderWizardClone = function (wizardOriginal) {
    var wizardCloneElement = window.variables.similarTemplate.cloneNode(true);
    wizardCloneElement.querySelector('.setup-similar-label').innerText = wizardOriginal.name;
    wizardCloneElement.querySelector('.wizard-coat').style.fill = wizardOriginal.colorCoat;
    wizardCloneElement.querySelector('.wizard-eyes').style.fill = wizardOriginal.colorEyes;
    return wizardCloneElement;
  };

  /**
   * Вставка обьявлений во фрагмент
   * @param {Array} wizards - массив волшебников
   */
  var showWizard = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < window.variables.NUMBERS_WIZARD; j++) {
      var element = renderWizardClone(wizards[j]);
      fragment.appendChild(element);
    }
    window.variables.similarListElement.appendChild(fragment);
  };
  window.wizard = {
    showWizard: showWizard
  };
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
  document.querySelector('.setup-wizard-appearance').addEventListener('click', function (evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      var newColor = window.util.getRandomElementFromArray(window.variables.COLOR_COAT);
      window.variables.coat.style.fill = newColor;
      window.variables.colorCoat = newColor;
      window.similar.upgradeWizards();
    }
    if (evt.target.classList.contains('wizard-eyes')) {
      var newEyes = window.util.getRandomElementFromArray(window.variables.COLOR_EYES);
      window.variables.eyesWizard.style.fill = newEyes;
      window.variables.colorEyes = newEyes;
      window.similar.upgradeWizards();
    }
    if (evt.target.classList.contains('setup-fireball-wrap')) {
      var fireball = window.util.getRandomElementFromArray(window.variables.COLOR_FIREBALL);
      window.variables.fireballWizard.style.background = fireball;
      window.variables.fireballWizard.value = fireball;
      evt.target.style.fill = fireball;
    }
  });
})();
