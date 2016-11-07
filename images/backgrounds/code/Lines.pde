void setup() {
  size(200, 200);
  noSmooth();
  background(0);
}

void keyPressed() {
  saveFrame("lines-1-light.png");
}

void draw() {

  float x = random(width);
  float y = random(height);
  float deltaX = random(100);
  float deltaY = random(100);
  
  stroke(random(224, 256));
  line(x, y, x+deltaX, y+deltaY); 
}

void line(float xOne, float yOne, float xTwo, float yTwo){
    for (int yOffset = -1; yOffset <= 1; yOffset++) {
    for (int xOffset = -1; xOffset <= 1; xOffset++) {
      super.line(xOne+xOffset*width, yOne+yOffset*height, xTwo+xOffset*width, yTwo+yOffset*height);
    }
  }
}