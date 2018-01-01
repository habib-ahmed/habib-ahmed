(function ($) {
	"use strict";

	$(document).ready(function() {   

		// sticky active
        $('.header-area').sticky({
            topSpacing: 0
        });

        // jquery onePageNav active
        jQuery('.main-menu ul').onePageNav();

		// mobile-menu active
		jQuery('.main-menu nav').meanmenu({
			meanMenuContainer: '.mobile-menu'
		});
	 	
	 	//welcome-area slider active
        $('.welcome-area').owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dot: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: false
		});
        
        // welcome-area slider animation support
		$(".welcome-area").on("translate.owl.carousel", function(){
			$(".slider-content").removeClass("animated zoomIn").css({'opacity':'0'});
		});
		$(".welcome-area").on("translated.owl.carousel", function(){
			$(".slider-content").addClass("animated zoomIn").css({'opacity':'1'});
		});


		// filterizr click menu function
		$('.portfolio-filter li').click(function() {
			$('.portfolio-filter li').removeClass('active');
			$(this).addClass('active');
		});
		
		// filterizr active
		$('.portfolio-list').filterizr();

		$(".team-slider").owlCarousel({
			margin: 30,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: false,
			responsive: {
				0:{
					items:1
				},
				480:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});

		$(".logo-slider").owlCarousel({
			margin: 30,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: false,
			responsive: {
				0:{
					items:1
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

		$(".testimonial-slider").owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: false
		});

		$(".premium-product-slider").owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: false
		});

		// CounterTo active
		var timer = $('.timer');
		if(timer.length) {
			timer.appear(function () {
			    timer.countTo({
					speed: 4500,
					refreshInterval: 50
				});
			})
		}

		// WOW js active
		new WOW().init()

		//scoll-to-top smoothly
		jQuery('.back-to-top a ').click(function(){
			jQuery("html,body").animate({
				'scrollTop' : '0'
			}, 1000);
			return false;
		});


    });
	
}(jQuery));	