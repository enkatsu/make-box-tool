
function setup() {
  createCanvas(600, 600, SVG);
  background(255);

  const n = 5;
  const rectSize = width / (2 + 1.5 * n);
  const interval = rectSize / 2;
  // rectMode(CENTER);

  // for (let y = interval + rectSize / 2; y < height; y += interval + rectSize) {
  //   for (let x = interval + rectSize / 2; x < width; x += interval + rectSize) {
  //     square(x, y, rectSize);
  //     // circle(x, y, rectSize);
  //   }
  // }

  const r = 50;

  // noFill();
  // hexagon(r, r, r);

  // const x = 2 * r - (r / 2) + r;
  // const y = (Math.sqrt(3) * r) / 2 + r;
  // hexagon(x, y, r);
  // circle(x, y, 5);

  // const x2 = 4 * r - (r / 2) * 2 + r;
  // const y2 = r;
  // hexagon(x2, y2, r);
  // circle(x2, y2, 5);

  // const x3 = r;
  // const y3 = (Math.sqrt(3) * r) / 2 * 2 + r;
  // hexagon(x3, y3, r);
  // circle(x3, y3, 5);

  // const x4 = 2 * r - (r / 2) + r;
  // const y4 = (Math.sqrt(3) * r) / 2 * 3 + r;
  // hexagon(x4, y4, r);
  // circle(x4, y4, 5);

  noFill();

  translate(width / 2, height / 2);
  hexagon(hexagonGridPosition(0, 0, 50).x, hexagonGridPosition(0, 0, 50).y, 50);
  // hexagon(hexagonGridPosition(1, 0, 50).x, hexagonGridPosition(1, 0, 50).y, 50);
  // hexagon(hexagonGridPosition(2, 0, 50).x, hexagonGridPosition(2, 0, 50).y, 50);

  hexagon(hexagonGridPosition(0, 1, 50).x, hexagonGridPosition(2, 0, 50).y, 50);
  // hexagon(hexagonGridPosition(0, 2, 50).x, hexagonGridPosition(2, 0, 50).y, 50);
  // hexagon(hexagonGridPosition(0, 3, 50).x, hexagonGridPosition(2, 0, 50).y, 50);
}

function draw() {
}

function hexagonGridPosition(x, y, r) {
  const w = (Math.sqrt(3) * r) / 2;
  const h = w * sin(degrees(60));
  return {
    x: h * x * 2 + (y % 2 == 0 ? 0 : w * cos(degrees(60))),
    y: w * sin(degrees(60)) * y,
  }
}

function hexagon(x, y, r) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    vertex(
      x + cos(TWO_PI / 6 * i) * r,
      y + sin(TWO_PI / 6 * i) * r,
    );
  }
  endShape(CLOSE);
}

function keyPressed() {
  if (key === 's') {
    save('grid.svg');
  }
}
