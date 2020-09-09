'use strict'

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    autoplay: false,
    autoHeight: true,
    loop: true,
    speed: 1500,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

// Бургер меню
const $body = document.querySelector('body'),
      $menuButton = document.querySelector('.burger'),
      $menu = document.querySelector('.menu');

const $menuItems = document.querySelectorAll('.menu__item-link');


$menuButton.addEventListener('click', () => {
    $menuButton.classList.toggle('burger-active');
    $menu.classList.toggle('menu-active');
    $body.classList.toggle('lock');
    for (let navItems of $menuItems) {
        navItems.addEventListener('click', () => {
            $menuButton.classList.remove('burger-active')
            $menu.classList.remove('menu-active')
        })
    }
});

$menuItems.forEach((elem) => {
    elem.addEventListener('click', () => {
        let href = elem.getAttribute('href').substr(1);
        event.preventDefault();
        document.getElementById(`${href}`).scrollIntoView({ block: "start", behavior: "smooth" });
    });
});
