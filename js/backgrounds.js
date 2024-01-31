const backgrounds = [
  {img: "diagonal-lines-black.png", code: "https://editor.p5js.org/KevinWorkman/sketches/IkburmYPS"},
  {img: "diagonal-lines-green-blue.png", code: "https://editor.p5js.org/KevinWorkman/sketches/IkburmYPS"},
  {img: "diagonal-lines-gray.png", code: "https://editor.p5js.org/KevinWorkman/sketches/IkburmYPS"},
  {img: "diagonal-lines-rgb.png", code: "https://editor.p5js.org/KevinWorkman/sketches/IkburmYPS"},

  {img: "vertical-lines-rgb.png", code: "https://editor.p5js.org/KevinWorkman/sketches/VaUz-dp0o"},

  {img: "random-walker-blue.png", code: "https://editor.p5js.org/KevinWorkman/sketches/WaDzOi85M"},
  {img: "random-walker-black.png", code: "https://editor.p5js.org/KevinWorkman/sketches/WaDzOi85M"},
  {img: "random-walker-gray.png", code: "https://editor.p5js.org/KevinWorkman/sketches/WaDzOi85M"},
  {img: "random-walker-green-blue.png", code: "https://editor.p5js.org/KevinWorkman/sketches/WaDzOi85M"},
  {img: "random-walker-red-blue.png", code: "https://editor.p5js.org/KevinWorkman/sketches/WaDzOi85M"},
  {img: "random-walker-rgb.png", code: "https://editor.p5js.org/KevinWorkman/sketches/WaDzOi85M"},
];

const backgroundObj = backgrounds[Math.floor(Math.random()*backgrounds.length)];

function setRandomBackground(){
	const backgroundUrl = "/images/backgrounds/" + backgroundObj.img;

	document.getElementsByTagName("body")[0].style.backgroundImage = "url(" + backgroundUrl + ")";
	document.getElementById('background-link').innerHTML = "Like the background? Check out its <a href='" + backgroundObj.code + "'>source code</a> or <a href='https://github.com/KevinWorkman/HappyCoding/wiki/Contributing-Backgrounds'>contribute your own background</a>!";
}
