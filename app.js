$(function () {

    let introH = $('#intro').innerHeight();
    let header = $('#header');
    let scrollOffset = $(window).scrollTop();


    /* fixed header*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll() {
        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* плавный скрол к элементам */

    $('[data-scroll]').on("click", function (event) {
        event.preventDefault();

        let blokId = $(this).data('scroll');
        let blockOffset = $(blokId).offset().top;


        $('#nav a').removeClass('activ');
        $(this).addClass('activ');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);


    })


    /*появление меню */

    $('#nav__toggle').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass("activ");

        $('#nav').toggleClass("activ");

    });









});