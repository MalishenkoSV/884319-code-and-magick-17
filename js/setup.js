// Файл setup.js
'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupDefaultCoordsY;
var setupDefaultCoordsX;
/**
 * Закрытие и открытие окна
 */
var setup = document.querySelector('.setup');
var setupOpenPopup = document.querySelector('.setup-open');
var setupClosePopup = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');
var setupSubmite = document.querySelector('.setup-submit');
var form = document.querySelector('.setup-wizard-form');

/**
 * @param {Event} evt
 */
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

/**
* ф-ция открытия попапа
@param{Event} evt - обьект
*/
var setDefaultCoords = function () {
  setup.style.top = setupDefaultCoordsY + 'px';
  setup.style.left = setupDefaultCoordsY + 'px';
};

var openPopup = function () {
  setupDefaultCoordsY = setup.offsetTop;
  setupDefaultCoordsX = setup.offsetLeft;
  setup.classList.remove('hidden');
};
/**
* ф-ция закрытия попапа
*/
var closePopup = function () {
  setDefaultCoords();
  setup.classList.add('hidden');
};

/**
* ф-ция открытия попапа при клике и нажатии:
*/
setupOpenPopup.addEventListener('click', function () {
  openPopup();
  document.addEventListener('keydown', onPopupEscPress);
});
/**
* ф-ция удвления  обработчика нажатия эскейпом при фокусе на поле
*/
userName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

/**
* ф-ция удаления  обработчика нажатия на эскейп при переходе пользователем на поле Имени пользователя
*/
userName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

/**
* ф-ция удаления  обработчика нажатия эскейпом при фокусе на поле
*/
setupSubmite.addEventListener('click', function () {
  closePopup();
});

/**
* ф-ция обработчика открытия попапа при нажатии на энтер
* @param {Event} evt
*/
setupOpenPopup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});
/**
* ф-ция обработчика событий клика и закрытие окна при клике по кнопке закрытия
*/
setupClosePopup.addEventListener('click', function () {
  closePopup();
});

/**
* ф-ция обработчика событий клика и закрытие окна при клике по кнопке закрытия
*/
setupClosePopup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

/**
* ф-ция отправки формы при клике на кнопку отправки
*/
setupSubmite.addEventListener('click', function () {
  form.submit();
});
/**
* ф-ция удаления  обработчика нажатия эскейпом при фокусе на поле
*/
setupSubmite.addEventListener('focus', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    form.submit();
  }
});

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
