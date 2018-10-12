$(document).ready(function(){
  $('.slider-items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
  {
    breakpoint: 1250,
    settings: {
      arrows: false
      }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false
      }
    },
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    }
  }
]
  });
});

$(document).ready(function(){
  $('.slider-reviews__items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
  {
    breakpoint: 1250,
    settings: {
      arrows: false
      }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false
      }
    },
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    }
  }
]
  });
});
