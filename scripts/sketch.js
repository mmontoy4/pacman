var myGame = new Game(); //Nou objecte Game

var arrayrocks = [];

var rock = new Rock();

function preload() {
  // put drawing code here
  var rockImg = loadImage("images/roca.bmp");
}

function setup() {

  createCanvas(myGame.sizeImage*myGame.rowsGame, myGame.sizeImage*myGame.columnsGame);
  arrayrocks.push(new Rock(32,32));
}

function draw() {

  arrayrocks[].show();
}
