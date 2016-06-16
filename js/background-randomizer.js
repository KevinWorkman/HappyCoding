var lightBackgrounds = [
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/confectionary.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/symphony.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/swirl_pattern.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry2.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/tree_bark.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dimension.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/brickwall.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/pw_maze_white.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/noisy_grid.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/ignasi_pattern_s.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/swirl.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/back_pattern.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/strange_bullseyes.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/gplaypattern.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/hexellence.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/arab_tile.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/old_mathematics.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/bright_squares.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/cubes.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/batthern.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/connect.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/cutcube.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/grey_sandbag.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/sayagata-400px.png"
];

var darkBackgrounds = [
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/footer_lodyas.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/congruent_outline.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/stardust.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/binding_dark.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/zwartevilt.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/simple_dashed.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/moulin.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dark_exa.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/escheresque_ste.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/pw_maze_black.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/wild_oliva.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/hexabump.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/subtle_carbon.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/asfalt.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/use_your_illusion.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/woven.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/triangles.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/robots.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dark_mosaic.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/inflicted.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/crissXcross.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/rubber_grip.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/squares.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dark_circles.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dark_wood.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/carbon_fibre_big.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/diagmonds.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/px_by_Gre3g.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/hixs_pattern_evolution.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dark_geometric.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/bo_play_pattern.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/tasky_pattern.png",
	"http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/cartographer.png"
];

function setRandomBackground(){
	var selectedTheme = $('#themeChooser').val();
	
	var backgroundUrl;
	
	if("dark" == selectedTheme){
		backgroundUrl = darkBackgrounds[Math.floor(Math.random()*darkBackgrounds.length)];
	}
	else{
		backgroundUrl = lightBackgrounds[Math.floor(Math.random()*lightBackgrounds.length)];
	}
	
	$("body").css("background", "url(" + backgroundUrl + ")");
}

$(setRandomBackground);
