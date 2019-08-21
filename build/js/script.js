'use strict';

(function () {
  var btnAboutMoreDetails = document.querySelector('.js-more-details');
  var contentAboutTextContainer = document.querySelector('.js-about-text-container');
  btnAboutMoreDetails.addEventListener('click', function (evt) {
    evt.preventDefault();
    contentAboutTextContainer.classList.toggle('about__text-container--height');
  });
})();

'use strict';

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
    regex: '[^0-9]*'
  });
});
'use strict';

(function () {
  var buttonModalClose = document.querySelectorAll('.js-modal-close');
  var modalBackCall = document.querySelector('#callback');
  var linkBackCall = document.querySelector('.js-back-call');
  /**
   * Закрывает модальное окно
   */

  var closeModal = function closeModal() {
    var modals = document.querySelectorAll('.modal');
    document.querySelector('body').style = '';
    modals.forEach(function (modal) {
      modal.addEventListener('click', function (evt) {
        if (evt.target === modalBackCall) {
          modal.classList.remove('modal--show');
          document.querySelector('body').style = '';
        }
      });
      modal.classList.remove('modal--show');
    });
  };
  /**
   * При нажатии на ESC убирает модальное окно
   */


  var onEscModalClose = function onEscModalClose(evt) {
    if (window.utils.checkEscEvent(evt)) {
      closeModal();
      document.removeEventListener('keydown', onEscModalClose);
    }
  };
  /**
   * Показывает модальное окно
   * @param {HTMLElement} modal - DOM элемент
   */


  var showModal = function showModal(modal) {
    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    if (isMac) {
      document.querySelector('body').style = 'overflow: hidden;';
    } else {
      document.querySelector('body').style = 'overflow: hidden; margin-right: 16px';
    }

    modal.classList.add('modal--show');
    document.addEventListener('keydown', onEscModalClose);
  };

  buttonModalClose.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModal();
      document.removeEventListener('keydown', onEscModalClose);
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