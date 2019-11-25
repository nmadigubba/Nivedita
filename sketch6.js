

function setup() {
  createCanvas(800, 800);
   
 frameRate(5);
  
  
}


function draw() {
   background(random(45,255),random(45,150),0);
   strokeWeight(1);
  stroke(random(120,255), 120,80);
  
   for(let i=0; i < 8; i++) {
  
    
  
    for(let j=0; j < 9; j++){
  Triangle(190*i-random(-20,30), 140*j+random(-30,145));
 
}
   }
 
}
function Triangle(cSizeX, cSizeY){
  
  

   strokeWeight(1);
  stroke(random(120,255), 120,80);
  fill(random(80,255), random(90,300),70);
   beginShape();
  vertex(cSizeX+100,cSizeY+10+random(0,60));
  vertex(cSizeX,cSizeY+110);
 vertex(cSizeX+200,cSizeY+110);
   endShape(CLOSE);
  
  strokeWeight(1);
  stroke(random(20,255), 120,80);
  fill(random(8,80), random(80,129),70);
   beginShape();
  vertex(cSizeX,cSizeY+50);
  vertex(cSizeX+200,cSizeY+50);
  vertex(cSizeX+100,cSizeY+150+random(0,10));
   endShape(CLOSE);
  

   
  
}