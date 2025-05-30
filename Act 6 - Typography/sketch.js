let font;
let points;
let shadowPoints;
let fontSize = 65;
let amplitude = 10;
let frequency = 0.05;
let shadowOffsetX = 5;
let shadowOffsetY = 5;

function preload() {
    font = loadFont('BebasNeue-Regular.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize(fontSize);
    textAlign(CENTER, CENTER);
    centerText();
}

function centerText() {
    let bounds = font.textBounds('Kurt Derrick Calesa', 0, 0, fontSize);
    let x = width / 2 - bounds.w / 2;
    let y = height / 2 + bounds.h / 2;

    points = font.textToPoints('Kurt Derrick Calesa', x, y, fontSize, {
        sampleFactor: 0.2,
        simplifyThreshold: 0
    });

    shadowPoints = font.textToPoints('Kurt Derrick Calesa', x + shadowOffsetX, y + shadowOffsetY, fontSize, {
        sampleFactor: 0.2,
        simplifyThreshold: 0
    });
}

function draw() {
    background("#00bcf0");

    let time = millis() / 1000;

    fill("#303539");
    noStroke();
    for (let pt of shadowPoints) {
        let wave = sin(pt.x * frequency + time) * amplitude;
        ellipse(pt.x, pt.y + wave, 5, 5);
    }

    fill("#ffe556");
    noStroke();
    for (let pt of points) {
        let wave = sin(pt.x * frequency + time) * amplitude;
        ellipse(pt.x, pt.y + wave, 5, 5);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    centerText(); // recalculate positions on resize
}
