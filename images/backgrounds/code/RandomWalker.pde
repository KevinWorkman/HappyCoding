float x = 100;
float y = 100;
float c = 16;

void setup() {
  size(200, 200);
  background(0);
  frameRate(1000);
}

void keyPressed() {
  saveFrame("random-walker-1-dark.png");
}

void draw() {

  x += random(-1, 1);
  y += random(-1, 1);
  c += random(-1, 1);
  c = constrain(c, 0, 32);

  if (x < 0) {
    x = width;
  }
  if (x > width) {
    x = 0;
  }
  if (y < 0) {
    y = height;
  }
  if (y > height) {
    y = 0;
  }

  stroke(c);
  point(x, y);
}

void point(float x, float y) {
  for (int yOffset = -1; yOffset <= 1; yOffset++) {
    for (int xOffset = -1; xOffset <= 1; xOffset++) {
      super.point(x+xOffset*width, y+yOffset*height);
    }
  }
}

void ellipse(float x, float y, float w, float h) {
  for (int yOffset = -1; yOffset <= 1; yOffset++) {
    for (int xOffset = -1; xOffset <= 1; xOffset++) {
      super.ellipse(x+xOffset*width, y+yOffset*height, w, h);
    }
  }
}

void rect(float x, float y, float w, float h) {
  for (int yOffset = -1; yOffset <= 1; yOffset++) {
    for (int xOffset = -1; xOffset <= 1; xOffset++) {
      super.rect(x+xOffset*width, y+yOffset*height, w, h);
    }
  }
}