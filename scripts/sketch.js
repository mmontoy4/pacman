
var myGame = new Game(); //Nou objecte Game



function preload() {
  // put drawing code here
}

function setup() {
  createCanvas(myGame.sizeImage*myGame.rowsGame, myGame.sizeImage*myGame.columnsGame);
}

function draw() {

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
