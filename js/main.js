const hotelSwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.hotel-slider__arrow--next',
        prevEl: '.hotel-slider__arrow--prev',
    },
    keyboard: {
      enable: true,
      onlyInViewport: true
    },
});

document.addEventListener('click', e => {
    console.log(e.target)
})