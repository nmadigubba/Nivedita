let ck;
let playing = false;
let fft, osc;


function preload(){
ck = loadSound('ck.mp3');
}

function setup() {
  createCanvas(400, 400);
    // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(ck);
  fft = new p5.FFT();
}

function draw() {
  background(220);
  
  fill(220,90,80,250);
  rect(mouseX, 0, 2, height);
  
  let speed = map(mouseX, 0.1, width, -2, 2);
  speed = constrain(speed, -2, 2);
  ck.rate(speed);
  
  
  let volume = map(mouseY, height, 0.1, 0.1, 20.0);
  //volume = constrain(volume, 3.0, 0.1);
  console.log(volume);
  ck.setVolume(volume);
  
    // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  
  
  rms = map(rms, 2.0, 0.1, height, 0);
  
  constrain(rms, 50, 255);
  

  
  
  fill(rms*1.5, rms*2/3, rms*5);
  stroke(0);

  // Draw an ellipse with size based on volume
  
  ellipse(mouseX, height / 2, rms*2, rms*2);

  
  console.log(playing);
  
     let waveform = fft.waveform(); // analyze the waveform
  beginShape();
  strokeWeight(1);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
  
  
  
}




function mousePressed(){
if(!playing){
ck.loop();
  playing = true;
} else {

ck.stop();
  playing = false;
}
}