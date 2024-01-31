function randomizeNavColor(){
  const bgColor = 'rgb(' +
      randomInt(200, 255) + ', ' +
      randomInt(200, 255) + ', ' +
      randomInt(200, 255) + ')';
  document.getElementsByTagName("nav")[0].style.backgroundColor = bgColor;
}

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max-min));
}

function setRandomSocialLink() {
  let href;
  let src;
  let alt;
  const r = Math.random();
  if (r < .25) {
    alt = 'Mastodon';
    href = 'https://mastodon.art/@KevinWorkman';
    src = '/images/mastodon.svg';
  } else if (r < .5) {
    alt = 'github';
    href = 'https://github.com/KevinWorkman/HappyCoding';
    src = '/images/GitHub-Mark-32px.png';
  } else if (r < .75) {
    alt = 'etsy';
    href = 'https://www.etsy.com/shop/HappyCoding';
    src = '/images/etsy.png';
  } else {
    alt = 'youtube';
    href = 'https://youtube.com/TheKevinWorkman';
    src = '/images/youtube.png';
  }

  const aElement = document.getElementById('social-nav-link');
  const imgElement = document.getElementById('social-nav-img');

  aElement.href = href;
  imgElement.src = src;
  imgElement.alt = alt;
}

function printConsoleGreeting() {
	// Use an ANSI escape code to set the color.
  const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
	const c = '\u001b[38;2;' + r + ';' + g + ';' + b + 'm';

	console.log(c + '█ █  ███');
	console.log(c + '█ █    █');
	console.log(c + '███  ███  ███  ███  █ █');
	console.log(c + '█ █  █ █  █ █  █ █  █ █');
	console.log(c + '█ █  ███  ███  ███  ███');
	console.log(c + '          █    █      █');
	console.log(c + '   ███    █    █    ███          █');
	console.log(c + '   █           █                 █');
	console.log(c + '   █    ███  ███  ███  ███  ███  █');
	console.log(c + '   █    █ █  █ █   █   █ █  █ █');
	console.log(c + '   ███  ███  ███  ███  █ █  ███  █');
	console.log(c + '                              █');
	console.log(c + '                            ███');
	console.log('');
	console.log('If you found this message, come say hi on the Happy Coding forum! https://forum.happycoding.io');
}
printConsoleGreeting();

function load() {
	setRandomBackground();

  if(Modernizr.csstransitions){
  	setInterval(randomizeNavColor, 10000);
  }
}
