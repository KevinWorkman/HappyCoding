void setup() {
  size(200, 200);
}
 
void keyPressed(){
  saveFrame("circles-1-dark.png");
}

void draw() {
  noStroke();
  fill(random(0, 64));
  ellipse(random(width), random(height), 30, 30);
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
 
 