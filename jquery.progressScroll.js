$.fn.progressScroll = function(options){
	var settings = $.extend({
		fontSize : 20,
		fontFamily : 'sans-serif',
		color : '#009ACF',
		height : '5px',
		textArea : 'dark',
	}, options);

	// namespace
	var progress = {};
	if(settings.textArea === 'dark'){
		$('.scrollWrapper').css({"background-color": "rgba(0,0,0,0.75)"});
		$('.scrollWrapper h3').css({"color": "white"});
	} else {
		$('.scrollWrapper').css({"background-color": "rgba(255,255,255,0.75)"});
		$('.scrollWrapper h3').css({"color": "black"});

	}
	progress.targetScroll = 0;
	progress.headHeight = $('header').outerHeight();
	progress.screenh = screen.height;
	progress.divHeight = $(this).outerHeight();
	progress.numberOfH2 = $('h2').length;
	console.log(progress.numberOfH2);
	console.log("divHeight "+progress.divHeight);
	console.log("headHeight "+progress.headHeight);

	$(window).scroll(function() {
	  	var scrollAmount = $(this).scrollTop() - progress.headHeight ;
	  	var scrollPercent = ((scrollAmount)/(progress.divHeight - progress.screenh))*100;
		// console.log("scroll amount"+scrollAmount);
		// console.log("scroll percent "+scrollPercent+"%");
		// console.log("screen height"+progress.screenh)

		//blank out the text if above the first h2 tag
		if(scrollAmount <= $('h2:first').position().top){
			$('.scrollWrapper h3').text('');
		}

		//everytime it passes an h2 it grabs it's text
		$('h2').each(function() {
			if(scrollAmount + progress.headHeight >= $(this).position().top){
				var text = $(this).text();
	    		$('.scrollWrapper h3').text(text);
	    		// console.log("this pos top "+$(this).position().top)
	    		// $('.scroll-bar').toggleClass('orange');
			};
		});


		//calculate scroll amount
	    $('.scroll-bar').css('width', scrollPercent+'%' );
	    // $('.scroll-bar').css('opacity', scrollPercent/100 );
	    if( scrollAmount >= progress.targetScroll){
	    	$('.scrollWrapper').removeClass('hidden');
		} else {
			$('.scrollWrapper').addClass('hidden');
		};
	 
	}); //end window scroll

	var $el = $('.scroll-bar').css(settings); 
	return $el;
// });
}