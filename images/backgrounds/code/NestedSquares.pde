void setup() {
  size(160, 160);
  noStroke();
}

void keyPressed() {
  save("squares-nested-"+frameCount+"-light.png");
}

void draw() {
  translate(width/2, height/2);
  nestingRect(0, 0, width, 10, 4);
}

void nestingRect(float x, float y, float w, float min, float dim) {
  fill(random(224, 256)); 
  rect(x-w/2, y-w/2, w, w);
  if(w>min) {
    nestingRect(x-w/4.0, y-w/4.0, w/2.0-dim, min, dim);
    nestingRect(x+w/4.0, y-w/4.0, w/2.0-dim, min, dim);
    nestingRect(x-w/4.0, y+w/4.0, w/2.0-dim, min, dim);
    nestingRect(x+w/4.0, y+w/4.0, w/2.0-dim, min, dim);
  }
}
