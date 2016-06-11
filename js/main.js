function setupThemeChooser(){
  
  console.log("setupThemeChooser");
  
  $('#themeChooser').append(new Option("dark", "dark"));
  $('#themeChooser').append(new Option("light", "light"));
  
  if(Cookies.get('theme')){
    console.log("theme: " + Cookies.get('theme'));
    $('#themeChooser').val(Cookies.get('theme'));
  }
  
  $('#themeChooser').on('change', function() {
  
    var theme	= $('#themeChooser').val();
    
    Cookies.set('theme', theme);
    
    if("dark" == theme){
      $("#bootstrapCss").attr("href", "/css/bootstrap.cyborg.css");
    }
    else{
      $("#bootstrapCss").attr("href", "/css/bootstrap.css");
    }
  });
}

$(setupThemeChooser);
