function setupThemeChooser(){

	$('#themeChooser').append(new Option("dark", "dark"));
	$('#themeChooser').append(new Option("light", "light"));
	
	if(Cookies.get('theme')){
		$('#themeChooser').val(Cookies.get('theme'));
	}
	
	$('#themeChooser').on('change', function() {
	
		var selectedTheme = $('#themeChooser').val();
		
		Cookies.set('theme', selectedTheme);
		
		if("dark" == selectedTheme){
			$(".dark-css").removeAttr('disabled');
			$(".light-css").attr('disabled', 'disabled');
			$("#favicon").attr("href", "/images/faviconDark.png");
			randomizeNavDark();
		}
		else{
			$(".light-css").removeAttr('disabled');
			$(".dark-css").attr('disabled', 'disabled');
			$("#favicon").attr("href", "/images/favicon.png");
			randomizeNavLight();
		}
		
		setRandomBackground();
	});
}

function randomizeNavLight(){
	var letters = 'ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 6)];
	}
	$(".navbar").css('background-color', color);
}

function randomizeNavDark(){
	var letters = '0123456789'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 10)];
	}
	$(".navbar").css('background-color', color);	
}


$(setupThemeChooser);
