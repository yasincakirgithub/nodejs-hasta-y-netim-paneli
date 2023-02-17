$(function(){
	$('.mobile-menu').click(function(){
		$('.main-menu').fadeIn(300);
	});
	$('.mobile-close').click(function(){
		$('.main-menu').fadeOut(300);
	});
	$('.dropper').click(function(e){
		$(this).next('.dropped').fadeToggle(300);
		$(this).toggleClass("active");
		e.preventDefault();
	});
});

$(function(){
	$(".tab-item").click(function(){
		let dataItem = $(this).attr("data-item");
		let mainDiv = $(this).closest(".tab-system");

		$(mainDiv).find(".tab-item").removeClass("active");
		$(mainDiv).find(".tab-content").removeClass("active");

		$(this).addClass("active");
		$(mainDiv).find("#"+dataItem).addClass("active");
	});
});

const newsSlider = new Swiper('.news-slider', {
	loop: false,
	navigation: {
		nextEl: ".news-slider-button-next",
		prevEl: ".news-slider-button-prev",
	},
	breakpoints: {
	480: {
	  slidesPerView: 1,
	  spaceBetween: 0,
	},
	768: {
	  slidesPerView: 2,
	  spaceBetween: 20,
	},
	1024: {
	  slidesPerView: 4,
	  spaceBetween: 30,
	},
	},
});
const commentSlider = new Swiper('.comments-slider', {
	loop: false,
	navigation: {
		nextEl: ".comment-slider-button-next",
		prevEl: ".comment-slider-button-prev",
	},
	slidesPerView: 1,
	spaceBetween: 0,
	pagination: {
		el: '.comment-slider-pagination',
		type: 'bullets',
	},
});