var angle = 0;

var slider;

function setup() {
  createCanvas (1400, 800); //1400, 800
  slider = createSlider(0, TWO_PI, PI / 4, 0.001);
}

function draw() {
  background (0);
  angle = slider.value();
  stroke("indigo");
  translate(700, 400); //700
  branch(1);
  circle(5) //250
}

function branch(len) {
  fill("blue");
  triangle(0, 3, 3, 0, 1, -len); //third value = 7
  //line(0, 0, 1, -len)
  translate(0, -len);
  if (len < 300) {
    push();
    rotate(angle+6);
    branch(len * 2);
    pop();
    push();
    rotate(-angle+6);
    branch(len * 2);
    pop();
  }
}

function circle(len) {
  fill("red");
  triangle(0, 3, 3, 0, 1, -len);
  translate(0, -len);
  if (len < 100) {
    push();
    rotate(angle+8);
    circle(len*1.5);
    pop();
    push();
    rotate(-angle+8);
    circle(len*1.5);
    pop();
  }

}
