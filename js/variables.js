// Файл variables.js
'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var BACKPACK_TOP = 160;
  var BACKPACK_LEFT = 200;
  var START = 0;
  var NUMBERS_WIZARD = 4;
  var Wizard = {
    NAMES: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']

  };
  var Color = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };
  var setup = document.querySelector('.setup');
  var onArtifactDown = setup.querySelector('.setup-artifacts-cell > img');
  var setupOpenPopup = document.querySelector('.setup-open');
  var setupClosePopup = document.querySelector('.setup-close');
  var userName = document.querySelector('.setup-user-name');
  var setupSubmite = document.querySelector('.setup-submit');
  var form = document.querySelector('.setup-wizard-form');
  var setupDialogElement = setup.querySelector('.upload');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  window.variables = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    NUMBERS_WIZARD: NUMBERS_WIZARD,
    setup: setup,
    setupOpenPopup: setupOpenPopup,
    setupClosePopup: setupClosePopup,
    userName: userName,
    setupSubmite: setupSubmite,
    setupDialogElement: setupDialogElement,
    form: form,
    BACKPACK_TOP: BACKPACK_TOP,
    START: START,
    BACKPACK_LEFT: BACKPACK_LEFT,
    onArtifactDown: onArtifactDown,
    similarListElement: similarListElement,
    wizard: Wizard,
    color: Color,
    similarTemplate: similarTemplate
  };
})();
