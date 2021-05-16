const hotelSwiper = new Swiper('.hotel-slider__container', {
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
const reviewsSwiper = new Swiper('.reviews-slider__container', {
    // Optional parameters
    loop: true,

    centeredSlides: true,
    // spaceBetween: 70,
    slidesPerView: 1,
    speed: 500,
    // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
        enable: true,
        onlyInViewport: true
    },
});