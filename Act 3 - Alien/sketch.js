function setup() {
  createCanvas(400,400);
  background(114,0,255)
}

function draw() {
  fill(189,54,20);
  ellipse(123,185,30,40);
  fill(189,54,20);
  ellipse(272,185,30,40);
  fill(209, 108, 224);
  ellipse(200,200,150,200);
  fill(225,225,225);
  ellipse(200,170,60,30)
  fill(0,0,0);
  ellipse(200,170,30,30);
  fill(500,0,0);
  rect(190,10,20,90);
  beginShape();
  fill(0);
  vertex(135,150);
  bezierVertex(154,119,200,53,267,150);
  vertex(245,150);
  vertex(245,140);
  vertex(155,140);
  vertex(155,150);
  endShape();
  beginShape();
  fill(227, 23, 23);
  vertex(170,260);
  bezierVertex(180,250,190,246,200,260);
  bezierVertex(200,260,210,240,230,260);
  bezierVertex(230,260,202,300,170,260);
  endShape();
  line(170,262,230,262)
}
