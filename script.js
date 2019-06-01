function menuClick(){

  var bar = $("nav .fa-bars");
  var menu = bar.siblings(".menu");


  bar.click(function(){

    menu.slideToggle(300);

  })

  $(window).resize(function(){
    if ($(window).width() >= 760){

      menu.css("display", "");

    }
  })

}

function scrollNav(){

  $(window).scroll(function() {

    if ($(this).scrollTop()> 400)

     $("nav").addClass("scrolled");
    else
     {
      $("nav").removeClass("scrolled");
     }
 });

}

function init(){

  menuClick();

  scrollNav();


}


$(document).ready(init);
