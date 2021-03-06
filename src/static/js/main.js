isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
//change color
function changeColor(){
  let bodyTag = document.querySelector('body');
  if(bodyTag.classList.contains('light')){
    bodyTag.classList.remove('light');
    bodyTag.classList.add('dark');
  } else{
    bodyTag.classList.add('light');
    bodyTag.classList.remove('dark');
  }
}

//input
function addClassValue($this){	
  if($this.value.trim() != false){
    $this.parentElement.classList.add('value');
  } else{
    $this.parentElement.classList.remove('value');
  }
}
function addClassFocused($this){
  $this.parentElement.classList.add('focused');
}
function removeClassFocused($this){
  $this.parentElement.classList.remove('focused');
}

$(document).ready(function () {
  if (!(isMobile.any())) {
    //cards flippers
    $("#js-sec-1").on("mousemove",function(e) {
      let winWidth = $(window).width();
      $('#js-subtitle-line-1').attr("style", "transform: translateX(" + ((e.pageX - (winWidth / 2))  / 40) + "px)");
      $('#js-subtitle-line-2').attr("style", "transform: translateX(" + (-((e.pageX - (winWidth / 2))  / 40)) + "px)");
      $('#js-subtitle-line-3').attr("style", "transform: translateX(" + ((e.pageX - (winWidth / 2))  / 30) + "px)");
    });
    
    //cursore
    $("body").on("mousemove",function(e) {
      $('#js-cursore').attr("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;");
    });
    $('a').add('button').add('.js-slider-slider-item').hover(
      function () {
        $('#js-cursore').addClass('hovered');
      }, 
      function () {
        $('#js-cursore').removeClass('hovered');
      }
    );  
  
    $('#js-menu-btn').hover(
      function () {
        $('#js-cursore').addClass('in-burger');
      }, 
      function () {
        $('#js-cursore').removeClass('in-burger');
      }
    );  

    $("#js-menu-btn").on("mousemove",function(e) {
      let btnTopPos = $(this).offset().top,
          btnLeftPos = $(this).offset().left,
          btnRadius = $(this).height() / 2,
          leftMoove = e.pageX - btnLeftPos - btnRadius,
          topMoove = e.pageY - btnTopPos - btnRadius;
      $("#js-menu-btn .burger__wrap").attr("style", "transform: translate(" + (leftMoove / 1.5) + "px, "  + (topMoove / 1.5) + "px);");
    });
    $("#js-menu-btn").on("mouseout",function(e) {
      $("#js-menu-btn .burger__wrap").removeAttr("style");
    });

    $('#js-menu-btn').hover(
      function () {
        $('#js-cursore').addClass('in-burger');
      }, 
      function () {
        $('#js-cursore').removeClass('in-burger');
      }
    );
    
    //case gradient
    $("#js-gradient-mooving").on("mousemove",function(e) {
      let x = e.pageX - ($(this).offset().left +  ($(this).width() / 2)   );
      $(".js-gradient").attr("style", "left: " + (x) + "px;");

      $(".js-fig").attr("style", "transform: translate(" + (e.pageX / 70) + "px, "  + (e.pageY / 70) + "px);");
    });
    
    //strategy paralax
    $("#js-sec-strategy").on("mousemove",function(e) {    
      $("#js-strategy-hand").attr("style", "transform: translate(" + (e.pageX / 60) + "px, "  + (e.pageY / 60) + "px);");
      $("#js-strategy-pluses").attr("style", "transform: translate(" + (e.pageX / 80) + "px, "  + (e.pageY / 80) + "px);");
      $(".js-strategy-triangl").attr("style", "transform: translate(" + (e.pageX / 90) + "px, "  + (e.pageY / 90) + "px);");
    });

    //blog gradient
//    $(".js-blog-item").on("mousemove",function(e) {
//      let x = e.pageX - ($(this).offset().left +  ($(this).width() / 2)   );
//      $(this).find(".js-blog-gradient").attr("style", "left: " + (x) + "px;");
//    });
//    $(".js-blog-item").on("mouseout",function(e) {
//      $(this).find(".js-blog-gradient").animate({ left: 0}, 250); 
//    });
    
    //finish paralax
    $("#js-sec-finish").add('#js-popup-1').add('#js-popup-2').on("mousemove",function(e) {    
      $("#js-finish-fig-hand").attr("style", "transform: translate(" + (e.pageX / 50) + "px, "  + (e.pageY / 60) + "px);");
      $("#js-finish-fig-pluses").attr("style", "transform: translate(" + (e.pageX / 70) + "px, "  + (e.pageY / 80) + "px);");
      $("#js-finish-fig-polygon").attr("style", "transform: translate(" + (e.pageX / 90) + "px, "  + (e.pageY / 90) + "px);");
    });
  }
  
  //menu
  $('#js-menu-btn').on('click', function(){    
    if(($(window).width() > 767) && ($('#fullpage').length)){
      if($(this).hasClass('open')){
        if( !($('body').hasClass('popup-1-open')) || !($('body').hasClass('popup-2-open'))){
          $.fn.fullpage.setAllowScrolling(true);
        }
      } else{
        $.fn.fullpage.setAllowScrolling(false);
      }
    }
    $(this).toggleClass('open');
    $('body').toggleClass('menu-opened').toggleClass('no-scroll');
  });
  
  //menu drop
  $('.js-menu-item-drop').on('click', function(){
    if($(window).width() > 767){
       $(this).toggleClass('active').find('.js-submenu').fadeToggle(250);
    } else{
      $(this).toggleClass('active').find('.js-submenu').slideToggle(250);
    }
    
  });
  
  //popup
  $('.js-open-popup-1').on('click', function(){
    $('body').addClass('popup-1-open').addClass('no-scroll');
    if($('#fullpage').length){
      $.fn.fullpage.setAllowScrolling(false);
    }
  });
  $('.js-open-popup-2').on('click', function(){
    $('body').addClass('popup-2-open').addClass('no-scroll');
    if($('#fullpage').length){
      $.fn.fullpage.setAllowScrolling(false);
    }
  });
  
  $('.js-popup-close').on('click', function(){
    $('body').removeClass('popup-1-open').removeClass('popup-2-open').removeClass('no-scroll');
    if($('#fullpage').length){
      $.fn.fullpage.setAllowScrolling(true);
    }
  });
  
  $('.js-radio-tab').on('change', function(){
    if ($(this).is(':checked')){
      if($(this).attr('value') == 'less'){
        $('.js-radio-item:nth-child(1)').fadeIn(250).siblings('.js-radio-item').fadeOut(250);
      } else if ($(this).attr('value') == 'is'){
        $('.js-radio-item:nth-child(2)').fadeIn(250).siblings('.js-radio-item').fadeOut(250);
      } else{
        $('.js-radio-item:nth-child(3)').fadeIn(250).siblings('.js-radio-item').fadeOut(250);
      }
    }
  });
  
  
  //light/dark
  function imgType(){
    $('img').each(function(){
      if( $(this).attr('data-light') ){
        if( $('body').hasClass('light') ){
          $(this).attr('src', $(this).attr('data-light'));
        } else{
          $(this).attr('src', $(this).attr('data-dark'));
        }
      }      
    });
  }
  $('#js-mode').on('click', function(){
    changeColor();
    imgType();
  });
});



