let numberCircles = 25
let diameter = 25;
let xBegin = 0;
let yBegin = 0;
let color1 =[220,80,90,];
let color2 = [ 90,90,220,20];
let x = diameter;
let y = diameter;
let counter = 0
let rotationVal = 0;
//let x2 = x+x;

function setup() {
  createCanvas(900, 900);
//noStroke();
}

function draw() {
  //background(220);

  for(let i = 0; i < numberCircles; i++){
    for (let j = 0; j < numberCircles; j++){
      
 let x = diameter*i;
let y = diameter*j;
    
      if(i%2==0){
        rotationVal = PI;
        addX =diameter/2
        
      }else {
        rotationVal = 0;
        addX=0
      }
          if(j%2==0){
        rotationVal = rotationVal+PI/2;
            
      }else {
        rotationVal = rotationVal + PI*2;
        
      }
      
 x = x+addX+counter/50;     
     
push();
    
  translate(x,y);
 
  
  rotate(rotationVal+counter/100+PI);
      rotate(counter);
    
  translate(-350,-350);
  

   fill(color1);
  arc(x, y,diameter,diameter,0,PI);
  fill(color2);
  arc(x, y,diameter,diameter,PI, TWO_PI);
    pop();
    
    }
    
  }
  
    /*push(); 
  scale(1.3);
   fill(color1);
  arc(diameter*3, diameter*3,diameter,diameter,0,PI);
  fill(color2);
  arc(diameter*3, diameter*3,diameter,diameter,PI, TWO_PI);*/
  counter+=0.01;
}