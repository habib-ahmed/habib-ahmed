(function ($) {
	"use strict";
    
	jQuery(document).ready(function() {   
	
		// slicknav active
		$("#navigation").slicknav({
			prependTo: ".responsive-menu-wrap"
		});
	   
        
        new WOW().init();
        
        //scoll-to-bottom smoothly
		$('.scrolltobottom').click(function(){
			 $("html, body").animate({ scrollTop: $(document).height() }, 1000);
			return false;
		});   
		//scoll-to-top FadeOut  
		$(window).scroll(function(){
			if ($(this).scrollTop() > 300) {
				$('.scrolltobottom').fadeOut();
			} else {
				$('.scrolltobottom').fadeIn();
			}
		});
		
		
		//scoll-to-top smoothly
		$('.scrolltotop').click(function(){
			$("html,body").animate({
				'scrollTop' : '0'
			}, 600);
			return false;
		}); 
		//scoll-to-top FadeOut  
		$(window).scroll(function(){
			if ($(this).scrollTop() > 250) {
				$('.scrolltotop').fadeIn(0);
			} else {
				$('.scrolltotop').fadeOut(300);
			}
		});
        
    });
    
    
    jQuery(window).load(function() {
        
    });
    
}(jQuery));	