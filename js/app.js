$(function () {

    $('#my-menu').mmenu({
        extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
        navbar: {
            title: '<img src="img/dest/logo/logo-1.svg" alt="Салон красоты">'
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function () {
        $('.hamburger').addClass('is-active');
    }).bind('close:finish', function () {
        $('.hamburger').removeClass('is-active');
    });

    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService()
        }, 900);
    });

    $('.carousel-services').owlCarousel({
        dots: false,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

    function carouselService() {
        $('.carousel-services-item').each(function () {
            var find_height = Math.round($(this).find('.carousel-services-content').outerHeight()),
                carousel_services_image = $(this).find('.carousel-services-image').css('min-height', find_height);
        });
    }
    carouselService();

    //Resize Window
    function onResize() {
        $('.carousel-services-list').equalHeights();
    }
    onResize();

    window.onresize = function () {
        onResize()
    };
    
    $('section .h2').each(function(){
        $(this).html($(this).html().replace(/^(\S+)/,'<span>$1</span>'));
    })

});
