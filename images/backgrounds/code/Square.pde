void setup(){
  size(100, 100);
  noStroke();
}

void keyPressed(){
  save("squares-2-dark.png");
}

void draw(){
 
  for(int offset = width/2; offset >= 0; offset--){
   fill(random(0, 32)); 
    rect(width/2-offset, height/2-offset, offset*2, offset*2);
  }
  
}