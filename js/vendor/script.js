/* Check Scroll for Nav minify */
$(window).scroll(function(){
	var coverHeight = $(".cover").height();
	var fromTop = $(window).scrollTop();
	var navLimit = coverHeight - 300;
	if ( fromTop > navLimit ){
		$('nav').addClass('navbg');
		$('.logo').addClass('logo-bp');
		$('ul.logo-type').css ({width: 300});
		$('ul.logo-type li').css({
			"font-size": "26px",
			"float": "left",
			"padding-right": "5px",
			"padding-top": "5px"
		});
	} else {
		$('nav').removeClass('navbg');
		$('.logo').removeClass('logo-bp');
		$('ul.logo-type').css ({width: 100});
		$('ul.logo-type li').css({
			"font-size": "40px",
			"padding-right": "5px",
			"padding-top": "0"
		});
	}
});
