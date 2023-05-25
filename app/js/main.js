$(function () {
	if (document.documentElement.clientWidth > 1000) {
		$('.customers__slider').slick({
			slidesToShow: 3,
			centerMode: true,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			// autoplay: true,
			centerPadding: 0,
			prevArrow:
				'<button class="slick-prev"><img src="../images/prev-arrow.svg" alt=""></button>',
			nextArrow:
				'<button class="slick-next"><img src="../images/next-arrow.svg" alt=""></button>',
		})
		var slidesToShow = 7
	} else {
		$('.customers__slider').slick({
			slidesToShow: 1,
			centerMode: true,
			dots: true,
			centerPadding: 0,
			arrows: false,
			autoplay: true,
		})
		var slidesToShow = 2
	}

	$('.logo-carousel__slider').slick({
		dots: false,
		arrows: false,
		// autoplay: true,
		speed: 2000,
		infinite: true,
		slidesToShow: slidesToShow,

		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 0,
	})
	$('.menu-btn').on('click', function () {
		$('.header__menu').toggleClass('header__menu--active')
		$('.menu-btn').toggleClass('menu-btn--active')
		$('body').toggleClass('not_scroll')
	})
})
