var backgrounds = [
	{img: "circles-1", code: "Circles.pde"},
	{img: "diamond-circles-1", code: "DiamondCircles.pde"},
	{img: "diamond-circles-2", code: "DiamondCircles.pde"},
	{img: "diamond-circles-3", code: "DiamondCircles.pde"},
	{img: "diamonds-1", code: "Diamonds.pde"},
	{img: "diamonds-2", code: "Diamonds.pde"},
	{img: "diagonal-1", code: "Diagonal.pde"},
	{img: "diagonal-2", code: "Diagonal.pde"},
	{img: "lines-1", code: "Lines.pde"},
	{img: "random-walker-1", code: "RandomWalker.pde"},
	{img: "rotated-squares-1", code: "RotatedSquares.pde"},
	{img: "rotating-lines-1", code: "RotatingLines.pde"},
	{img: "rotating-lines-2", code: "RotatingLines.pde"},
	{img: "squares-1", code: "Squares.pde"},
	{img: "squares-2", code: "Square.pde"},
	{img: "squares-3", code: "Square.pde"}
];

var backgroundObj = backgrounds[Math.floor(Math.random()*backgrounds.length)];

function setRandomBackground(){
	
	var backgroundUrl;
	
	if("dark" == theme){
		backgroundUrl = "/images/backgrounds/" + backgroundObj.img + "-dark.png"; 
	}
	else{
		backgroundUrl = "/images/backgrounds/" + backgroundObj.img + "-light.png"; 
	}
	
	$("body").css("background-image", "url(" + backgroundUrl + ")");
	$("#background-link").html("View the code that generated the background <a href='/images/backgrounds/code/" + backgroundObj.code + "'>here</a>. Learn how to contribute your own background <a href='https://github.com/KevinWorkman/HappyCoding/wiki/Contributing-Backgrounds'>here</a>.");
}
