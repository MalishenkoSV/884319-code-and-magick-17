// Файл wizard.js
'use strict';
(function () {
  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };
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
    if (wizards) {
      element.remove();
    }
    window.variables.similarListElement.appendChild(fragment);
  };
  /**
   * Изменение цвета по клику
   */
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
  document.querySelector('.setup-wizard-appearance').addEventListener('click', function (evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      var newColor = window.util.getRandomElementFromArray(window.variables.COLOR_COAT);
      wizard.onCoatChange = window.debounce(function () {
        window.variables.coat.style.fill = newColor;
        window.variables.colorCoat = newColor;
        window.similar.upgradeWizards();
      });
      window.similar.upgradeWizards();
      wizard.onCoatChange(newColor);
    }
    if (evt.target.classList.contains('wizard-eyes')) {
      var newEyes = window.util.getRandomElementFromArray(window.variables.COLOR_EYES);
      wizard.onEyesChange = window.debounce(function () {
        window.variables.eyesWizard.style.fill = newEyes;
        window.variables.colorEyes = newEyes;
        wizard.onEyesChange(newEyes);
        window.similar.upgradeWizards();
      });
    }
    if (evt.target.classList.contains('setup-fireball')) {
      var fireball = window.util.getRandomElementFromArray(window.variables.COLOR_FIREBALL);
      window.variables.fireballWizard.style.background = fireball;
      window.variables.fireballWizard.value = fireball;
      evt.target.style.fill = fireball;
    }
  });

  window.wizardShow = {
    showWizard: showWizard,
    wizard: wizard
  };
})();
