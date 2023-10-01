var mySwiper;

function coverflowSwiper() {
  var swiperOptions = {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
  
    centeredSlides: true,
    effect: "coverflow", 
    coverflowEffect: {
      depth: 1000,
      modifier: 1,
      rotate: 50,
      stretch: 1,
      slidesShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  mySwiper = new Swiper('.swiper', swiperOptions);
}

function destroySwiper() {
  if (mySwiper) {
    mySwiper.destroy();
    mySwiper = null;
  }
}
coverflowSwiper();


window.addEventListener("resize", function() {
  if (window.innerWidth <= 1205) {
    destroySwiper();
    var newSwiperOptions = {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      effect: "flip", 
      flipEffect: {
        limitRotation: true,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
    mySwiper = new Swiper('.swiper', newSwiperOptions);
  } else {
    destroySwiper();
    coverflowSwiper();
  }
  
});

window.addEventListener("load", function() {
  if (window.innerWidth <= 1205) {
    destroySwiper();
    var newSwiperOptions = {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      effect: "flip", 
      flipEffect: {
        limitRotation: true,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
    mySwiper = new Swiper('.swiper', newSwiperOptions);
  } else {
    destroySwiper();
    coverflowSwiper();
  } 
});




















// var mySwiper = null;

// function initSwiper(effect) {
//   if (mySwiper) {
//     // mySwiper.destroy(true, true); // Destroy Swiper and remove slides
//   }

//   var swiperOptions = {
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 3,
//     centeredSlides: true,
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     effect: effect,
//     coverflowEffect: {
//       depth: 1000,
//       modifier: 1,
//       rotate: 50,
//       stretch: 1,
//       slidesShadows: true,
//     },
//     cubeEffect: {
//       slideShadows: true,
//       shadow: true,
//       shadowOffset: 20,
//       shadowScale: 0.94,
//     },
//   };

//   mySwiper = new Swiper('.swiper-container', swiperOptions);
// }

// // Initialize Swiper on page load
// initSwiper('coverflow');

// // Listen for screen size changes
// window.addEventListener('resize', function() {
//   var newEffect = window.innerWidth <= 1205 ? 'cube' : 'coverflow';
//   initSwiper(newEffect);
// });
