let shapeSize = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop(); 
}

function draw() {
  background(252, 242, 53);

  for (let x = shapeSize / 2; x < width; x += shapeSize) {
    for (let y = shapeSize / 2; y < height; y += shapeSize) {

      if ((int(x / shapeSize) + int(y / shapeSize)) % 2 === 0) {
        let r = random(0,255);
        let g = random(0,255);
        let b = random(240,255);
        fill(r,g,b);
        
        // Draw Diamond
        push();
        translate(x, y);
        rotate(PI / 4);
        rect(0, 0, shapeSize * 0.8, shapeSize * 0.8);
        pop();
      } else {
        // Draw Circle
        fill(255, 0, 0);
        ellipse(x, y, shapeSize * 0.8);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
