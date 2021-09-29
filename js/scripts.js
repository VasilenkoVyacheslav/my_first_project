$(document).ready(function () {
    $('.mobile-menu').on('click', function () {
        $('.menu').slideToggle().css('right', '0px !important').css('left', 'auto');
    })

    const swiper = new Swiper('.gallery', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 400
    });

})
