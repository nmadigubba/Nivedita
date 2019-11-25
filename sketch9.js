


let counter = 0;

function setup() {
  createCanvas(900, 400);
  
  
  
}

function draw() {
  background("white");
 
  
  let angle = counter;
  
  let x = counter;
  let y1 = sin(angle*0.1) * 70;
  let y2 = cos(angle*0.1) * 190;
  let y3 = cos(angle*0.1) * 150;
  y1 = y1 +250;
  y2 = y2 +200;
   y3 = y3 +150;
  
  if (x > width){counter = 0}
  
  fill("orange");
      ellipse(x, y1, 70);

 
  fill("green");
      ellipse(x, y2, 70);
  
  
  fill("white");
      ellipse(x, y3, 70);
counter++
}
