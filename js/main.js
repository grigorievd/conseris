$(document).ready(function() {	

	$('.scheme-section .components-list li').each(function(index, el) {
		$(this).css({'transition-delay' : (0.2 + (0.2 * (index))) + 's'})		
	});

	// scroll animations
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	 
	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	 
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      		$element.addClass('in-view');
	      		setTimeout(function(){
	      			$element.addClass('ready');
	      		},1500)
				/*if ( !($element.hasClass('featured-post') || $element.hasClass('no-greensock')) ) {
					TweenMax.to($element, 0.6, {x: 0, y: 0, opacity: 1, ease: BezierCurve.easeOut, autoRound:false });
				}*/
	    } else {
	      // $element.removeClass('in-view');
	    }
	  });

	  if($(window).width() < 768) {
			var window_top_position = $window.scrollTop();

			if (window_top_position >= $('.top-header').height()) {
				$('.bottom-header').addClass('bottom-header-fixed');
				$('.nav-menu-list').css({top:'60px','padding-top' : '66px'});
			} else {
				$('.bottom-header').removeClass('bottom-header-fixed');
				$('.nav-menu-list').css({top:0,'padding-top' : ($('.bottom-header').height() + $('.top-header').height() + 60) + 'px'});
			}
		}
	}

	check_if_in_view();

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	if ( $(window).width() < 1024 ){
		$('.animation-element').addClass('in-view');
	}

	$(window).on('resize', function(event) {
		if ( $(window).width() < 1024 ){
			$('.animation-element').addClass('in-view');
		}
	});
	
});