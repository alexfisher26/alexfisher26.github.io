let bubble; 
let wand;

function preload() {
  bubble = loadImage('bubble.png');
}

function setup() {
  imageMode(CENTER);
   createCanvas(windowWidth, windowHeight);
  // background(247, 241, 129);
  // frameRate(.5);
  wand = select('#wand');
  wand.style('left', '0px');
  wand.style('top', '0px');
  fill(255); 
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Move the wand around and click to make bubbles!", width / 2, height / 2);
  bubblecounter = 0;
}

function draw() {
  wand.style('left', mouseX + 'px');
  wand.style('top', mouseY + 'px');
  if (second() % 2 === 0 && frameCount % 20 === 0) {
    x = random(100, 255);
    bubbler(x);
    bubblecounter = bubblecounter + 1;
  }
  if (bubblecounter === 50) {
    let body = select('body');
    body.style('background-color', 'deeppink');
  }
  if (bubblecounter === 100){
    let body = select ('body');
    body.style('background-color','47, 241, 129' );
  }
  if (bubblecounter === 200){
   noLoop();
  }
}

function mouseClicked() {
  x = random(100, 255);
  bubbler(x);
  bubblecounter = bubblecounter + 1;
}

function bubbler(bubblesize) {
  image(bubble, mouseX, mouseY, bubblesize, bubblesize);
}