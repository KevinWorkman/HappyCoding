void setup() {
  size(200, 200);
}
 
void keyPressed(){
  saveFrame("circles-1-light.png");
}

void draw() {
  noStroke();
  
  float x = random(width);
  float y = random(height);
  
  for(int size = 30; size >= 0; size--){
    fill(random(224, 256));
    ellipse(x, y, size, size);
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
 
 