function setupThemeChooser(){
	
	console.log("setupThemeChooser");
	
	$('#themeChooser').append(new Option("dark", "dark"));
	$('#themeChooser').append(new Option("light", "light"));
	
	if(Cookies.get('theme')){
		$('#themeChooser').val(Cookies.get('theme'));
	}
	
	$('#themeChooser').on('change', function() {
	
		var selectedTheme	= $('#themeChooser').val();
		
		Cookies.set('theme', selectedTheme);
		
		if("dark" == selectedTheme){
			$("#bootstrapCss").attr("href", "/css/bootstrap.cyborg.css");
			$("#favicon").attr("href", "/images/faviconDark.png");
		}
		else{
			$("#bootstrapCss").attr("href", "/css/bootstrap.css");
			$("#favicon").attr("href", "/images/favicon.png");
		}
	});
}

$(setupThemeChooser);
