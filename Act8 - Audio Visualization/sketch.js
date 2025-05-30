let music, fft;
let numPoints = 128;
let hueShift = 0;

function preload() {
  // Replace with your own file name or path
  music = loadSound('IYAZ - Replay Instrumental.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);

  fft = new p5.FFT();
  fft.setInput(music);

  // Start the music loop
  music.loop();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  // Increment hue for animation
  hueShift = (hueShift + 1) % 360;

  // Draw center circle with rainbow fill
  fill(hueShift, 100, 100); // animated rainbow fill
  noStroke();
  ellipse(0, 0, 190, 190);

  // Text in the center with spinning
  push();
  rotate(radians(frameCount*50)); // rotate based on frame count
  fill(0); 
  textAlign(CENTER, CENTER);
  textSize(30); 
  text("Bath Spa", 0, 0);
  pop();

  // Get audio spectrum
  let spectrum = fft.analyze();

  // Outer pulse rainbow ring
  stroke(hueShift, 100, 100);
  strokeWeight(5);
  noFill();

  beginShape();
  for (let i = 0; i < numPoints; i++) {
    let angle = map(i, 0, numPoints, 0, 360);
    let freqIndex = floor(map(i, 0, numPoints, 0, spectrum.length));
    let amp = spectrum[freqIndex];
    let radius = map(amp, 0, 255, 100, 200);

    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    curveVertex(x, y);
  }
  endShape(CLOSE);
}

function mousePressed() {
    if (music.isPlaying()) {
      music.pause();
    } else {
      music.loop();
    }
  }