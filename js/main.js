var theme = "light";

function getThemeFromCookie(){
	if(Cookies.get('theme')){
		theme = Cookies.get('theme');
	}
}

function getNavColorFromCookie(){
	if(Modernizr.csstransitions){
		var navColor = Cookies.get('navColor');
		if(navColor){
			$(".navbar").removeClass("transition");
			$(".navbar").css('background-color', navColor);
			setTimeout(function(){ $(".navbar").addClass("transition");}, 0);
		}
		else{
			randomizeNavColor();
		}
	}
	else{
		randomizeNavColor();	
	}
}

function toggleTheme(){

		if(theme == "light"){
			theme = "dark";
		}
		else{
			theme = "light";	
		}
		
		doThemeCss();
		$(".navbar").removeClass("transition");
		$(".random-color").removeClass("transition");
		randomizeNavColor();
		setTimeout(function(){ $(".navbar").addClass("transition"); $(".random-color").addClass("transition");}, 0);
		setRandomBackground();
		
		Cookies.set('theme', theme);
}

function randomizeNavColor(){
	
	var bgLetters;
	var fgLetters;
	
	if(theme == "light"){
		bgLetters = 'ABCDEF'.split('');
		fgLetters = '0123456789'.split('');
	}
	else{
		bgLetters = '0123456789'.split('');
		fgLetters = 'ABCDEF'.split('');
	}
	var bgColor = '#';
	for (var i = 0; i < 6; i++ ) {
		bgColor += bgLetters[Math.floor(Math.random() * bgLetters.length)];
	}
	$(".navbar").css('background-color', bgColor);
	
	$( ".random-color" ).each(function( index ) {
	
		var fgColor = '#';
		for (var i = 0; i < 6; i++ ) {
			fgColor += fgLetters[Math.floor(Math.random() * fgLetters.length)];
		}
		$(this).css('color', fgColor);
	});
	
	Cookies.set('navColor', bgColor);
}





function doThemeCss(){
	
	if("dark" == theme){
		//$(".dark-css").removeAttr('disabled');
		$(".dark-css").prop('disabled', false);
		$(".light-css").prop('disabled', true);
		$("#favicon").attr("href", "/images/faviconDark.png");
	}
	else{
		//$(".light-css").removeAttr('disabled');
		$(".light-css").prop('disabled', false);
		$(".dark-css").prop('disabled', true);
		$("#favicon").attr("href", "/images/favicon.png");
	}	
}

getThemeFromCookie();
doThemeCss();
$(getNavColorFromCookie);
$(setRandomBackground);
if(Modernizr.csstransitions){
	setInterval(randomizeNavColor,10000);
}
