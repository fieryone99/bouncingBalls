let balls = [];
let gravity;
let ballNo = 75;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity  = createVector(0, 0.07);
  for (let i = 0; i < ballNo; i++) {
    balls.push(new Ball(random(width), random(height), i));
    balls[i].index = i;
  }
}

function draw() {
  background(0);
  for (ball of balls) {
    ball.show();
    ball.update();
  }
}

function dist( v1, v2) {
    return dist(v1.x, v1.y, v2.x, v2.y) 
}
