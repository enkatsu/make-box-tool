
function setup() {
  createCanvas(600, 600, SVG);
  background(255);

  const n = 5;
  const squareSize = width / (4 + 3 * (n - 1)) * 2;
  const interval = squareSize / 2;

  for (let y = interval; y < height; y += interval + squareSize) {
    for (let x = interval; x < width; x += interval + squareSize) {
      square(x, y, squareSize);
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
