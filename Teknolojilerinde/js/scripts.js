(function ($, window, document, undefined) {
  'use strict';

  /* PRELOADER */
  const pagePreloader = () => {
    const preloaderIdentification = $('.js-preloader');
    if (preloaderIdentification.length) {
      setTimeout(function () {
        preloaderIdentification.fadeOut(200);
      }, 400);
    }
  };

  /* ADD IMAGE ON BACKGROUND */
  const addImageToBackground = (img_sel, parent_sel) => {
    if (!img_sel) return;

    let $parent, $imgDataHidden, _this;
    $(img_sel).each(function () {
      _this = $(this);
      $imgDataHidden = _this.data('s-hidden');
      $parent = _this.closest(parent_sel);
      $parent = $parent.length ? $parent : _this.parent();
      $parent.css('background-image', 'url(' + this.src + ')').addClass('s-back-switch');
      if ($imgDataHidden) {
        _this.css('visibility', 'hidden');
        _this.show();
      }
      else {
        _this.hide();
      }
    });
  };

  /* HEADER SCROLL */
  const headerScroll = () => {
    const header = $('.js-header');

    $(window).scrollTop() > 0 ? header.addClass('scrolled') : header.removeClass('scrolled');
}

  /* INITIALIZE FUNCTIONS ON WINDOW LOAD */
  $(window).on('load', function () {
    pagePreloader();
    addImageToBackground('.s-img-switch');
    headerScroll();
  });

  /* INITIALIZE FUNCTIONS ON WINDOW SCROLL */
  $(window).on('scroll', function () {
    headerScroll();
  });

})(jQuery, window, document);