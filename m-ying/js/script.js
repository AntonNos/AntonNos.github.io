function setImgToBackground(img_selector, parent_selector) {
    if (!img_selector) {
        return false;
    }
    var $parent, $imgDataHidden, _this;
    $(img_selector).each(function() {
        _this = $(this);
        $imgDataHidden = _this.data('hidden-js');
        $parent = _this.closest(parent_selector);
        $parent = $parent.length ? $parent : _this.parent();
        $parent.css('background-image', 'url(' + this.src + ')').addClass('bg-image-block-js');
        if ($imgDataHidden) {
            _this.css('visibility', 'hidden');
            _this.show();
        } else {
            _this.hide();
        }
    });
}

$(window).on('load', function() {
    setImgToBackground('.bg-image-js');
})