var myGame = new Game(); //Nou objecte Game

let arrayrocks = [];
let pacman;
let rockImg;
let pacDreta;
let pacAvall;
let pacEsquerra;
let pacAmunt;

function preload() {
  // put drawing code here
  rockImg = loadImage("images/roca.bmp");
  pacDreta = loadImage("images/pac1.png");
  pacAvall = loadImage("images/pac2.png");
  pacEsquerra = loadImage("images/pac3.png");
  pacAmunt = loadImage("images/pac4.png");

}

function setup() {
  createCanvas(myGame.columnsGame * myGame.sizeImage, myGame.rowsGame * myGame.sizeImage);

  pacman = new Pacman(10*myGame.sizeImage,10*myGame.sizeImage);

  for(let i = 0; i < myGame.rowsGame; i++)
      for ( let j = 0; j < myGame.columnsGame; j++) {
          if (myGame.mapa[i][j] === 0) {
            arrayrocks.push(new Rock(j*myGame.sizeImage, i*myGame.sizeImage));
      }
  }

} //acabo setup

  function draw() {
    background(51);
    for (let i = 0; i < arrayrocks.length; i++) {
      console.log("Faig sortir una roca:" + i);
      arrayrocks[i].show();
    }

    if(pacman.direction === 1){
      pacman.show(pacDreta);
    }else if(pacman.direction === 2){
      pacman.show(pacEsquerra);
    }else if(pacman.direction === 3){
      pacman.show(pacAmunt);
    }else if(pacman.direction === 4){
      pacman.show(pacAvall);
    }

  } //function draw

function keyPressed() {
  if (keyCode === UP_ARROW) {
    pacman.moveUpper()
  } else if (keyCode === DOWN_ARROW) {
    pacman.moveDown();
  }
  if (keyCode === LEFT_ARROW) {
    pacman.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    pacman.moveRight();
  }

}
