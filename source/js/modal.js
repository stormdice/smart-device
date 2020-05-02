'use strict';

(function () {
  const htmlElement = document.querySelector('html');
  const modalOverlays = document.querySelectorAll('.modal');
  const buttonModalClose = document.querySelectorAll('.js-modal-close');
  const buttonNavClose = document.querySelector('.js-nav-close');
  const linkBackCall = document.querySelector('.js-back-call');
  const buttonOpenMenu = document.querySelector('.js-menu');
  const nav = document.querySelector('.nav');

  /**
   * Закрывает модальное окно
   */
  const closeModal = () => {
    htmlElement.classList.remove('show-modal');
    document.removeEventListener('keydown', onEscModalClose);
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

      closeModal();
    });
  };

  /**
   * При нажатии на ESC убирает модальное окно
   */
  const onEscModalClose = function (evt) {
    if (window.utils.checkEscEvent(evt)) {
      closeModal();
    }
  };

  /**
   * Показывает модальное окно
   * @param {HTMLElement} modal - DOM элемент
   */
  const showModal = () => {
    htmlElement.classList.add('show-modal');

    document.addEventListener('click', closeModalOverlay);
    document.addEventListener('keydown', onEscModalClose);
  };

  buttonModalClose.forEach((button) => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();

      closeModal();
    });
  });

  linkBackCall.addEventListener('click', (evt) => {
    evt.preventDefault();
    showModal();
  });

  const closeNav = () => {
    nav.classList.remove('nav--open');

    document.removeEventListener('keydown', onEscNavClose);
  };

  const onEscNavClose = function (evt) {
    if (window.utils.checkEscEvent(evt)) {
      closeNav();
    }
  };

  buttonNavClose.addEventListener('click', closeNav);

  if (nav) {
    buttonOpenMenu.addEventListener('click', (evt) => {
      evt.preventDefault();
      nav.classList.add('nav--open');

      document.addEventListener('keydown', onEscNavClose);
    });
  }
})();
