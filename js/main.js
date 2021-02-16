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
	{img: "worms-2", code: "Worms.pde"}
];

const backgroundObj = backgrounds[Math.floor(Math.random()*backgrounds.length)];

function setRandomBackground(){
	const backgroundUrl = "/images/backgrounds/" + backgroundObj.img + "-light.png";
	
	document.getElementsByTagName("body")[0].style.backgroundImage = "url(" + backgroundUrl + ")";
	document.querySelector("#background-link").innerHTML = "Like the background? Check out its <a href='/images/backgrounds/code/" + backgroundObj.code + "'>source code</a> or <a href='https://github.com/KevinWorkman/HappyCoding/wiki/Contributing-Backgrounds'>contribute your own background</a>!";
}

function randomizeNavColor(){
  const bgColor = 'rgb(' +
      randomInt(200, 255) + ', ' +
      randomInt(200, 255) + ', ' +
      randomInt(200, 255) + ')';
  document.getElementsByTagName("nav")[0].style.backgroundColor = bgColor;

  Array.from(document.querySelectorAll( ".random-color" )).forEach(el => {
    const fgColor = 'rgb(' +
        randomInt(0, 50) + ', ' +
        randomInt(0, 50) + ', ' +
        randomInt(0, 50) + ')';
    el.style.color = fgColor;
  });
}

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max-min));
}

function setRandomSocialLink() {
  let href;
  let src;
  let alt;
  const r = Math.random();
  if (r < .2) {
    alt = 'twitter';
    href = 'https://twitter.com/KevinAWorkman';
    src = '/images/twitter.png';
  } else if (r < .4) {
    alt = 'facebook';
    href = 'http://www.facebook.com/HappyCoding.io';
    src = '/images/facebook.png';
  } else if (r < .6) {
    alt = 'github';
    href = 'https://github.com/KevinWorkman/HappyCoding';
    src = '/images/GitHub-Mark-32px.png';
  } else if (r < .8) {
    alt = 'etsy';
    href = 'https://www.etsy.com/shop/HappyCoding';
    src = '/images/etsy.png';
  } else {
    alt = 'youtube';
    href = 'https://youtube.com/kevinaworkman';
    src = '/images/youtube.png';
  }

  const aElement = document.getElementById('social-nav-link');
  const imgElement = document.getElementById('social-nav-img');

  aElement.href = href;
  imgElement.src = src;
  imgElement.alt = alt;
}

window.onload = function() {
  setRandomBackground();
}

if(Modernizr.csstransitions){
	setInterval(randomizeNavColor, 10000);
}
