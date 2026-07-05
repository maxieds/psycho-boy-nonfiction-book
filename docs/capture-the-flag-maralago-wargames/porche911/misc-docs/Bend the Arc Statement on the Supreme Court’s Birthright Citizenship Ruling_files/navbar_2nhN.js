var header;
jQuery(document).ready(function($) {
  header = $('.navbar').last().height() - 132
  if (header < 0) { header = 10 }
  fixedNavBar();
});

$(window).scroll(function (event) {
  fixedNavBar();
});

function fixedNavBar() {
  var scroll = $(window).scrollTop();
  if (scroll >= header && ($('.navbar-toggle').length == 0 || $('.navbar-toggle').hasClass("collapsed"))) {
    $('.navbar').addClass('navbar-header-overlay');
  } else {
    $('.navbar').removeClass('navbar-header-overlay');
  }
}
