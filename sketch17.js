// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/akM4wMZIBWg



var globe;
var total = 15;

var offset = 0;

var m = 0;
var mchange = 0;
var a = 1;
var b = 1;


function setup() {
  createCanvas(600, 600, WEBGL);
  colorMode(HSB);
  globe = new Array((total+1)*(total+1));
}


function supershape( theta,  m,  n1,  n2,  n3) {
  var t1 = abs((1/a)*cos(m * theta / 4));
  t1 = pow(t1, n2);
  var t2 = abs((1/b)*sin(m * theta/4));
  t2 = pow(t2, n3);
  var t3 = t1 + t2;
  var r = pow(t3, - 1 / n1);
  return r;
}

function draw() {
  
  m = map(sin(mchange), -1, 1, 0, 7);
  mchange += 0.05;
  rotateX(mchange);
  background(51);
  noStroke();
  lights();
  var r = 200;
  for (var i = 0; i < total+1; i++) {
    var lat = map(i, 0, total, -HALF_PI, HALF_PI);
    var r2 = supershape(lat, m, 1,1,1);
    //var r2 = supershape(lat, 2, 10, 10, 10);
    for (var j = 0; j < total+1; j++) {
      var lon = map(j, 0, total, -PI, PI);
      var r1 = supershape(lon, m, 0.04, 1.7, 1.7);
      //var r1 = supershape(lon, 8, 60, 100, 30);
      var x = r * r1 * cos(lon) * r2 * cos(lat);
      var y = r * r1 * sin(lon) * r2 * cos(lat);
      var z = r * r2 * sin(lat);
      var index = (i+j*(total+1));
      globe[index] = new createVector(x, y, z);
    }
  }

 stroke(155,25,69);
  strokeWeight(2);
  //fill(155);
  //noFill();
  offset += 5;
  for (var h = 0; h < total; h++) {
    var hu = map(i, 0, total, 0, 125*3);
    fill((hu + offset) % 255 , 255, 255);
    
    for (var k = 0; k < total+1; k++) {
        var index1 = (h+k*(total+1));
      var v1 = globe[index1];
      
      var index2 = ((h+1)+k*(total+1));
      var v2 = globe[index2];
     
      push();
      translate(v1.x,v1.y,v1.z);
      box(30);
     pop();
      
      
    }
    
  }
}
