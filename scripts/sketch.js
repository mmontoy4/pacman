var myGame = new Game(); //Nou objecte Game

var arrayrocks = [];

var rock = new Rock();

function preload() {
  // put drawing code here
  var rockImg = loadImage("images/roca.bmp");
}

function setup() {
  createCanvas(COLUMNS * IMAGE_SIZE, ROWS * IMAGE_SIZE + HEIGHT_TEXT);

  myGame = new Game();

  for(var i = 0; i < myGame.rowsGame; i++)
  for (var j = 0; j < myGame.columnsGame; j++) {
    if (myGame.mapa[i][j] == 0) {
    }
  }

  function draw() {
    for (var i = 0; i < arrayrocks.length; i++) {
      console.log("Faig sortir una roca:" + i);
      arrayrocks[i].show();
    }
