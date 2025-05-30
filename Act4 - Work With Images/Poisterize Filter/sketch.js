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
background(0);
image(img, 0, 0);
var v = map(mouseX, 0, width, 2, 20);
filter(POSTERIZE, v);
}