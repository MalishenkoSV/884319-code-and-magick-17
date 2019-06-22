// Файл star.js
'use strict';
(function () {
  var onMousedownArtifact = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      window.variables.onArtifactDown.style.position = 'absolute';

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.variables.onArtifactDown.style.top = (window.variables.onArtifactDown.offsetTop - shift.y) + 'px';
      window.variables.onArtifactDown.style.left = (window.variables.onArtifactDown.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (upEvt.target.className === 'setup-artifacts-cell') {
        document.querySelector('.setup-artifacts-cell').removeChild(window.variables.onArtifactDown);
        document.querySelector('.setup-artifacts > .setup-artifacts-cell').appendChild(window.variables.onArtifactDown);
        window.variables.onArtifactDown.style.position = 'inherit';
        window.variables.onArtifactDown.style.top = window.variables.START + 'px';
        window.variables.onArtifactDown.style.left = window.variables.START + 'px';
      } else {
        window.variables.onArtifactDown.style.position = 'inherit';
        document.querySelector('.setup-artifacts-shop > .setup-artifacts-cell').appendChild(window.variables.onArtifactDown);
        window.variables.onArtifactDown.style.top = window.variables.BACKPACK_TOP + 'px';
        window.variables.onArtifactDown.style.left = window.variables.BACKPACK_LEFT + 'px';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  window.variables.onArtifactDown.addEventListener('mousedown', onMousedownArtifact);
})();
