


let counter = 0;

function setup() {
  createCanvas(400, 400);
  
  
  
}

function draw() {
  background(220);
 
  
  let angle = counter;
  
  let x = counter;
  let y1 = sin(angle*0.1) * 10;
  let y2 = cos(angle*0.1) * 10;
  y1 = y1 +200;
  y2 = y2 +200;
  
  if (x > width){counter = 0}
  
  fill("red");
      ellipse(x, y1, 50);

 
  fill("red");
      ellipse(x, y2, 50);
counter++
}