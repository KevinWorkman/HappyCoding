$('#themeChooser').append(new Option("light", "light"));
$('#themeChooser').append(new Option("dark", "dark"));

$('#themeChooser').on('change', function() {

  var fileName	= $('#themeChooser').val();
  if("Default Theme" == fileName){
    $("#bootstrapCss").attr("href", "css/themes/bootstrap.default.min.css");
  }
  else{
    $("#bootstrapCss").attr("href", "css/themes/bootstrap." + fileName + ".min.css");
  }
});
