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
  var ModalType = {
    CALLBACK: 'modal-callback',
    MENU: 'modal-menu'
  };
  var htmlElement = document.querySelector('html');
  var modalOverlays = document.querySelectorAll('.modal');
  var buttonModalClose = document.querySelectorAll('.js-modal-close');
  var linkBackCall = document.querySelector('.js-back-call');
  var buttonOpenMenu = document.querySelector('.js-menu');
  var nav = document.querySelector('.nav');
  /**
   * Закрывает модальное окно
   */

  var closeModal = function closeModal() {
    htmlElement.classList.remove('show-modal', ModalType.CALLBACK, ModalType.MENU);
    nav.removeAttribute('style');
    document.removeEventListener('keydown', onEscModalClose);
  };

  var checkNavigationWhenCloseModal = function checkNavigationWhenCloseModal() {
    if (nav) {
      nav.setAttribute('style', 'animation: menu-close 0.2s');
      setTimeout(closeModal, 200);
      return;
    }

    closeModal();
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

      checkNavigationWhenCloseModal();
    });
  };
  /**
   * При нажатии на ESC убирает модальное окно
   */


  var onEscModalClose = function onEscModalClose(evt) {
    if (window.utils.checkEscEvent(evt)) {
      checkNavigationWhenCloseModal();
    }
  };
  /**
   * Показывает модальное окно
   * @param {HTMLElement} modal - DOM элемент
   */


  var showModal = function showModal(modalType) {
    htmlElement.classList.add('show-modal');

    switch (modalType) {
      case ModalType.CALLBACK:
        htmlElement.classList.add(ModalType.CALLBACK);
        break;

      case ModalType.MENU:
        htmlElement.classList.add(ModalType.MENU);
        break;
    }

    document.addEventListener('click', closeModalOverlay);
    document.addEventListener('keydown', onEscModalClose);
  };

  buttonModalClose.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      checkNavigationWhenCloseModal();
    });
  });
  linkBackCall.addEventListener('click', function (evt) {
    evt.preventDefault();
    showModal(ModalType.CALLBACK);
  });
  buttonOpenMenu.addEventListener('click', function (evt) {
    evt.preventDefault();
    showModal(ModalType.MENU);
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