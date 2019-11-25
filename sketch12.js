
numberVertexes = 30;
let radius = 100;
let angle = 0;
let angleVelocity = 0;

function setup() {
  createCanvas(400, 400);
  
   
}
function draw() {
 background(220);
     translate(width/2,height/2);
  beginShape();
  
  for (let i = 0; i <numberVertexes; i ++){
    
     let x = sin(angle) * radius;
  let y =cos(angle)*radius;

  stroke(50);
  strokeWeight(5);
   vertex(x,y);
    angle+=0.09;
  angleVelocity+=1;
    angle+=angleVelocity;
}
  endShape();
  
}


