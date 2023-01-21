
function setup() {
  createCanvas(600, 600, SVG);
  background(255);

  const n = 5;
  const rectSize = width / (2 + 1.5 * n);
  const interval = rectSize / 2;
  rectMode(CENTER);

  for (let y = interval + rectSize / 2; y < height; y += interval + rectSize) {
    for (let x = interval + rectSize / 2; x < width; x += interval + rectSize) {
      square(x, y, rectSize);
      // circle(x, y, rectSize);
    }
  }
}

function draw() {
}

function keyPressed() {
  if (key === 's') {
    save('grid.svg');
  }
}
