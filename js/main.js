function setupThemeChooser(){
	
	
	$('#themeChooser').append(new Option("dark", "dark"));
	$('#themeChooser').append(new Option("light", "light"));
	
	if(Cookies.get('theme')){
		$('#themeChooser').val(Cookies.get('theme'));
	}
	
	$('#themeChooser').on('change', function() {
	
		var selectedTheme = $('#themeChooser').val();
		
		console.log("theme: " + selectedTheme);
		
		Cookies.set('theme', selectedTheme);
		
		if("dark" == selectedTheme){
			$("#bootstrap-css").attr("href", "/css/bootstrap.cyborg.css");
			$("#bootstrap-extension-css").attr("href", "/css/bootstrap-extension-dark.css");
			$("#syntax-css").attr("href", "/css/syntax-dark.css");
			$("#favicon").attr("href", "/images/faviconDark.png");
		}
		else{
			$("#bootstrap-css").attr("href", "/css/bootstrap.readable.css");
			$("#bootstrap-extension-css").attr("href", "/css/bootstrap-extension-light.css");
			$("#syntax-css").attr("href", "/css/syntax-light.css");
			$("#favicon").attr("href", "/images/favicon.png");
		}
		
		setRandomBackground();
	});
}

$(setupThemeChooser);
