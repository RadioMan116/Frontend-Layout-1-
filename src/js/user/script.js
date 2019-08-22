'use strict'


$(document).ready(function () {
	$('body').addClass('test');
	var mySwiper = new Swiper('.swiper-container', {
		speed: 400,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
		// spaceBetween: 100
	});


	$(document).on("click", ".hamburger", function (e) {

		$(this).parent().toggleClass('open');
	});
});
