var myGame = new Game(); //Nou objecte Game

var arrayrocks = [];
var rockImg;

var rock = new Rock();

function preload() {
  // put drawing code here
  rockImg = loadImage("images/roca.bmp");
};

function setup() {
  createCanvas(myGame.columnsGame * myGame.sizeImage, myGame.rowsGame * myGame.sizeImage);


  for(let i = 0; i < myGame.rowsGame; i++)
      for ( let j = 0; j < myGame.columnsGame; j++) {
          if (myGame.mapa[i][j] === 0) {
            arrayrocks.push(new Rock(j*myGame.sizeImage, i*myGame.sizeImage));
      }
  }
}; //acabo setup

  function draw() {
    for (let i = 0; i < arrayrocks.length; i++) {
      console.log("Faig sortir una roca:" + i);
      arrayrocks[i].show();
    }
  }; //function draw
