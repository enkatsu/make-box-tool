let engine;
const bodies = [];
let Engine, Runner, Bodies, Composite;
let displayBody = false;

function setup() {
  createCanvas(600, 600, SVG);
  rectMode(CENTER);

  Engine = Matter.Engine;
  Runner = Matter.Runner;
  Bodies = Matter.Bodies;
  Composite = Matter.Composite;

  engine = Engine.create();
  engine.world.gravity.y = 0;

  for (let i = 0; i < 60; i++) {
    const circle = Bodies.circle(
      width / 2 + random(-100, 100),
      height / 2 + random(-100, 100),
      random(20, 50),
      { visible: true, angle: random(PI * 2) }
    );
    bodies.push(circle);
  }

  bodies.push(Bodies.rectangle(width / 2, 10, width - 10, 10, { isStatic: true, visible: false }));
  bodies.push(Bodies.rectangle(width / 2, height - 10, width - 10, 10, { isStatic: true, visible: false }));
  bodies.push(Bodies.rectangle(width - 10, height / 2, 10, height - 10, { isStatic: true, visible: false }));
  bodies.push(Bodies.rectangle(10, height / 2, 10, height - 10, { isStatic: true, visible: false }));

  Composite.add(engine.world, bodies);
  const runner = Runner.create();
  Runner.run(runner, engine);
}

function draw() {
  background(255);

  bodies.forEach(body => {
    if (displayBody) {
      noFill();
      stroke(255, 50, 50);
      beginShape();
      body.vertices.forEach(v => {
        vertex(v.x, v.y);
      });
      endShape(CLOSE);
    }

    if (!body.visible) {
      return;
    }
    const x = body.position.x;
    const y = body.position.y;
    const circleWidth = body.bounds.max.x - body.bounds.min.x;
    const w = (circleWidth / 2) * Math.sqrt(2);
    push();
    noFill();
    stroke(0);
    translate(x, y);
    rotate(body.angle);
    square(0, 0, w, w / 10);
    // text(body.angle, 0, 0)
    pop();
  });
}

function keyPressed() {
  if (key === ' ') {
    displayBody = !displayBody;
  } else if (key === 's') {
    save('square.svg');
  }
}
