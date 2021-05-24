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

const menuToggle = () => {
    const menu = document.querySelector('.navbar-menu');
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', (e) => {
       menu.classList.toggle('navbar-menu--visible');
    });
};

menuToggle();

const postData = (body) => {
    return fetch('send.php', {
        body: body,
        method: 'POST',
    });
};
const bindForm = (form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.dataset.name;
        const formData = new FormData(e.target);
        const data = {
            'formName': name,
        };
        formData.forEach((item, index) => data[index] = item);
        postData(JSON.stringify(data))
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status not 200');
                }
                return response.text()
            }).then((response) => {
            form.reset();
        }).catch((error) => {
            console.error(error);
        });
    })
};
const formListener = () => {
    const feedBackForm = document.querySelector('.feedback-form');
    const subscribeForm = document.querySelector('.subscribe-form');
    bindForm(feedBackForm);
    bindForm(subscribeForm);
};
formListener();