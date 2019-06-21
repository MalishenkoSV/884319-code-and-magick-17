// Файл wizard.js
'use strict';
(function () {
  var NUMBERS_WIZARD = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  document.querySelector('.setup-similar').classList.remove('hidden');

  var Wizard = {
    NAMES: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']

  };
  var Color = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };
  /**
 * Создает обьект
 * @return {object} -- объект данных о объявлении
 */
  var createWizard = function () {
    var wizardObject = {
      name: window.random.getRandomElementFromArray(Wizard.NAMES) + ' ' + window.random.getRandomElementFromArray(Wizard.SURNAMES),
      coatColor: window.random.getRandomElementFromArray(Color.COAT),
      eyes: window.random.getRandomElementFromArray(Color.EYES)
    };
    return wizardObject;
  };

  /**
 * Создает массив обьектов Волшебников
 */
  var wizards = [];
  for (var i = 0; i < NUMBERS_WIZARD; i++) {
    var wizard = createWizard();
    wizards.push(wizard);
  }
  /**
 * Создает и отрисовывает  Волшебников
 * @param {object} wizardOriginal - данные обьекта для отрисовки Волшебника
 * @return {object} -- элемент с данными о Волшебнике,  которые позже отрисуется из массива
 */
  var similarTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var renderWizardClone = function (wizardOriginal) {
    var wizardCloneElement = similarTemplate.cloneNode(true);
    wizardCloneElement.querySelector('.setup-similar-label').textContent = wizardOriginal.name;
    wizardCloneElement.querySelector('.wizard-coat').style.fill = wizardOriginal.coatColor;
    wizardCloneElement.querySelector('.wizard-eyes').style.fill = wizardOriginal.eyes;
    return wizardCloneElement;
  };

  /**
 * Вставка обьявлений во фрагмент
 */
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < NUMBERS_WIZARD; j++) {
    var element = renderWizardClone(wizards[j]);
    fragment.appendChild(element);
  }

  /**
 * Вставка  фрагмента а ДОМ
 */
  similarListElement.appendChild(fragment);
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  window.wizard = {
    wizard: Wizard = {
      NAMES: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
      SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
    },
    color: Color = {
      COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
      EYES: ['black', 'red', 'blue', 'yellow', 'green'],
      FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
    }
  };
  /**
   * ф-ция - обработчик клика и смена рандомно цвета куртки волшебника
   */
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  coat.addEventListener('click', function () {
    var color = window.random.getRandomElementFromArray(window.wizard.color.COAT);
    coat.style.fill = color;
  });
  /**
   * ф-ция - обработчик клика и смена рандомно цвета глаз волшебника
   */
  var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
  eyesWizard.addEventListener('click', function () {
    var eyes = window.random.getRandomElementFromArray(window.wizard.color.EYES);
    eyesWizard.style.fill = eyes;
  });
  /**
   * ф-ция - обработчик клика и смена рандомно цвета фаербола волшебника
   */
  var fireballWizard = document.querySelector('.setup-fireball-wrap');
  fireballWizard.addEventListener('click', function () {
    var fireball = window.random.getRandomElementFromArray(window.wizard.color.FIREBALL);
    fireballWizard.style.background = fireball;
  });

})();
