var myGame = new Game(); //Nou objecte Game

var arrayrocks = [];
var pacman;
var rockImg;
var pacDreta;
var pacAvall;
var pacEsquerra;
var pacAmunt;


var rock = new Rock();


function preload() {
  // put drawing code here
  rockImg = loadImage("images/roca.bmp");
  pacDreta = loadImage("images/pac1.png");
  pacAvall = loadImage("images/pac2.png");
  pacEsquerra = loadImage("images/pac3.png");
  pacAmunt = loadImage("images/pac4.png");

};

function setup() {
  createCanvas(myGame.columnsGame * myGame.sizeImage, myGame.rowsGame * myGame.sizeImage);

  pacman = new Pacman(10*myGame.sizeImage,10*myGame.sizeImage);

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
    
    if(pacman.direction === 1){
      show(pacDreta);
    }else if(pacman.direction === 2){
      show(pacEsquerra);
    }else if(pacman.direction === 3){
      show(pacAmunt);
    }else{
      show(pacAvall);
    }

  }; //function draw
