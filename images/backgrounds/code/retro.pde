void setup() {
  size(30, 30);
  noStroke();
}

void keyPressed() {
  save("retro"+"-light.png");
}

void draw() {
  translate(width/2, height/2);

 for (int i = 0; i < 10; i ++) {
    ellipse(0, 12, 2,12);
    rotate(PI/5);
 }
}