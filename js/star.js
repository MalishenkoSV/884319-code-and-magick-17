// Файл star.js
'use strict';
(function () {
  var BACKPACK_TOP = 160;
  var BACKPACK_LEFT = 200;
  var START = 0;
  var setup = document.querySelector('.setup');
  var onArtifactDown = setup.querySelector('.setup-artifacts-cell > img');
  var onMousedownArtifact = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      onArtifactDown.style.position = 'absolute';

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      onArtifactDown.style.top = (onArtifactDown.offsetTop - shift.y) + 'px';
      onArtifactDown.style.left = (onArtifactDown.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (upEvt.target.className === 'setup-artifacts-cell') {
        document.querySelector('.setup-artifacts-cell').removeChild(onArtifactDown);
        document.querySelector('.setup-artifacts > .setup-artifacts-cell').appendChild(onArtifactDown);
        onArtifactDown.style.position = 'inherit';
        onArtifactDown.style.top = START + 'px';
        onArtifactDown.style.left = START + 'px';
      } else {
        onArtifactDown.style.position = 'inherit';
        document.querySelector('.setup-artifacts-shop > .setup-artifacts-cell').appendChild(onArtifactDown);
        onArtifactDown.style.top = BACKPACK_TOP + 'px';
        onArtifactDown.style.left = BACKPACK_LEFT + 'px';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  onArtifactDown.addEventListener('mousedown', onMousedownArtifact);
})();
