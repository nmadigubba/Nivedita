
let counter = 0;
let angle = 0;
let numColors = 2;
let colors = [[110,90,90],[90,190,190]];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background("orange");
 // myShape();
  
  for(let i = 0; i < 10; i++){
   for(let j = 0; j < 10; j++){ 
  push()
  scale(0.5);
    translate(i*190, j*140);
    
    
  myCircle(angle);
  pop()  
  }
    
 
  }
angle++
}


function myCircle(angle){


  fill(colors[int(random(numColors))])
  
  beginShape()
    vertex(100, 40);
  
  for(let i = 0; i < 90; i++){
    
      let radius = 5*random(2,5);
      let x = sin(angle/100*i) * radius;
      let y = cos(angle/100*i) * radius;
     
     vertex(x+200, y+200); 
  }
 
  
  endShape(CLOSE);


}







function myShape(){

  fill(colors[int(random(numColors))])
  
  beginShape()
    vertex(100,40);
for(let i = 0; i < 9; i++){
  
 vertex(random(100,300), random(100,300)); 
}
  
  endShape(CLOSE);
  
    


}