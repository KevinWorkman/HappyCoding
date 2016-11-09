float heading;
float deltaHeading;
float x;
float y;
float speed = 2;
float thickness = 10;

float f = 248;
 
float prevLeftX;
float prevLeftY;
float prevRightX;
float prevRightY;
 
 
void setup() {
  size(200, 200);
  noSmooth();
  frameRate(120);
  background(248);
}
 
void keyPressed(){
  save("worms-2-light.png");
}
 
void draw() {
 
  deltaHeading = randomGaussian()*4 + sin(radians(frameCount))*3;
  heading += deltaHeading;
  
  f += random(-1, 1);
  f = constrain(f, 240, 256);
 
  x += cos(radians(heading))*speed;
  y += sin(radians(heading))*speed;
 
  if (x < 0) {
    x = width;
    prevLeftX += width;
    prevRightX += width;
  }
  if (x > width) {
    x = 0;
    prevLeftX -= width;
    prevRightX -= width;
  }
 
  if (y < 0) {
    y = height;
    prevLeftY += width;
    prevRightY += width;
  }
  if (y > height) {
    y = 0;
    prevLeftY -= width;
    prevRightY -= width;
  }
 
 
  float leftX = x + cos(radians(heading-90))*thickness;
  float leftY = y + sin(radians(heading-90))*thickness;
 
  float rightX = x + cos(radians(heading+90))*thickness;
  float rightY = y + sin(radians(heading+90))*thickness;
 
  noStroke();
  fill(f);
 
 for (int yOffset = -1; yOffset <= 1; yOffset++) {
    for (int xOffset = -1; xOffset <= 1; xOffset++) {
      beginShape();
      vertex(prevLeftX+xOffset*width, prevLeftY+yOffset*height);
      vertex(leftX+xOffset*width, leftY+yOffset*height);
      vertex(rightX+xOffset*width, rightY+yOffset*height);
      vertex(prevRightX+xOffset*width, prevRightY+yOffset*height);
      endShape(CLOSE);
    }
  }
 
 
  //line(leftX, leftY, rightX, rightY);
 
  stroke(224);
  line(prevLeftX, prevLeftY, leftX, leftY);
  line(prevRightX, prevRightY, rightX, rightY);
 
  prevLeftX = leftX;
  prevLeftY = leftY;
  prevRightX = rightX;
  prevRightY = rightY;
}
 
void line(float xOne, float yOne, float xTwo, float yTwo) {
  for (int yOffset = -1; yOffset <= 1; yOffset++) {
    for (int xOffset = -1; xOffset <= 1; xOffset++) {
      super.line(xOne+xOffset*width, yOne+yOffset*height, xTwo+xOffset*width, yTwo+yOffset*height);
    }
  }
}