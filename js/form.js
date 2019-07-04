// Файл form.js
'use strict';
(function () {
  var form = window.variables.setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      form.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
