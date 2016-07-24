var theme = "light";
var themeInterval;

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

function setupThemeChooser(){

	$('#themeChooser').append(new Option("dark", "dark"));
	$('#themeChooser').append(new Option("light", "light"));
	$('#themeChooser').val(theme);
	
	$('#themeChooser').on('change', function() {
		theme = $('#themeChooser').val();
		doThemeCss();
		$(".navbar").removeClass("transition");
		randomizeNavColor();
		setTimeout(function(){ $(".navbar").addClass("transition");}, 0);
		setRandomBackground();
		
		Cookies.set('theme', theme);
	});
}

function randomizeNavColor(){
	var letters;
	if(theme == "light"){
		letters = 'ABCDEF'.split('');
	}
	else{
		letters = '0123456789'.split('');
	}
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}
	$(".navbar").css('background-color', color);
	Cookies.set('navColor', color);
}

function doThemeCss(){
	
	if("dark" == theme){
		$(".dark-css").removeAttr('disabled');
		$(".light-css").attr('disabled', 'disabled');
		$("#favicon").attr("href", "/images/faviconDark.png");
	}
	else{
		$(".light-css").removeAttr('disabled');
		$(".dark-css").attr('disabled', 'disabled');
		$("#favicon").attr("href", "/images/favicon.png");
	}	
}

getThemeFromCookie();
doThemeCss();
$(getNavColorFromCookie);
$(setRandomBackground);
$(setupThemeChooser);
if(Modernizr.csstransitions){
	setInterval(randomizeNavColor,10000);
}
