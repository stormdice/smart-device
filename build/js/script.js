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
  var footer = document.querySelector('.footer');
  var footerNavButtons = document.querySelectorAll('.js-open-footer-nav');

  if (footerNavButtons.length) {
    footerNavButtons.forEach(function (button) {
      button.addEventListener('click', function (evt) {
        var thisFooterContent = button.closest('.footer__content');

        if (thisFooterContent.classList.contains('footer__content--show-nav')) {
          thisFooterContent.classList.remove('footer__content--show-nav');
        } else {
          if (footer.querySelector('.footer__content--show-nav')) {
            footer.querySelector('.footer__content--show-nav').classList.remove('footer__content--show-nav');
          }

          thisFooterContent.classList.add('footer__content--show-nav');
        }
      });
    });
  }
})();

"use strict";

$(document).ready(function () {
  $(".js-tel-only").inputmask({
    mask: "+7 (999)999-99-99"
  });
});
'use strict';

(function () {
  var htmlElement = document.querySelector('html');
  var modalOverlays = document.querySelectorAll('.modal');
  var buttonModalClose = document.querySelectorAll('.js-modal-close');
  var buttonNavClose = document.querySelector('.js-nav-close');
  var linkBackCall = document.querySelector('.js-back-call');
  var buttonOpenMenu = document.querySelector('.js-menu');
  var nav = document.querySelector('.nav');
  /**
   * Закрывает модальное окно
   */

  var closeModal = function closeModal() {
    htmlElement.classList.remove('show-modal');
    document.removeEventListener('keydown', onEscModalClose);
  };
  /**
   * Функция для обработчика события
   * @param {Object} evt - глобальный объект Event
   */


  var closeModalOverlay = function closeModalOverlay(evt) {
    modalOverlays.forEach(function (modal) {
      if (evt.target !== modal) {
        return;
      }

      closeModal();
    });
  };
  /**
   * При нажатии на ESC убирает модальное окно
   */


  var onEscModalClose = function onEscModalClose(evt) {
    if (window.utils.checkEscEvent(evt)) {
      closeModal();
    }
  };
  /**
   * Показывает модальное окно
   * @param {HTMLElement} modal - DOM элемент
   */


  var showModal = function showModal() {
    htmlElement.classList.add('show-modal');
    document.addEventListener('click', closeModalOverlay);
    document.addEventListener('keydown', onEscModalClose);
  };

  buttonModalClose.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModal();
    });
  });
  linkBackCall.addEventListener('click', function (evt) {
    evt.preventDefault();
    showModal();
  });

  var closeNav = function closeNav() {
    nav.classList.remove('nav--open');
    document.removeEventListener('keydown', onEscNavClose);
  };

  var onEscNavClose = function onEscNavClose(evt) {
    if (window.utils.checkEscEvent(evt)) {
      closeNav();
    }
  };

  buttonNavClose.addEventListener('click', closeNav);

  if (nav) {
    buttonOpenMenu.addEventListener('click', function (evt) {
      evt.preventDefault();
      nav.classList.add('nav--open');
      document.addEventListener('keydown', onEscNavClose);
    });
  }
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