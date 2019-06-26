// Файл form.js
'use strict';
(function () {
  window.variables.form.addEventListener('submit', function (evt) {
    window.backend.load(new FormData(window.variables.form), function () {
      window.variables.setupSimilar.classList.remove('hidden');
    });
    evt.preventDefault();
  });
})();
