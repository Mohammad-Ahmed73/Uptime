jQuery(document).ready(function(){
	jQuery("#search-btn").click(function(){
		jQuery(".search-wrap").slideToggle();
		jQuery(this).toggleClass("active");
	});

	jQuery("#filter-btn").click(function(){
		jQuery(".filter-wrap").slideToggle();
		jQuery(this).toggleClass("active");
	});

	jQuery(".password-visibility").click(function() {
		jQuery(this).toggleClass("visible");
	})
});

function passwordVisibility() {
	let field = document.getElementsByClassName("password")[0];
	console.log(field)
	if (field.type === "password") {
		field.type = "text";
	} else {
		field.type = "password";
	}
}

jQuery('.trending-topic-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	infinite: false,
	dots: false,
	speed: 500,
	mobileFirst: true,
	responsive: [
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 991,
		settings: "unslick"
	}
	]
});

jQuery('.latest-intelligence-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	infinite: false,
	dots: false,
	speed: 500,
	mobileFirst: true,
	responsive: [
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 767,
		settings: "unslick"
	}
	]
});

jQuery('.latest-webinar-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	infinite: false,
	dots: false,
	speed: 500,
	mobileFirst: true,
	responsive: [
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 767,
		settings: "unslick"
	}
	]
});


// Sticky Header Jquery
// jQuery(window).scroll(function() {    
// 	var scroll = jQuery(window).scrollTop();
// 	console.log(scroll)
// 	if (scroll > 0) {
// 		console.log(scroll)
// 		jQuery(".header-main").addClass("position-fixed");
// 	} else {
// 		jQuery(".header-main").removeClass("position-fixed");
// 	}
// });


// Filter Select Jquery
jQuery('.custom-select-wrap .select-value').click(function(){
	jQuery(this).parents(".custom-select-wrap").find('.option-item').removeClass('expanded');
	if(jQuery(this).parents(".custom-select-wrap").hasClass('expanded')){
		jQuery(this).parents(".custom-select-wrap").removeClass('expanded');

	} else {
		jQuery(this).parents(".custom-select-wrap").addClass('expanded');
	}
});

jQuery('.custom-select-wrap .option-item').click(function() {
	if(jQuery(this).hasClass('sub-option-item')) {
		if(jQuery(this).hasClass('expanded')) {
			jQuery(this).removeClass('expanded');
		} else {
			jQuery(".custom-select-wrap .option-item").removeClass('expanded');
			jQuery(this).addClass('expanded');
		}
	} else {
		jQuery(this).parents('.custom-select-wrap').find(".selected-value").html(jQuery(this).html());
		jQuery(this).addClass('selected-item');
		jQuery(this).parents(".custom-select-wrap").addClass('active-select');
		jQuery(".custom-select-wrap .option-item").removeClass('expanded');
		jQuery(".custom-select-wrap").removeClass('expanded');
	}
});

jQuery('.custom-select-wrap .select-icons .cancel').click(function() {
	jQuery(this).parents(".custom-select-wrap").find(".selected-value").html(' ');
	jQuery(this).parents(".custom-select-wrap").removeClass('active-select');
	jQuery(this).parents(".custom-select-wrap").find(".option-item").removeClass('selected-item');
});
