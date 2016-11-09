float centerX;
float centerY;
float angle;

//use pi/2 for 90 degrees
float deltaAngle = .01;

void setup() {
  size(200, 200);
  noSmooth();
  //background(0);
  frameRate(1000);
}

void keyPressed() {
  saveFrame("rotating-lines-1-dark.png");
}

void draw() {

  //increase this for bigger gaps
  centerX += random(-1, 1);
  centerY += random(-1, 1);

  angle += deltaAngle;

  if (centerX < 0) {
    centerX = width;
  }
  if (centerX > width) {
    centerX = 0;
  }

  if (centerY < 0) {
    centerY = height;
  }
  if (centerY > height) {
    centerY = 0;
  }

  float radius = random(10);

  float xOne = centerX + cos(angle)*radius;
  float yOne = centerY + sin(angle)*radius;

  float xTwo = centerX + cos(angle+PI)*radius;
  float yTwo = centerY + sin(angle+PI)*radius;


  stroke(random(0, 32));
  line(xOne, yOne, xTwo, yTwo);
}

void line(float xOne, float yOne, float xTwo, float yTwo) {
  for (int yOffset = -1; yOffset <= 1; yOffset++) {
    for (int xOffset = -1; xOffset <= 1; xOffset++) {
      super.line(xOne+xOffset*width, yOne+yOffset*height, xTwo+xOffset*width, yTwo+yOffset*height);
    }
  }
}