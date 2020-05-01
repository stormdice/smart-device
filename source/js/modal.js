'use strict';

(function () {
  const ModalType = {
    CALLBACK: 'modal-callback',
    MENU: 'modal-menu',
  };

  const htmlElement = document.querySelector('html');
  const modalOverlays = document.querySelectorAll('.modal');
  const buttonModalClose = document.querySelectorAll('.js-modal-close');
  const linkBackCall = document.querySelector('.js-back-call');
  const buttonOpenMenu = document.querySelector('.js-menu');
  const nav = document.querySelector('.nav');

  /**
   * Закрывает модальное окно
   */
  const closeModal = () => {
    htmlElement.classList.remove(
      'show-modal',
      ModalType.CALLBACK,
      ModalType.MENU
    );

    nav.removeAttribute('style');

    document.removeEventListener('keydown', onEscModalClose);
  };

  const checkNavigationWhenCloseModal = () => {
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
  const closeModalOverlay = (evt) => {
    modalOverlays.forEach((modal) => {
      if (evt.target !== modal) {
        return;
      }

      checkNavigationWhenCloseModal();
    });
  };

  /**
   * При нажатии на ESC убирает модальное окно
   */
  const onEscModalClose = function (evt) {
    if (window.utils.checkEscEvent(evt)) {
      checkNavigationWhenCloseModal();
    }
  };

  /**
   * Показывает модальное окно
   * @param {HTMLElement} modal - DOM элемент
   */
  const showModal = (modalType) => {
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

  buttonModalClose.forEach((button) => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();

      checkNavigationWhenCloseModal();
    });
  });

  linkBackCall.addEventListener('click', (evt) => {
    evt.preventDefault();
    showModal(ModalType.CALLBACK);
  });

  buttonOpenMenu.addEventListener('click', (evt) => {
    evt.preventDefault();
    showModal(ModalType.MENU);
  });
})();
