/********************* 스크롤 애니메이션 *********************/

window.onload = function () {
    $(window).scroll(function () {
        const position = $(this).scrollTop();

        // sec1 애니메이션(브랜드스토리)
        const sec1 = $('#sec1').offset().top;
        const sec1TxtBox = $('#sec1 .txt_box');
        const sec1ImgBox = $('#sec1 .img_box')

        if (position >= sec1 - 400) {
            sec1TxtBox.css({ 'right': '0', 'opacity': '1' })
            sec1ImgBox.css({ 'left': '0', 'opacity': '1' })
        } else {
            sec1TxtBox.css({ 'right': '-200px', 'opacity': '0' })
            sec1ImgBox.css({ 'left': '-200px', 'opacity': '0' })
        }

        // sec2 애니메이션(메뉴 소개)
        const sec2 = $('#sec2').offset().top;
        const sec2MenuWrap = $('#sec2 .menu_wrap');

        if (position >= sec2 - 400) {
            sec2MenuWrap.css({ 'bottom': '0', 'opacity': '1' })
        } else {
            sec2MenuWrap.css({ 'bottom': '-100px', 'opacity': '0' })
        }


        // sec3 애니메이션
        const sec3 = $('#sec3').offset().top;
        const sec3Store = $('#sec3 .store_box');
        const sec3Frch = $('#sec3 .frch_box')
        const sec3Img = $('#sec3 .store_img')

        if (position >= sec3 - 400) {
            sec3Store.css({ 'left': '0', 'opacity': '1' })
            sec3Frch.css({ 'right': '0', 'opacity': '1' })
            sec3Img.css({ 'top': '50%', 'opacity': '1' })

        } else {
            sec3Store.css({ 'left': '-200px', 'opacity': '0' })
            sec3Frch.css({ 'right': '-200px', 'opacity': '0' })
            sec3Img.css({ 'top': '60%', 'opacity': '0' })

        }

    })

/********************* 스와이퍼 *********************/

    //메인 슬라이드(SWIPER)

    const swiper1 = new Swiper('.mainSlide', {
        loop: true,

        pagination: {
            el: '.mainSlide .swiper-pagination',
        },

        navigation: {
            nextEl: '.mainSlide .swiper-button-next',
            prevEl: '.mainSlide .swiper-button-prev',
        },
    });



    // 메뉴슬라이드(SWIPER)
    var swiper2 = new Swiper(".menuSlide", {
        slidesPerView: 4,
        spaceBetween: 80,
        loop: true,
        navigation: {
            nextEl: '.menu_wrap .swiper-button-next',
            prevEl: '.menu_wrap .swiper-button-prev',
        },
        pagination: {
            el: ".menuSlide .swiper-pagination",
            clickable: true,
        },

    });

}