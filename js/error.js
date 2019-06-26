//  error.js
'use strict';
(function () {
  var onError = function (xhr, error, onSuccess) {
    switch (xhr.status) {
      case 200:
        onSuccess(xhr.response);
        break;
      case 400:
        error = 'Неверный запрос';
        break;
      case 401:
        error = 'Пользователь не авторизован';
        break;
      case 404:
        error = 'Ничего не найдено';
        break;
      case 500:
        error = 'На сервере произошла ошибка';
        break;
      default:
        error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
    }
  };
  window.error = {
    onError: onError
  };
})();
