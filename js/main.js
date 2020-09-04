$( document ).ready(function() {
var $document = $(document),
        $element1 = $('.scroll_top'),
 changed = 'changed';

    if ($document.scrollTop() >= 500) {
        $element1.removeClass(changed);
    } else {
        $element1.addClass(changed);
    }

    $(window).scroll(function () {
    var $document = $(document),
        $element1 = $('.scroll_top'),
 changed = 'changed';
    if ($document.scrollTop() >= 500) {
        $element1.removeClass(changed);
    } else {
        $element1.addClass(changed);
    }
    });
    $('.scroll_top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
});
});