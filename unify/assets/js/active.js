(function ($) {
	"use strict";
	$(document).ready(function() {   
	
		
		// parallax active
	//	$('.bg-opacity').parallax("50%", 0.4);
		
		
		// Menu sticky
		$(window).on('scroll',function() {    
			var scroll = $(window).scrollTop();
			if (scroll < 1) {
				$(".header-area").removeClass("header-sticky");
			}else{
				$(".header-area").addClass("header-sticky");
			}
		});
		
		// jquery onePageNav active
		jQuery('#nav').onePageNav();
		
		// mobile-menu active
		jQuery('.main-menu nav').meanmenu({
			meanMenuContainer: '.mobile-menu-area .container'
		});

	 
        // mixitup active 
        var mixer = mixitup(".mixitup");
        
		// welcome-slider-area active
        $(".welcome-slider-area").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
			autoplay: false,
			autoplayTimeout: 3000,
			autoplayHoverPause: false
		});
        
		// testimonial-slider & blog-slider active
        $(".testimonial-slider, .blog-slider").owlCarousel({
			margin: 30,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 4000,
			autoplayHoverPause: false,
			responsive: {
				0:{
					items:1
				},
				768:{
					items:1
				},
				1024:{
					items:2
				}
			}
		});
        
		// brand-carousel active
        $(".brand-carousel").owlCarousel({
			margin: 30,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 4000,
			autoplayHoverPause: false,
			responsive: {
				0:{
					items:2
				},
				480:{
					items:3
				},
				768:{
					items:4
				},
				1024:{
					items:5
				}
			}
		});
        
    });
	
	$(window).load(function() {   
	 
	
    });
	
}(jQuery));	