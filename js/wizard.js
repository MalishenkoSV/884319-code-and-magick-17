// Файл wizard.js
'use strict';
(function () {
  /**
 * Создает обьект
 * @return {object} -- объект данных о объявлении
 */
  var createWizard = function () {
    var wizardObject = {
      name: window.random.getRandomElementFromArray(window.variables.Wizard.NAMES) + ' ' + window.random.getRandomElementFromArray(window.variables.Wizard.SURNAMES),
      coatColor: window.random.getRandomElementFromArray(window.variables.Color.COAT),
      eyes: window.random.getRandomElementFromArray(window.variables.Color.EYES)
    };
    return wizardObject;
  };

  /**
 * Создает массив обьектов Волшебников
 */
  var wizards = [];
  for (var i = 0; i < window.variables.NUMBERS_WIZARD; i++) {
    var wizard = createWizard();
    wizards.push(wizard);
  }
  /**
 * Создает и отрисовывает  Волшебников
 * @param {object} wizardOriginal - данные обьекта для отрисовки Волшебника
 * @return {object} -- элемент с данными о Волшебнике,  которые позже отрисуется из массива
 */

  var renderWizardClone = function (wizardOriginal) {
    var wizardCloneElement = window.variables.similarTemplate.cloneNode(true);
    wizardCloneElement.querySelector('.setup-similar-label').textContent = wizardOriginal.name;
    wizardCloneElement.querySelector('.wizard-coat').style.fill = wizardOriginal.coatColor;
    wizardCloneElement.querySelector('.wizard-eyes').style.fill = wizardOriginal.eyes;
    return wizardCloneElement;
  };

  /**
 * Вставка обьявлений во фрагмент
 */
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < window.variables.NUMBERS_WIZARD; j++) {
    var element = renderWizardClone(wizards[j]);
    fragment.appendChild(element);
  }
  /**
 * Вставка  фрагмента а ДОМ
 */
  window.variables.similarListElement.appendChild(fragment);
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
})();
