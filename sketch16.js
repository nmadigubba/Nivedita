
function setup() {
  createCanvas(900, 900);
  background(255, 191, 0);
drawCircle(width/2,height/2, 400);
  

}

function drawCircle(x,y,r) {
  fill(20, random(80), random(80));
  ellipse(x,y,r);
  
  //r*=random(0.9,0.99);
  r*=0.5;
 
  
  if(r>2){
  drawCircle(x/r,y,r);
     drawCircle(x-r,y,r);
     drawCircle(x,y-r,r);
     drawCircle(x,y+r,r);
  }
}