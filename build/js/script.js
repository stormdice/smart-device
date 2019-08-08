'use strict';

function _templateObject() {
  var data = _taggedTemplateLiteral(["D*"], ["\\D*"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function () {
  var tabletWidth = 768;

  if (screen.width < tabletWidth) {
    var footerContentList = document.querySelectorAll('.js-footer-list');
    footerContentList.forEach(function (list) {
      list.addEventListener('click', function () {
        list.classList.toggle('footer__content--height');
      });
    });
  }
})();

'use strict';

(function () {
  var linkScrollDown = document.querySelector('.js-scroll-down');
  linkScrollDown.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.scroll({
      top: 975,
      left: 0,
      behavior: 'smooth'
    });
  });
})();

'use strict';

$(document).ready(function () {
  $('.js-tel-only').inputmask({
    mask: '+7 (999)999-99-99'
  });
  $('.js-text-only').inputmask({
    regex: String.raw(_templateObject())
  });
});
'use strict';

(function () {
  var buttonModalClose = document.querySelectorAll('.js-modal-close');
  var modalBackCall = document.querySelector('.js-modal-back-call');
  var linkBackCall = document.querySelector('.js-back-call');
  var body = document.querySelector('body');
  /**
   * создаёт разметку оверлея
   */

  var createOverlay = function createOverlay() {
    var div = document.createElement('div');
    div.style = 'position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.3); z-index: 1';
    div.classList.add('overlay');
    var overlay = body.appendChild(div);
    overlay.addEventListener('click', function () {
      body.removeChild(overlay);
      closeModal();
    });
    return overlay;
  };
  /**
   * Закрывает модальное окно
   */


  var closeModal = function closeModal() {
    var modals = document.querySelectorAll('.js-modal');
    modals.forEach(function (modal) {
      modal.classList.remove('modal--show');
    });
    body.classList.remove('modal-open');
  };
  /**
   * При нажатии на ESC убирает модальное окно
   */


  var onEscModalClose = function onEscModalClose(evt) {
    if (window.utils.checkEscEvent(evt)) {
      body.removeChild(document.querySelector('.overlay'));
      closeModal();
      document.removeEventListener('keydown', onEscModalClose);
    }
  };
  /**
   * Показывает модальное окно
   * @param {HTMLElement} modal - DOM элемент
   */


  var showModal = function showModal(modal) {
    createOverlay();
    body.classList.add('modal-open');
    modal.classList.add('modal--show');
    document.addEventListener('keydown', onEscModalClose);
  };

  buttonModalClose.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      body.removeChild(document.querySelector('.overlay'));
      closeModal();
    });
  });
  linkBackCall.addEventListener('click', function (evt) {
    evt.preventDefault();
    showModal(modalBackCall);
  });
})();

'use strict';

(function () {
  var ESC_KEYCODE = 27;
  /**
   * проверка нажатия на ESC.
   * @param {Object} evt - интерфейс событий
   * @return {Object} evt - элемент интерфейса событий
   */

  var checkEscEvent = function checkEscEvent(evt) {
    return evt.keyCode === ESC_KEYCODE;
  };

  window.utils = {
    checkEscEvent: checkEscEvent
  };
})();