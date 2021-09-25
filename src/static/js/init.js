$(document).ready(function () {
  if(($(window).width() > 767) && ($('#fullpage').length)){
    $('#fullpage').fullpage({
      sectionSelector: '.vertical-scrolling',
      scrollingSpeed: 1000,
      anchors: ['start', 'services', 'cases', 'steps', 'activitys', 'strategy', 'blog', 'finish']
    });
  }
  
  //slider
  function buidSliderGroup(sliderId, slidesToShowNumb){
    $(sliderId).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      //swipe: false,
      infinite: false,
//      responsive: [
//        {
//          breakpoint: 767,
//          settings: {
//            swipe: true
//          }
//        }
//      ]
    });
    
    $(sliderId).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $(this).closest('.js-slider').find('.js-slider-slider-item').eq(nextSlide).addClass('active').siblings().removeClass('active');
      //$('.js-slider-slider-item').eq(nextSlide).addClass('active').siblings().removeClass('active');
    });
    
    $(sliderId).closest('.js-slider').find('.js-slider-slider-item').on('click', function(){
      let indexNumb = $(this).attr('data-slideindex');    
      $(sliderId).slick('slickGoTo', indexNumb);
    });   
    
  }
  
  buidSliderGroup('#js-services-slider');
  buidSliderGroup('#js-cases-slider');
  buidSliderGroup('#js-steps-slider');
  
  $('#js-blog-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
});
