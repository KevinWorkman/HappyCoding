const backgrounds = [
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
	{img: "squares-3", code: "Square.pde"},
	{img: "squares-nested-1", code: "NestedSquares.pde"},
	{img: "worms-1", code: "Worms.pde"},
	{img: "worms-2", code: "Worms.pde"},
	{img:"retro",code:"retro.pde"},
   	{img:"bug",code:"bug.pde"}
];

const backgroundObj = backgrounds[Math.floor(Math.random()*backgrounds.length)];

function setRandomBackground(){
	const backgroundUrl = "/images/backgrounds/" + backgroundObj.img + "-light.png";
	
	document.getElementsByTagName("body")[0].style.backgroundImage = "url(" + backgroundUrl + ")";
	document.querySelector("#background-link").innerHTML = "View the code that generated the background <a href='/images/backgrounds/code/" + backgroundObj.code + "'>here</a>. Learn how to contribute your own background <a href='https://github.com/KevinWorkman/HappyCoding/wiki/Contributing-Backgrounds'>here</a>.";
}

function randomizeNavColor(){
  const bgLetters = 'ABCDEF'.split('');
  const fgLetters = '0123456789'.split('');
	let bgColor = '#';
	for (var i = 0; i < 6; i++ ) {
		bgColor += bgLetters[Math.floor(Math.random() * bgLetters.length)];
	}
	document.getElementsByTagName("nav")[0].style.backgroundColor = bgColor;
	
	Array.from(document.querySelectorAll( ".random-color" )).forEach(el => {
		var fgColor = '#';
		for (var i = 0; i < 6; i++ ) {
			fgColor += fgLetters[Math.floor(Math.random() * fgLetters.length)];
		}
		el.style.color = fgColor;
	});
}

window.onload = function(){
  setRandomBackground();
}

if(Modernizr.csstransitions){
	setInterval(randomizeNavColor, 10000);
}
