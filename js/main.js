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

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("hotel-map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [12.920828, 100.859919],
        //12.920828, 100.859919
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });
    var myPlacemark = new ymaps.Placemark([12.920828, 100.859919], {
        balloonContent: '<p> я тут был, ещё хочу</p>'
    });
    myMap.geoObjects.add(myPlacemark);
}