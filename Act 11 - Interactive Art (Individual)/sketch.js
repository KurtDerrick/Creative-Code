let enemies = [];
let particles = [];
let gameOver = false;
let numEnemies = 10;
let stars = [];
let tryAgainButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetGame();

  // Try Again button (hidden initially)
  tryAgainButton = createButton("Try Again");
  tryAgainButton.position(width / 2 - 50, height / 2 + 50);
  tryAgainButton.mousePressed(resetGame);
  tryAgainButton.hide();

  textAlign(CENTER, CENTER);
  textSize(40);
}

function draw() {
  background(10);
  drawStars();

  if (gameOver) {
    fill(255, 0, 0);
    text("Game Over!", width / 2, height / 2);
    tryAgainButton.show();
    noLoop();
    return;
  }

  // Add new particle at mouse location
  particles.push(new Particle(mouseX, mouseY));

  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }

  // Draw player
  fill(0, 255, 0);
  ellipse(mouseX, mouseY, 30, 30);

  // Draw and update enemies
  for (let e of enemies) {
    e.update();
    e.display();
    if (e.hits(mouseX, mouseY)) {
      gameOver = true;
    }
  }
}

function resetGame() {
  gameOver = false;
  enemies = [];
  particles = [];
  stars = [];

  for (let i = 0; i < numEnemies; i++) {
    enemies.push(new Enemy());
  }

  for (let i = 0; i < 200; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      speed: random(0.5, 2),
      size: random(1, 3)
    });
  }

  if (tryAgainButton) tryAgainButton.hide();
  loop(); // resume draw loop
}

class Enemy {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.size = random(20, 50);
    this.speed = random(2, 5);
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-100, 0);
      this.x = random(width);
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  hits(px, py) {
    let d = dist(this.x, this.y, px, py);
    return d < this.size / 2 + 15;
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255;
    this.size = random(5, 10);
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  display() {
    noStroke();
    fill(0, 255, 100, this.alpha);
    ellipse(this.x, this.y, this.size);
  }

  isDead() {
    return this.alpha <= 0;
  }
}

function drawStars() {
  fill(255);
  noStroke();
  for (let s of stars) {
    ellipse(s.x, s.y, s.size);
    s.y += s.speed;
    if (s.y > height) {
      s.y = 0;
      s.x = random(width);
    }
  }
}
