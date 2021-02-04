
var myGame = new Game(); //Nou objecte Game
var myPacman = new Pacman(); //creo un pacman

const s = (p) => {

  var arrayrocks = [];
  var arrayfood = [];
  var arrayghost = [];
  var arrayfruit = [];
  var ghostImg;
  var foodImg;
  //var fruitImg;
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
    foodImg = p.loadImage("images/food.png");
    ghostImg = p.loadImage("images/ghost.png");
    //fruitImg = p.loadImage("images/grape.png");

  };
}catch(error){
  console.log("No s'ha pogut carregar correctament les imatges.");
}

try{
  p.setup = function() {
    p.createCanvas(myGame.columnsGame * myGame.sizeImage, myGame.rowsGame * myGame.sizeImage);

    pacman = new Pacman(10 * myGame.sizeImage, 11 * myGame.sizeImage);

    for (let i = 0; i < myGame.rowsGame; i++)
      for (let j = 0; j < myGame.columnsGame; j++) {
        if (myGame.mapa[i][j] === 0) {
          arrayrocks.push(new Rock(j * myGame.sizeImage, i * myGame.sizeImage));
        }
      }

      for (let i = 0; i < myGame.rowsGame; i++)
        for (let j = 0; j < myGame.columnsGame; j++) {
          if (myGame.mapa[i][j] === 2) {
            arrayfood.push(new Food(j * myGame.sizeImage, i * myGame.sizeImage));
          }
        }

        for (let i = 0; i < myGame.rowsGame; i++)
          for (let j = 0; j < myGame.columnsGame; j++) {
            if (myGame.mapa[i][j] === 3) {
              arrayghost.push(new Ghost(j * myGame.sizeImage, i * myGame.sizeImage));
            }
          }

          for (let i = 0; i < myGame.rowsGame; i++)
            for (let j = 0; j < myGame.columnsGame; j++) {
              if (myGame.mapa[i][j] === 4) {
                //arrayfruit.push(new Fruit(j * myGame.sizeImage, i * myGame.sizeImage));
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

    for (let i = 0; i < arrayfood.length; i++){
      //console.log("Fa sortir menjar." + i);
      arrayfood[i].showInstanceMode(p, foodImg);
    }

    for (let i = 0; i < arrayghost.length; i++){
      //console.log("Fa sortir fantasma." + i);
      arrayghost[i].showInstanceMode(p, ghostImg);
    }

    for (let i = 0; i < arrayfruit.length; i++){
      //console.log("Fa sortir fruita." + i);
      arrayfruit[i].showInstanceMode(p, fruitImg);
    }

//Evitar xocar amb les roques
    for (let i = 0; i < arrayrocks.length; i++){
        pacman.testCollideRock(p,arrayrocks[i]);
    }

//Control de xoc amb el menjar i la seva desaparició
    for (let i = 0; i < arrayfood.length; i++){
      if ( pacman.testCollideFood(p,arrayfood[i])){
        //arrayfood = arrayfood.filter(item => item !== arrayfood[i]);
        pacman.score = pacman.score + arrayfood[i].score;
        arrayfood.splice(i,1);
      }else{
        console.log("No xoco, menjar");
      }
      
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

  } //function draw

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
      console.log("muevo derecha");
      pacman.moveRight(imatgetamany, amplejoc);
    }

  };
};

let myp5 = new p5(s, 'myContainer');
