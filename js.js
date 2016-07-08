$(function(){
	var navItemsCount = $('.nav__list>li').length;
	var navItemWidth = (100/navItemsCount) + '%';
	$('.nav__item').css("width",navItemWidth);
	$(document).scroll(function() {
    	$(this).scrollTop() > 40 ? changeHeader(): resetHeader();
	});	
});


function changeHeader(){
	$('.header__title').css({"font-size": "2em","font-weight":"bold"});
	$('.nav').css({"position":"fixed", "top":"4em", "z-index":"100", "margin": "auto","left":"0", "right":"0"});
}

function resetHeader(){
	$('.header__title').css({"font-size": "4em","font-weight":"300"});
	$('.nav').css({"position":"relative", "top":"105px"});
}