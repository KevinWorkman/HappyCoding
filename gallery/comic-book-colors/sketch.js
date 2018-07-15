var comicName = 'invincible';
var averagesImage;
var thumbnails = [];

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");
  loadComic();
  windowResized();
  noLoop();
}

function draw() {
  background(32);
  stroke(255);
  fill(255);
  textSize(36);
  text("Loading...", width*.25, height/2);
	
  image(averagesImage, 0, 0, width, height);

  drawThumbnails();
}

function drawThumbnails(){
	thumbnails.forEach( (thumbImage, index) => {
			const cellIndexX = index % 10;
			const cellIndexY = int(index / 10);
			const cellWidth = width / 10;
			const cellHeight = height / 10;
			const cellX = cellIndexX * cellWidth;
			const cellY = cellIndexY * cellHeight;
			
			image(thumbnails[index], cellX, cellY, cellWidth, cellHeight);
	}  );
}

function mousePressed(){
	
	if(mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height){
		return true;
	}
	
	const cellWidth = width / 10;
	const cellHeight = height / 10;
	const cellX = int(mouseX/cellWidth);
	const cellY = int(mouseY/cellHeight);
	const thumbnailIndex = cellY * 10 + cellX;

	if(thumbnails[thumbnailIndex]){
	  delete thumbnails[thumbnailIndex];
	}
	else{
	  thumbnails[thumbnailIndex] = loadImage('http://s3.happycoding.io/gallery/comic-book-colors/images/comics/' + comicName + '/thumbnails/' + comicName + '-thumbnail-' + thumbnailIndex.toString().padStart(3, '0') + '.png', redraw);
	}
	redraw();
	return false;
}

function windowResized(){
  var sketchHolder = select('#sketch-holder').elt;
  resizeCanvas(sketchHolder.clientWidth, sketchHolder.clientWidth * 1.5);
}

function loadComic(){
	averagesImage = loadImage('http://s3.happycoding.io/gallery/comic-book-colors/images/comics/' + comicName + '/' + comicName + '-averages-1.png', redraw);
	
	select('#line-clusters').elt.src = 'http://s3.happycoding.io/gallery/comic-book-colors/images/comics/' + comicName + '/' + comicName + '-line-clusters-1.png';
	
	select('#name').html(comics.get(comicName).title);
}

function setComic(comic){
	comicName = comic;
	thumbnails = [];
	loadComic();
	redraw();
}