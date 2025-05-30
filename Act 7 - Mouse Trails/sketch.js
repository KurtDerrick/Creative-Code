function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  if(keyIsPressed && key === 'r'){
    background(0)
  }
}

function mouseMoved(){
  
  if(keyIsPressed && key === 'e'){
    fill(193,14,14,13);
    noStroke()
    ellipse(mouseX,mouseY, 30,30);
  }
  if(keyIsPressed && key ==='p' && mouseButton === LEFT){
    fill(193,14,14,30);
    stroke(167,12,12);
    rect(mouseX,mouseY,mouseY/5);
  }
}

function mouseDragged(){
  if (mouseButton === LEFT){
    fill(mouseX, mouseY, 255-mouseY);
    stroke(0);
    ellipse(mouseX,mouseY, 30,30)
    ellipse(500-mouseX, mouseY,30,30);
    ellipse(mouseX,500-mouseY,30,30);
    ellipse(500-mouseX,500-mouseY,30,30);
  }
  
  if(keyIsPressed && key ==='p' && mouseButton === LEFT){
    fill(193,14,14,30);
    stroke(167,12,12);
    rect(mouseX,mouseY,mouseY/5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
  redraw()
}