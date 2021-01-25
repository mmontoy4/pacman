
var myGame = new Game(); //Nou objecte Game

const s = (p) => {

  var arrayrocks = [];
  var pacman;
  var rockImg;
  var pacDreta;
  var pacAvall;
  var pacEsquerra;
  var pacAmunt;

try{
  p.preload = function() {
    // put drawing code here
    rockImg = p.loadImage("images/roca.bmp");
    pacDreta = p.loadImage("images/pac1.png");
    pacAvall = p.loadImage("images/pac2.png");
    pacEsquerra = p.loadImage("images/pac3.png");
    pacAmunt = p.loadImage("images/pac4.png");

  };
}catch(error){
  console.log("No s'ha pogut carregar correctament les imatges.");
}

try{
  p.setup = function() {
    p.createCanvas(myGame.columnsGame * myGame.sizeImage, myGame.rowsGame * myGame.sizeImage);

    pacman = new Pacman(10 * myGame.sizeImage, 10 * myGame.sizeImage);

    for (let i = 0; i < myGame.rowsGame; i++)
      for (let j = 0; j < myGame.columnsGame; j++) {
        if (myGame.mapa[i][j] === 0) {
          arrayrocks.push(new Rock(j * myGame.sizeImage, i * myGame.sizeImage));
        }
      }

  }; //acabo setup
}catch(error){
  console.log("No s'ha pogut iniciar correctament el joc.");
}
  p.draw = function() {
    p.background(51);
    for (let i = 0; i < arrayrocks.length; i++) {
      //console.log("Faig sortir una roca:" + i);
      arrayrocks[i].showInstanceMode(p, rockImg);
    }

    if (pacman.direction === 1) {
      pacman.showInstanceMode(p,pacDreta);
    } else if (pacman.direction === 2) {
      pacman.showInstanceMode(p,pacEsquerra);
    } else if (pacman.direction === 3) {
      pacman.showInstanceMode(p,pacAmunt);
    } else if (pacman.direction === 4) {
      pacman.showInstanceMode(p,pacAvall);
    }

  }; //function draw

  p.keyPressed = function() {

      let amplejoc = myGame.columnsGame * myGame.sizeImage;
      let imatgetamany = myGame.sizeImage;

    if (p.keyCode === p.UP_ARROW) {
      pacman.moveUpper();
    } else if (p.keyCode === p.DOWN_ARROW) {
      pacman.moveDown(imatgetamany, amplejoc);
    }
    if (p.keyCode === p.LEFT_ARROW) {
      pacman.moveLeft();
    } else if (p.keyCode === p.RIGHT_ARROW) {
      console.log("muvo derecha");
      pacman.moveRight(imatgetamany, amplejoc);
    }

  };
};

let myp5 = new p5(s, 'myContainer');
