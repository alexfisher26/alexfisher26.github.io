

let clock1; 
let font;
let bird1; 
let bird2; 
let bird3; 

function preload() {
  clock1 = loadImage('clock1.png');
  font = loadFont('Anton.ttf');
  bird2 = loadImage('bird2.png');
  bird1 = loadImage('bird1.png');
  bird3 = loadImage('bird3.png');
  

}

function setup() {
  angleMode(DEGREES);
  textAlign(CENTER, CENTER); 
  textFont(font);
  strokeJoin(ROUND);
}



function draw() {
  createCanvas(1500, 980);
  
  image(clock1, 0, 0);
  translate(width/2 + 2, height/2 + 2);
  s = map(second(), 0, 60, 0, 360);
  m = map (minute(), 0, 60, 0, 360);
  h = map (hour(), 0, 24, 0, 720);
  push();
    rotate(s);
    image(bird3, -65, -350);
  pop();
  push();
    rotate(m);
    image(bird1, -170, -384);
  pop();
  push();
  rotate (h);
  image(bird2, -150,-420);
  pop();
  
 var sec = second();
var min = minute();
var hrs = hour();
var mer = hrs < 12 ? "AM" : "PM";
fill(116, 89, 200);

var normalhrs;
if (hrs > 12) {
  normalhrs = hrs - 12;
} else {
  normalhrs = hrs;
}

normalhrs = formatting(normalhrs);
min = formatting(min);
sec = formatting(sec);

textSize(48);
text(normalhrs + ":" + min + ":" + sec + " " + mer, 0, -35);

function formatting(num) {
  return int(num) < 10 ? "0" + num : num;
}
  
}
