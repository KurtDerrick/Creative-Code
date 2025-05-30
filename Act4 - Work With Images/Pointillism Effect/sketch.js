var img, x, y;
function preload() {
img = loadImage("Frame 26.png");
}

function setup() {
createCanvas (189,182);
background(0);
noStroke();
}

function draw() {
x = random(width);
y = random(height);
var c = img.get(x, y);

fill(c[0], c[1], c[2], 50); 
ellipse (x, y, 10,10);
}