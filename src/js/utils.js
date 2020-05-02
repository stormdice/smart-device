const ESC_KEYCODE = 27;

/**
 * проверка нажатия на ESC.
 * @param {Object} evt - интерфейс событий
 * @return {Object} evt - элемент интерфейса событий
 */
const checkEscEvent = function (evt) {
  return evt.keyCode === ESC_KEYCODE;
};

export { checkEscEvent };
