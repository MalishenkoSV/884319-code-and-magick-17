//  error.js
'use strict';
(function () {
  var isError = function () {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '100px';
    node.textContent = 'errorMessage';
    document.body.insertAdjacentElement('afterbegin', node);
  };
  window.error = {
    onError: isError
  };
})();
