void setup() {
  size(160, 160);
  noStroke();
}

void keyPressed() {
  save("diamonds-1-dark.png");
}

void draw() {

  for (int offset = width; offset >= 0; offset--) {
    fill(random(0, 32)); 

    pushMatrix();
    translate(width/2, height/2);
    rotate(radians(45));
    rect(-offset, -offset, offset*2, offset*2);
    popMatrix();
  }
}