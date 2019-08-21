'use strict';

(function() {
  const buttonModalClose = document.querySelectorAll('.js-modal-close');
  const modalBackCall = document.querySelector('#callback');
  const linkBackCall = document.querySelector('.js-back-call');

  /**
   * Закрывает модальное окно
   */
  const closeModal = () => {
    const modals = document.querySelectorAll('.modal');

    document.querySelector('body').style = '';

    modals.forEach(modal => {
      modal.addEventListener('click', evt => {
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
  const onEscModalClose = function(evt) {
    if (window.utils.checkEscEvent(evt)) {
      closeModal();
      document.removeEventListener('keydown', onEscModalClose);
    }
  };

  /**
   * Показывает модальное окно
   * @param {HTMLElement} modal - DOM элемент
   */
  const showModal = modal => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    if (isMac) {
      document.querySelector('body').style = 'overflow: hidden;';
    } else {
      document.querySelector('body').style =
        'overflow: hidden; margin-right: 16px';
    }

    modal.classList.add('modal--show');
    document.addEventListener('keydown', onEscModalClose);
  };

  buttonModalClose.forEach(button => {
    button.addEventListener('click', evt => {
      evt.preventDefault();
      closeModal();
      document.removeEventListener('keydown', onEscModalClose);
    });
  });

  linkBackCall.addEventListener('click', evt => {
    evt.preventDefault();
    showModal(modalBackCall);
  });
})();
