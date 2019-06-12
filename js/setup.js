// Файл setup.js
'use strict';
var NUMBERS_WIZARD = 4;
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var Names = {
  WIZARD_NAMES: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
};

var Colors = {
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};

var getRandomFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getRandomElementFromArray = function (arr) {
  return arr[getRandomFromInterval(0, arr.length - 1)];
};

var createWizard = function () {
  var wizardObject = {
    name: getRandomElementFromArray(Names.WIZARD_NAMES) + ' ' + getRandomElementFromArray(Names.WIZARD_SURNAMES),
    coatColor: getRandomElementFromArray(Colors.COAT_COLORS),
    eyes: getRandomElementFromArray(Colors.EYES_COLORS)
  };
  return wizardObject;
};

var wizards = [];
for (var i = 0; i < NUMBERS_WIZARD; i++) {
  var wizard = createWizard(Names.WIZARD_NAMES, Names.WIZARD_SURNAMES, Colors.COAT_COLORS, Colors.EYES_COLORS);
  wizards.push(wizard);
}

var similarTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var renderWizardClone = function (wizardOriginal) {
  var wizardCloneElement = similarTemplate.cloneNode(true);
  wizardCloneElement.querySelector('.setup-similar-label').textContent = wizardOriginal.name;
  wizardCloneElement.querySelector('.wizard-coat').style.fill = wizardOriginal.coatColor;
  wizardCloneElement.querySelector('.wizard-eyes').style.fill = wizardOriginal.eyes;
  return wizardCloneElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  var element = renderWizardClone(wizards[j]);
  fragment.appendChild(element);
}
var similarListElement = document.querySelector('.setup-similar-list');
similarListElement.appendChild(fragment);
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
