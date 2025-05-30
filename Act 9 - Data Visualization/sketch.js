let genres = [
  "Puzzle", "Casual", "Role Playing", "Simulation", "Strategy", "Action", "Arcade", "Adventure", "Card", "Board"
];
let values = [14.8, 14.6, 11.6, 9.6, 8.9, 8.3, 4.7, 4.4, 4.2, 4.1];
let barColors = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  noLoop();
  background('#b1e6dc');
}

function draw() {
  generateColors();
  drawBarChart();
}

function generateColors() {
  for (let i = 0; i < genres.length; i++) {
    let r = random(200,255);
    let g = random(200,255);
    let b = random(200,255);
    barColors.push(color(r, g, b));
  }
}

function drawBarChart() {
  let barWidth = (width - 100) / genres.length - 10; // Increased bar width
  let startX = 50;
  let startY = height;
  let chartHeight = height - 150; // space for title and labels
  
  // Draw title
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("Top Mobile Game Genre", width / 2, 50);
  
  // Draw bars
  // Draw bars
  for (let i = 0; i < genres.length; i++) {
    let barHeight = map(values[i], 0, max(values), 0, chartHeight - 100);
    let x = startX + i * (barWidth + 10);
    let y = height - barHeight - 50;

    // Bar
    fill(barColors[i]);
    noStroke();
    rect(x, y, barWidth, barHeight);

    // Genre label
    fill(0);
    textSize(12);
    textAlign(CENTER);
    text(genres[i], x + barWidth / 2, height - 30);

    // Value label
    textSize(14);
    text(nf(values[i], 1, 1) + "%", x + barWidth / 2, y - 15);
  }
}
