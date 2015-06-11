$('.show-contact-icon, li, p, h1, h2, img, h3').delay(300).velocity("transition.slideUpIn", { stagger: 80});

// $('web-icon').on('mouseenter', function(){
//   $('.view-online').addClass('visible');
// });

$('.toggle-box').on('click', function(){
  $('.header').slideToggle();
});

$('.show-contact-icon').hover(function(){
  $('nav').addClass('animated bounceInUp show');
  $('.show-contact-icon').velocity("transition.bounceDownOut", 1200);
});

$('.white-box-start').delay(300).velocity("transition.slideDownOut", 1200);
