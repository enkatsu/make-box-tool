
function setup() {
  createCanvas(600, 600, SVG);
}

function draw() {
  ellipse(mouseX, mouseY, 50, 50);
}

function keyPressed() {
  if (key === 's') {
    save('grid.svg');
  }
}
