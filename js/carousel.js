// Bootstrap Carousel
$(document).ready(function(){
  $('#profileCarousel').carousel({
    interval: 3000,
    pause: 'hover',
    wrap: true
  });
});

// Owl Carousel
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive:{
      0:{
          items: 1,
          nav: false
      },
      600:{
          items: 3,
          nav: false
      },
      1000:{
          items: 5,
          nav: true
      }
    },
    navText: ['<span>&larr;</span>', '<span>&rarr;</span>']
  });
}); 