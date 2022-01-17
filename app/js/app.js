$(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut('slow');
});

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

    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        autoplay: true,
        autoplayHoverPause: true
    });

    $('.partners').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
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
        onResize();
    }

    $('section .h2').each(function () {
        $(this).html($(this).html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    $('select').selectize();

    $("form.callback-form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $($(this)).find('callback-success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function () {
                $($(this)).find('callback-success').removeClass('active').fadeOut();
                $(this).trigger("reset");
            }, 3000);
        });
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else
            $('.top').removeClass('active');
    });

    $('.top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 'slow', 'swing');
    });
});
