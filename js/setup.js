// Файл setup.js
'use strict';
(function () {
  /**
   * @param {Event} evt
   */
  document.querySelector('.setup-similar').classList.remove('hidden');
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.variables.ESC_KEYCODE) {
      closePopup();
    }
  };
  /**
   * ф-ция открытия попапа
   *@param{Event} evt - обьект
   */
  var setDefaultCoords = function () {
    window.variables.setup.style.top = '';
    window.variables.setup.style.left = '';
  };

  var openPopup = function () {
    window.variables.setup.classList.remove('hidden');
  };
  /**
   * ф-ция закрытия попапа
   */
  var closePopup = function () {
    setDefaultCoords();
    window.variables.setup.classList.add('hidden');
  };

  /**
   * ф-ция открытия попапа при клике и нажатии:
   */
  window.variables.setupOpenPopup.addEventListener('click', function () {
    openPopup();
    document.addEventListener('keydown', onPopupEscPress);
  });
  /**
   * ф-ция удвления  обработчика нажатия эскейпом при фокусе на поле
   */
  window.variables.userName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  /**
   * ф-ция удаления  обработчика нажатия на эскейп при переходе пользователем на поле Имени пользователя
   */
  window.variables.userName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  /**
  * ф-ция удаления  обработчика нажатия эскейпом при фокусе на поле
  */
  window.variables.setupSubmite.addEventListener('click', function () {
    closePopup();
  });

  /**
   * ф-ция обработчика открытия попапа при нажатии на энтер
   * @param {Event} evt
   */
  window.variables.setupOpenPopup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.variables.ENTER_KEYCODE) {
      openPopup();
    }
  });
  /**
   * ф-ция обработчика событий клика и закрытие окна при клике по кнопке закрытия
   */
  window.variables.setupClosePopup.addEventListener('click', function () {
    closePopup();
  });

  /**
   * ф-ция обработчика событий клика и закрытие окна при клике по кнопке закрытия
   */
  window.variables.setupClosePopup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.variables.ENTER_KEYCODE) {
      closePopup();
    }
  });

  /**
   * ф-ция отправки формы при клике на кнопку отправки
   */
  window.variables.setupSubmite.addEventListener('click', function () {
    window.variables.form.submit();
  });
  /**
   * ф-ция удаления  обработчика нажатия эскейпом при фокусе на поле
   */
  window.variables.setupSubmite.addEventListener('focus', function (evt) {
    if (evt.keyCode === window.variables.ENTER_KEYCODE) {
      window.variables.form.submit();
    }
  });
})();
