$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        slideToShow: 1,
        swipe: true,
    });
  });

  $(document).ready(function(){
    $('.news__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
    
      responsive: [
        {
           breakpoint: 992,
           settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
           },
        },
     ],
    
    });
  });



