'use strict';

var DEBOUNCE_INTERVAL = 500;
/**
 * устранение дребезга
 * @param {function} callBack - коллбек функция
 * @return {function}
 */

var debounce = function debounce(callBack) {
  var lastTimeout = null;
  return function () {
    var parameters = arguments;

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(function () {
      callBack.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};
/**
 * показывает/скрывает список контента в футере
 */


var showFooterContentList = function showFooterContentList() {
  var tabletWidth = 770;

  if (screen.width < tabletWidth) {
    console.log(screen.width);
    var footerContentList = document.querySelectorAll('.js-footer-list');
    footerContentList.forEach(function (list) {
      list.addEventListener('click', function () {
        list.classList.toggle('footer__content--height');
      });
    });
  }
};

window.addEventListener('resize', debounce(showFooterContentList));
'use strict';

var linkScrollDown = document.querySelector('.js-scroll-down');
linkScrollDown.addEventListener('click', function (evt) {
  evt.preventDefault();
  window.scroll({
    top: 900,
    left: 0,
    behavior: 'smooth'
  });
});