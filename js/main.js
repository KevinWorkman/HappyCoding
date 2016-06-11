function setupThemeChooser(){
  $('#themeChooser').append(new Option("light", "light"));
  $('#themeChooser').append(new Option("dark", "dark"));
  
  $('#themeChooser').on('change', function() {
  
    var fileName	= $('#themeChooser').val();
    if("dark" == fileName){
      $("#bootstrapCss").attr("href", "/css/bootstrap.cyborg.css");
    }
    else{
      $("#bootstrapCss").attr("href", "/css/bootstrap.css");
    }
  });
}

$(setupThemeChooser);
