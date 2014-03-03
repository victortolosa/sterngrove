/* Check Scroll for Nav minify */
$(window).scroll(function(){
	var coverHeight = $(".cover").height();
	var fromTop = $(window).scrollTop();
	var navLimit = coverHeight - 300;
	if ( fromTop > navLimit ){
		$('nav').addClass('navbg');

	} else {
		$('nav').removeClass('navbg');
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
