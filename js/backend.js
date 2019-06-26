// backend.js
'use strict';
(function () {
  var URL_GET = 'https://js.dump.academy/code-and-magick';
  /**
   * Функция запроса на сервер
   * @param {object} data - обьект данных из формы
   * @param {function} onLoad - обьект события ошибки
   * @param {function} onError - обьект события ошибки
   */
  var load = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    /**
     * Функция типа ответа
     */
    xhr.responseType = 'json';
    /**
     * Функция запроса на сервер
     * @param {event} 'load' - обьект события загрузки
     * @param {function}  функция ответа - при загрузке и при ошибке
     */
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    /**
     * Функция  на сервер открытия запроса
     * @param {event} 'GET' -обьект запроса
     * @param {object} URL_GET - адресс запроса
     */
    xhr.open('GET', URL_GET);
    /**
     * Функция события ошибки
     * @param {event} 'error' - сообщение ошибки
     * @param {function} onError - колбэк
     */
    xhr.addEventListener('error', onError);
    /**
     * Функция события ошибки
     * @param {event} 'timeout' - событие таймаут
     * @param {function} onError - колбэк ошибки
     */
    xhr.addEventListener('timeout', onError);
    xhr.timeout = 1000;
    /**
     * Функция отправки запроса
     */
    xhr.send(data);
  };

  /**
   * Функция отправки запроса
   * @param {object} data - данные при удачной загрузке
   * @param {function} onLoad - колбэк ответа при загрузке 'загрузилось'
   * @param {function} onError - колбэк статус ответа 'ошибка'
   */
  var save = function (data, onLoad, onError) {
    var URL_POST = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    /**
     * Функция запроса на сервер
     * @param {event} 'load' -  события загрузки
     * @param {function}  функция ответа - при загрузке и при ошибке
     */
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    /**
     * Функция запроса на сервер
     * @param {event} 'load' -  события загрузки
     * @param {function}  функция ответа - при загрузке и при ошибке
     */
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    /**
     * Функция запроса на сервер
     * @param {event} 'timeout' -  события длительной загрузки
     * @param {function}  функция ответа - при длительной загрузке
     */
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000; // 10s

    /**
     * Функция  на сервер открытия запроса
     * @param {event} 'POST' - событие запроса
     * @param {object} URL_POST - адресс запроса
     */
    xhr.open('POST', URL_POST);

    /**
     * Функция загрузки данных
     */
    xhr.send(data);
  };
  window.backend = {
    load: load,
    save: save
  };
})();
