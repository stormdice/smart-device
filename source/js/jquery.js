'use strict';

$(document).ready(function () {
  $('.js-tel-only').inputmask({mask: '+7 (999)999-99-99'});
  $('.js-text-only').inputmask({regex: '[^0-9]*'});
});
