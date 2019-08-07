'use strict';

(function() {
  const ESC_KEYCODE = 27;

  /**
   * проверка нажатия на ESC.
   * @param {Object} evt - интерфейс событий
   * @return {Object} evt - элемент интерфейса событий
   */
  var checkEscEvent = function(evt) {
    return evt.keyCode === ESC_KEYCODE;
  };

  window.utils = {
    checkEscEvent: checkEscEvent
  };
})();
