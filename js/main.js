import { Modal} from "./modal.js";
import { bindForm} from "./bindForm.js";

const modal = new Modal({});

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

// document.addEventListener('click', e => {
//     console.log(e.target)
// })
const reviewsSwiper = new Swiper('.reviews-slider__container', {
    // Optional parameters
    loop: true,

    centeredSlides: true,
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

const menuToggle = () => {
    const menu = document.querySelector('.navbar-menu');
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', (e) => {
        menu.classList.toggle('navbar-menu--visible');
    });
};
menuToggle();

const formListener = () => {
    const feedBackForm = document.querySelector('.feedback-form');
    const subscribeForm = document.querySelector('.subscribe-form');
    const modalForm = document.querySelector('.modal-form');
    bindForm(feedBackForm);
    bindForm(subscribeForm);
    bindForm(modalForm, () => {
        modal.closeModal();
    });
};
formListener();
