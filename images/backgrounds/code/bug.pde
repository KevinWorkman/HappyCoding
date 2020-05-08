void setup() {
  size(40, 40);
  noStroke();
}

void keyPressed() {
  save("bug"+"-light.png");
}

void draw() {
  translate(width/2, height/2);

 for (int i = 0; i < 10; i ++) {
    ellipse(0, 25, 6,25);
    rotate(PI/5);
 }
}