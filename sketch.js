let beeX, beeY; // coordinates of the bee
let beeSpeedX, beeSpeedY; // speed of the bee

function setup() {
  createCanvas(400, 400); // create a canvas with dimensions of 400x400 pixels
  beeX = width / 2; // set the initial position of the bee to the center of the canvas
  beeY = height / 2;
  beeSpeedX = random(-2, 2); // set the initial speed of the bee to a random value
  beeSpeedY = random(-2, 2);
}

function draw() {
  background(220); // set the background color to gray

  // draw the stem
  stroke(50, 200, 50); // set the color of the line to green
  strokeWeight(10); // set the thickness of the line to 10 pixels
  line(width / 2, height, width / 2, height - 100); // draw a line (stem)

  // draw the petals
  noStroke(); // disable drawing outlines
  fill(255, 50, 50); // set the fill color to red
  ellipse(width / 2 - 50, height - 120, 60, 60); // draw the left petal
  ellipse(width / 2 + 50, height - 120, 60, 60); // draw the right petal
  ellipse(width / 2, height - 160, 60, 60); // draw the top petal
  ellipse(width / 2, height - 100, 60, 60); // draw the bottom petal

  // draw the center of the flower
  fill(255, 200, 50); // set the fill color to yellow
  ellipse(width / 2, height - 120, 40, 40); // draw a circular center

  // update the position of the bee
  beeX += beeSpeedX;
  beeY += beeSpeedY;
  
  // check if the bee is off the screen and make it bounce back
  if (beeX < 0 || beeX > width) {
    beeSpeedX = -beeSpeedX;
  }
  if (beeY < 0 || beeY > height) {
    beeSpeedY = -beeSpeedY;
  }
  
  // draw the bee
  fill(255, 255, 0); // set the fill color to yellow
  ellipse(beeX, beeY, 20, 20); // draw a circular bee
}