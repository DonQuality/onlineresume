$('main, .show-contact-icon, li, p, h1, h2').velocity("transition.slideUpIn", { stagger: 100});

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
