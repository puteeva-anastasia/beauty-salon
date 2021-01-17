$(function() {
    
	$('#my-menu').mmenu({
        extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
        navbar:{
            title: '<img src="../img/dest/logo/logo-1.svg" alt="Салон красоты">'
        }
    });
    
    var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.hamburger').addClass('is-active');
    }).bind('close:finish', function(){
        $('.hamburger').removeClass('is-active');
    }); 
});