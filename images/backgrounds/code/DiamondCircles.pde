void setup() {
  size(50, 50);
}
 
void keyPressed(){
  saveFrame("diamond-circles-3-dark.png");
}

void draw() {
  noStroke();
  
  for(int size = 300; size >= 0; size--){
    fill(random(0, 32));
    ellipse(width/2, height/2, size, size);
  }
}
 