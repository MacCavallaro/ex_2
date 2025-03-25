let x, y;
let lebron;
let gridSize = 40;
let moveSpeed = 8;
let activeKey = null; 
let mode = 0;
let font;
let stars;
let nuke;
let poop;
let poops = [];
let crowd;
let ocean; 
let b;
let cy = 0;

function preload() {
  lebron = loadImage('FACE.png');
  stars = loadImage('stars.webp');
  nuke = loadImage('nuke.gif');
  poop = loadImage('poop.png');
  font = loadFont('future.otf');
  ocean = loadImage('ocean.webp');
  crowd = loadImage('crowd.jpeg');
}

function setup() {
  createCanvas(1000, 500);
  x = 480;
  y = height/2;
  rectMode(CENTER);
  textAlign(CENTER);
  textFont(font);
  b = stars; // Default background
}

function draw() {
  clear();
  background(b);

  if (mode == 0){
    textFont(font);
    fill(255);
    textSize(20);
    text('PRESS ENTER TO START', width/2, 300);
  }

  if (activeKey) {
    keyChoice(activeKey);
  }
  if (mode == 1){
    image(lebron, x, y, gridSize, gridSize);
    textAlign(CENTER);

    fill(255)
    rect(width/2, 400, 100, 50);
    textSize(10);
    fill(0);
    text('NUKE', width/2, 400); 
      fill('red');
      textSize(60);
      text('PUSH THE BUTTON', width/2, cy);
      cy += .05
    for (let i = 0; i < poops.length; i++) {
      image(poop, poops[i].x, poops[i].y, 50, 50);
    }
    if (mouseIsPressed && mouseX > 450 && mouseX < 550 && mouseY > 375 && mouseY < 425){
      image(nuke, 0, 0, width, height);
      console.log('GAME RESTART')
    }
  }

}

function keyPressed() {
  activeKey = key; 
  if (keyCode === ENTER){
    mode = 1;
    console.log('GAME HAS STARTED');
  }
  if (key === 'p') {
    poops.push({ x: x, y: y });
  }
  if (key === '1'){
    b = stars;
  } else if (key === '2'){
    b = ocean;
  } else if (key === '3'){
    b = crowd;
  }


  
}

function keyReleased() {
  activeKey = null;
}

function keyChoice(currentKey) {
  switch (currentKey) {
    case 'a':
      x -= moveSpeed;
      console.log('Character moving left');
      break;
    case 'd':
      x += moveSpeed;
      console.log('Character moving right');
      break;
    case 'w':
      y -= moveSpeed;
      console.log('Character is moving up');
      break;
    case 's':
      y += moveSpeed;
      console.log('Character is moving down');
      break;
  }
}
