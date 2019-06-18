// Файл setup.js
'use strict';
var NUMBERS_WIZARD = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var Wizard = {
  NAMES: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']

};
var Color = {
  COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

var similarListElement = document.querySelector('.setup-similar-list');
document.querySelector('.setup-similar').classList.remove('hidden');

/**
 * Создает рандомное число
 * @param {number} min — минимальное число
 * @param {number} max -максимальное число
 * @return {number} -- рандомное число
 */
var getRandomFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Выбираем рандомный элемент из массива
 * @param {array} arr -- массив
 * @return {numver}  -- рандомый элемент из массива
 */
var getRandomElementFromArray = function (arr) {
  return arr[getRandomFromInterval(0, arr.length - 1)];
};

/**
 * Создает обьект
 * @return {object} -- объект данных о объявлении
 */
var createWizard = function () {
  var wizardObject = {
    name: getRandomElementFromArray(Wizard.NAMES) + ' ' + getRandomElementFromArray(Wizard.SURNAMES),
    coatColor: getRandomElementFromArray(Color.COAT),
    eyes: getRandomElementFromArray(Color.EYES)
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
*/
var openPopup = function () {
  setup.classList.remove('hidden');
};
/**
* ф-ция закрытия попапа
*/
var closePopup = function () {
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
  var color = getRandomElementFromArray(Color.COAT);
  coat.style.fill = color;
});
/**
* ф-ция - обработчик клика и смена рандомно цвета глаз волшебника
*/
var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
eyesWizard.addEventListener('click', function () {
  var eyes = getRandomElementFromArray(Color.EYES);
  eyesWizard.style.fill = eyes;
});
/**
* ф-ция - обработчик клика и смена рандомно цвета фаербола волшебника
*/
var fireballWizard = document.querySelector('.setup-fireball-wrap');
fireballWizard.addEventListener('click', function () {
  var fireball = getRandomElementFromArray(Color.FIREBALL);
  fireballWizard.style.background = fireball;
});

// Файл dialog.js
(function () {
  var setupDialogElement = setup.querySelector('.upload');
  var onDialogUpload = setupDialogElement.querySelector('.setup-user-pic');
  setupDialogElement.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (dragged) {
        var onClickPreventDefault = function () {
          evt.preventDefault();
          onDialogUpload.removeEventListener('click', onClickPreventDefault);
        };
        onDialogUpload.addEventListener('click', onClickPreventDefault);
      }

    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
