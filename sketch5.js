function setup() {
  createCanvas(800, 800);
  
  console.log(sqrt(100))
  background(125,20, 0);
 
  equilateralTriangle(100,100);
equilateralTriangle(200,100);
  equilateralTriangle(300,100);
  equilateralTriangle(0,100);
  translate(0,50);
  equilateralTriangle(100,200);
equilateralTriangle(200,200);
  equilateralTriangle(300,200);
  equilateralTriangle(0,200);
   translate(0,50);
   equilateralTriangle(100,300);
equilateralTriangle(200,300);
  equilateralTriangle(300,300);
  equilateralTriangle(0,300);
  
    translate(0,50);
   equilateralTriangle(100,400);
equilateralTriangle(200,400);
  equilateralTriangle(300,400);
  equilateralTriangle(0,400);
  
   translate(0,50);
   equilateralTriangle(100,500);
equilateralTriangle(200,500);
  equilateralTriangle(300,500);
  equilateralTriangle(0,500);
  
   translate(0,50);
   equilateralTriangle(100,600);
equilateralTriangle(200,600);
  equilateralTriangle(300,600);
  equilateralTriangle(0,600);
  
 
  
  
  
}

function draw() {
 
  
  fill(random(200),random(150), 0);
 
  
}

function equilateralTriangle(x,y){
  
  strokeWeight(10);
  stroke(random(120,300), 120,80);
  fill(random(280), random(100,300),70);
   beginShape();
  vertex(x,y);
  vertex(x+100,y);
  vertex(x+150,y- 96.6);
 quadraticVertex(x-100,y-10,x+3000,y+100);
  
 
  endShape(CLOSE);
}

