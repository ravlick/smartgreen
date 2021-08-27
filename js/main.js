$('.header__burger').on('click', function () {
  $('.menu').addClass('menu--active');
});

$('.menu__btn').on('click', function () {
  $('.menu').removeClass('menu--active');
})

$(function () {

  $('.tabs__item').on('click', function (e) {
    e.preventDefault();
    $('.tabs__item').removeClass('tabs__item--active');
    $(this).addClass('tabs__item--active');

    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  })

})

$(function () {
  $('.gallery__inner').bxSlider({
    prevText: '<button type="button" class="slick-prev"><img src="images/gallery/arrow-prev.svg" alt="arrow prev"></button>',
    nextText: '<button type="button" class="slick-next"><img src="images/gallery/arrow-next.svg" alt="arrow next"></button>',

  });
});

$(function () {
  $('.tabs__content-slick').bxSlider({
    prevText: '<button type="button" class="slick-prev"><img src="images/gallery/arrow-prev.svg" alt="arrow prev"></button>',
    nextText: '<button type="button" class="slick-next"><img src="images/gallery/arrow-next.svg" alt="arrow next"></button>',
  });
});

$(function () {
  $('.tabs-adap__slider').bxSlider({
    prevText: '<button type="button" class="slick-prev"><img src="images/gallery/arrow-prev.svg" alt="arrow prev"></button>',
    nextText: '<button type="button" class="slick-next"><img src="images/gallery/arrow-next.svg" alt="arrow next"></button>',
  });
});




