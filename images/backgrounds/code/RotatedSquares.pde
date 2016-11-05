void setup() {
  size(200, 200);
  rectMode(CENTER);
}

void keyPressed() {
  saveFrame("rotated-squares-1-dark.png");
}

void draw() {
  noStroke();
  fill(random(0, 16));

  float baseX = random(width);
  float baseY = random(height);
  float rotation = random(radians(360));
  float length = random(10, 30);
  
  for (int yOffset = -1; yOffset <= 1; yOffset++) {
    for (int xOffset = -1; xOffset <= 1; xOffset++) {
      pushMatrix();
      translate(baseX+xOffset*width, baseY + yOffset*height);
      rotate(rotation);
      rect(0, 0, length, length);
      popMatrix();
    }
  }
}