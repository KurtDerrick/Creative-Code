function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 235);

  let carX = width * 0.25;
  let carY = height * 0.5;
  let carWidth = width * 0.5;
  let carHeight = height * 0.1;
  let roofWidth = carWidth * 0.75;
  let roofHeight = carHeight * 0.75;

  // Car body
  fill(200, 0, 0);
  rect(carX, carY, carWidth, carHeight); // Body
  rect(carX + (carWidth - roofWidth) / 2, carY - roofHeight, roofWidth, roofHeight); // Roof

  // Windows
  fill(46, 45, 45);
  rect(carX + carWidth * 0.2, carY - roofHeight + 5, roofWidth * 0.3, roofHeight - 10);
  rect(carX + carWidth * 0.5, carY - roofHeight + 5, roofWidth * 0.3, roofHeight - 10);

  // Road
  fill(61, 61, 60);
  rect(0, carY + carHeight, width, height - (carY + carHeight));
  
  // Road lines
  fill(214, 214, 58);
  let lineWidth = width * 0.075;
  let lineHeight = height * 0.02;
  let lineY = carY + carHeight + height * 0.07;
  for (let i = 0; i < width; i += width * 0.15) {
    rect(i + 10, lineY, lineWidth, lineHeight);
  }

  // Wheels
  fill(0);
  let wheelDiameter = carHeight * 1.2;
  ellipse(carX + carWidth * 0.2, carY + carHeight, wheelDiameter, wheelDiameter);
  ellipse(carX + carWidth * 0.8, carY + carHeight, wheelDiameter, wheelDiameter);
}