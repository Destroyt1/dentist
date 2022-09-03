// const swipe = new Swiper('.swiper', {
//   slidesPerView: 1,
//   slidesPerGroup: 1,
//   loop: true,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },

// });

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');


tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

  });
});

document.querySelector('.tabs-nav__btn').click();


let burger = document.querySelector('.burger');
let menu = document.querySelector('.footer__nav');
let menuLinks = menu.querySelectorAll('.footer__nav-link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('footer__nav--active');

    document.body.classList.toggle('stop-scroll');
  })


menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('footer__nav--active');

    document.body.classList.remove('stop-scroll')

  })
});



