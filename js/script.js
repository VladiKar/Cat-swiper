// const swiper = new Swiper('.swiper', {
//     slidesPerView: 3,
//     slidesPerGroup: 3,
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true,
//     },
// });
const swiper = new Swiper('.swiper', {

    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});