(function ($, window, document, undefined) {
  'use strict';

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

  /* PARALLAX BANNER */
  const parallaxBanner = () => {
    let scroll = $(window).scrollTop();
    let scale = 1 + (scroll / 2000);
    let top = scroll / 15;

    $(".js-banner").css({
      'transform': `scale(${scale}) translateY(${top}%)`
    });
  }

  let animated = false;

  /* ANIMATE STATS */
  const animateStats = () => {
    const statsSection = $('.js-stats');
    const statsTitle = $('.js-stats-title');
    const statsLine = $('.js-stats-line');

    const bottomOfElement = statsSection.offset().top + statsSection.outerHeight();
    let bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();

    if ((bottomOfScreen > bottomOfElement) && !animated) {
      statsTitle.addClass('animated');

      setTimeout(function() {
        statsLine.addClass('animated');
      }, 300);

      setTimeout(function() {
        for (let index = 1; index <= 6; index++) {
          (function(index) {
            let delay = 200 * index;

            setTimeout(function() {
              $(`.${index}`).addClass('animated')
            }, delay);
          })(index)
        }
      }, 1200);

      animated = true;
    }
  }

  /* INITIALIZE FUNCTIONS ON WINDOW LOAD */
  $(window).on('load', function () {
    addImageToBackground('.s-img-switch');
  });

  /* INITIALIZE FUNCTIONS ON WINDOW SCROLL */
  $(window).on('scroll', function () {
    parallaxBanner();
    animateStats();
  });

})(jQuery, window, document);