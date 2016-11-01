void setup() {
  size(200, 200);
  noSmooth();
}

void keyPressed() {
  saveFrame("diagonal-1-dark.png");
}

void draw() {

  float x = random(width);
  float y = random(height);
  float hyp = sqrt(width*width + height*height);
  
  stroke(random(0, 32));
  line(x, y, x+hyp, y+hyp); 
}

void line(float xOne, float yOne, float xTwo, float yTwo){
    for (int yOffset = -1; yOffset <= 1; yOffset++) {
    for (int xOffset = -1; xOffset <= 1; xOffset++) {
      super.line(xOne+xOffset*width, yOne+yOffset*height, xTwo+xOffset*width, yTwo+yOffset*height);
    }
  }
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