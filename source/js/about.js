'use strict';

(function() {
  const btnAboutMoreDetails = document.querySelector('.js-more-details');
  const contentAboutTextContainer = document.querySelector(
    '.js-about-text-container'
  );

  btnAboutMoreDetails.addEventListener('click', evt => {
    evt.preventDefault();
    contentAboutTextContainer.classList.toggle('about__text-container--height');
  });
})();
