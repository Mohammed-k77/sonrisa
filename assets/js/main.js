const fPClass = $('.fast-professional');
const slides = fPClass.find('.slide');
let lis = fPClass.find('li');

lis.each(function() {
  $(this).on('click', function() {
    if (!$(this).hasClass('active')) {
      lis.removeClass('active');
      $(this).addClass('active');
    //   slides.attr('aria-hidden', true);
      switch (lis.index($(this))) {
        case 0:
            slides.eq(0).fadeIn(500);
            slides.eq(1).hide();
            slides.eq(2).hide();
            slides.eq(3).hide();
            break;
        case 1:
            slides.eq(0).hide();
            slides.eq(1).fadeIn(500);
            slides.eq(2).hide();
            slides.eq(3).hide();
            break;
        case 2:
            slides.eq(0).hide();
            slides.eq(1).hide();
            slides.eq(2).fadeIn(500);
            slides.eq(3).hide();
            break;
        case 3:
            slides.eq(0).hide();
            slides.eq(1).hide();
            slides.eq(2).hide();
            slides.eq(3).fadeIn(500);
            break;
      }
    }
  });
});