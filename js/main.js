$(function () {

  $('.solution__item-title').on('click', function () {
    $(this).toggleClass('solution__item-title--active');
    $(this).next().slideToggle();
  })

  if (window.matchMedia("(max-width: 1000px)").matches) {
    $('.partners__items').slick({
      arrows: false,
      slidesToShow: 4,
      centerMode: true,
      responsive: [
        {
          breakpoint: 371,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  }
  if (window.matchMedia("(max-width: 1050px)").matches) {
    $('.other-cards__items').addClass('other-cards__items--slider');
  }

  

  $('.other-cards__items--slider').slick({
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 655,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.services__box-select').styler();

  $('.deals-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.deals-tabs__top-item').removeClass('deals-tabs__top-item--active');
    $(this).addClass('deals-tabs__top-item--active');
    $('.deals__items').removeClass('deals__items--active');
    $($(this).attr('href')).addClass('deals__items--active');
  });

  $('.banks-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.banks-tabs__top-item').removeClass('banks-tabs__top-item--active');
    $(this).addClass('banks-tabs__top-item--active');
    $('.banks__table').removeClass('banks__table--active');
    $($(this).attr('href')).addClass('banks__table--active');
  });

  $('.info__item-title').on('click', function () {
    if ($('.info__items').hasClass('one')) {
      $('.info__item-title').not($(this)).removeClass('info__item--acive');
      $('.info__item-box').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('info__item--acive').next().slideToggle(300);
  });

  $(".cards-page__item-stars").rateYo({
    starWidth: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "3px"
  });

  $(".specific-card__top-stars").rateYo({
    starWidth: "19px",
    normalFill: "#d6d6d6",
    ratedFill: "#FFC107",
    readOnly: true,
    spacing: "7px"
  });
  $(".specific-card__reviews-star").rateYo({
    starWidth: "30px",
    normalFill: "#d6d6d6",
    ratedFill: "#FFC107",
    readOnly: true,
    spacing: "12px"
  });
  $(".reviews__star").rateYo({
    starWidth: "30px",
    normalFill: "#d6d6d6",
    ratedFill: "#FFC107",
    readOnly: false,
    spacing: "12px"
  });
  $(".specific-card__reviews-star--mobile").rateYo({
    starWidth: "14px",
    normalFill: "#d6d6d6",
    ratedFill: "#FFC107",
    readOnly: true,
    spacing: "5px"
  });
  $(".banks__item-stars").rateYo({
    starWidth: "15px",
    normalFill: "#d6d6d6",
    ratedFill: "#FFC107",
    readOnly: true,
    spacing: "6px"
  });

  $('.reviews__btn').on('click', function () {
    $('.reviews__modal').addClass('reviews__modal--active');
  });

  
});

$(function () {
  $('.banks__item').slice(0, 3).show();
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $('.banks__item:hidden').slice(0, 3).slideDown(10);
  })
});
$(function () {
  $('.banks__item--reviews').slice(0, 3).show();
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $('.banks__item--reviews:hidden').slice(0, 3).slideDown(10);
  })
});
$(function () {
  $('.banks__item--all').slice(0, 3).show();
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $('.banks__item--all:hidden').slice(0, 3).slideDown(10);
  })
});
$(function () {
  $('.specific-card__reviews-item').slice(0, 2).show();
  $("#showAll").on('click', function (e) {
    e.preventDefault();
    $('.specific-card__reviews-item:hidden').slice(0, 2).slideDown(10);
  })
});
$(function () {
  $('.cards-page__item').slice(0, 2).show();
  $("#showMore").on('click', function (e) {
    e.preventDefault();
    $('.cards-page__item:hidden').slice(0, 2).slideDown(10);
  })
});
$(function () {
  $('.cards-page__item--2').slice(0, 2).show();
  $("#showMore").on('click', function (e) {
    e.preventDefault();
    $('.cards-page__item--2:hidden').slice(0, 2).slideDown(10);
  })
});
$(function () {
  $('.cards-page__item--3').slice(0, 2).show();
  $("#showMore").on('click', function (e) {
    e.preventDefault();
    $('.cards-page__item--3:hidden').slice(0, 2).slideDown(10);
  })
});
$(function () {
  $('.cards-page__item--4').slice(0, 2).show();
  $("#showMore").on('click', function (e) {
    e.preventDefault();
    $('.cards-page__item--4:hidden').slice(0, 2).slideDown(10);
  })
});

function discharge() {
  $('.services__input').val(String($('.services__input').val().replace(/[^0-9.]/g, '')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
}
discharge();
$('.services__input').keyup(function () {
  discharge();
});
