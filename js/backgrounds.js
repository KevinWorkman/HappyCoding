const backgrounds = [
  {img: "diagonal-lines-blue-green.png", code: "https://editor.p5js.org/KevinWorkman/sketches/IkburmYPS"},
  {img: "diagonal-lines-dark.png", code: "https://editor.p5js.org/KevinWorkman/sketches/IkburmYPS"},
  {img: "diagonal-lines-gray.png", code: "https://editor.p5js.org/KevinWorkman/sketches/IkburmYPS"},
  {img: "diagonal-lines-rgb.png", code: "https://editor.p5js.org/KevinWorkman/sketches/IkburmYPS"},
	{img: "vertical-lines-rgb.png", code: "https://editor.p5js.org/KevinWorkman/sketches/VaUz-dp0o"},
  {img: "random-walker-rgb.png", code: "https://editor.p5js.org/KevinWorkman/sketches/WaDzOi85M"},
];

const backgroundObj = backgrounds[Math.floor(Math.random()*backgrounds.length)];

function setRandomBackground(){
	const backgroundUrl = "/images/backgrounds/" + backgroundObj.img;

	document.getElementsByTagName("body")[0].style.backgroundImage = "url(" + backgroundUrl + ")";
	// document.querySelector("#background-link").innerHTML = "Like the background? Check out its <a href='/images/backgrounds/code/" + backgroundObj.code + "'>source code</a> or <a href='https://github.com/KevinWorkman/HappyCoding/wiki/Contributing-Backgrounds'>contribute your own background</a>!";
}
