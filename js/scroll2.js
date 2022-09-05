  const swipe = new Swiper('.swiper', {
    allowTouchMove: false,
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      swipe: false,
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

  });

  var mediaQuery = window.matchMedia('(max-width: 800px)');

if (mediaQuery.matches) {
  // я выполнюсь только если ширина экрана 795 или больше
  const swipe = new Swiper('.swiper', {
    allowTouchMove: false,
    slidesPerView: 2,
    slidesPerGroup: 1,
    loop: true,
    // spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

  });
}
