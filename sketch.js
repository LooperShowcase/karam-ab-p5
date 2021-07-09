function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(214, 193, 150);
  let seconds = second();
  let minutes = minute();
  let hours = hour();

  stroke(255);
  strokeWeight(8);

  translate(width / 2, height / 2);
  rotate(-90);
  ellipse(0, 0, 300);
  //sec
  fill(255);
  ellipse(0, 0, 300, 300);
  fill("black");
  noFill();
  stroke(0, 7, 20);
  let secArc = map(seconds, 0, 60, 0, 360);
  //arc(0, 0, 300, 300, 0, secArc);
  //minutes
  stroke(0, 8, 56);
  let minArc = map(minutes, 0, 60, 0, 360);
  //arc(0, 0, 250, 250, 0, minArc);
  //hours
  stroke(2, 57, 94);
  let hArc = map(hours % 12, 0, 12, 0, 360);
  // arc(0, 0, 200, 200, 0, hArc);
  push(stroke("black"));
  //sec
  rotate(secArc);
  stroke(43, 18, 3);
  line(0, 0, 110, 0);
  pop();
  //min
  push();
  rotate(minArc);
  stroke(28, 18, 6);
  line(0, 0, 90, 0);
  pop();
  //hour
  push();
  rotate(hArc);
  stroke(15, 10, 3);
  line(0, 0, 70, 0);
  pop();
  rotate(90);
  strokeWeight(1);
  //12
  text(12, -11, -115);
  //6
  text(6, -14, 145);
  //3
  text(3, 125, 0.5);
  //9
  textSize(32);
  text(9, -143, 0);
}
