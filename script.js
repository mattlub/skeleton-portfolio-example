$(document).ready(function() {
	
	var $nav_offset = $('.nav-container').offset().top;
	
	$(window).bind('scroll', function() {
         if ($(window).scrollTop() > $nav_offset) {
             $('.scroll-nav-container').show();
             $('.nav-replacement')
         }
         else {
             $('.scroll-nav-container').hide();
         }
    });
    
    $('.nav-item').on('click', function() {
    	event.preventDefault();
    	
    	var $scroll_element_id = $(this).attr('id') + "-scroll";
    	
    	$(document.body).animate({
			'scrollTop':   $('#' + $scroll_element_id).offset().top - 70
		}, 500);
		
    });
    
    
	// really slow in my old version of chrome
    $('.card-image').hover(function() {
    	$(this).addClass('enlarge');
    }, function () {
    	$(this).removeClass('enlarge');
    });
    
    

});