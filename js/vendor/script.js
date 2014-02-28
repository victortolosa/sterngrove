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

/* animated scroll */
$('button').click(function(){
	$('html,body').animate({
		scrollTop: $(".about").offset().top
	}, 800);
});

if( $(window).width() < 900 ){
	$('.navicon').show();
}

$(window).resize( function(){
	if($(window).width() < 900){
	$('.about-content  p').removeClass('half').addClass('full');
	$('.navicon').fadeIn();
	$('.nav-list').hide();
	} else {
	$('.about-content  p').removeClass('full').addClass('half');
	$('.navicon').fadeOut();
	$('.nav-list').show();
	$('.navbg').removeClass("navopen");
	}
});

$('.navicon').on("click",function(){
	$('.nav-list').fadeToggle();
	$('.navbg').toggleClass("navopen");
});
