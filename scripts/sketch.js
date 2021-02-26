var myGame = new Game(); //Nou objecte Game
var myPacman = new Pacman(); //creo un pacman
//var myUser = new User(); //usuari localstorage
const s = (p) => {

  var arrayrocks = [];
  var arrayfood = [];
  var arrayghost = [];
  var arraycor= [];
  var ghostImg;
  var foodImg;
  //var fruitImg;
  var corImg;
  var pacman;
  var rockImg;
  var pacDreta;
  var pacAvall;
  var pacEsquerra;
  var pacAmunt;
  var timer = 10;
  const HEIGHT_TEXT = 30;
  var songStart;
  var songFinale;

  try {
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
      corImg = p.loadImage("images/cor.png");
      songStart = p.loadSound('sounds/pacman_beginning.mp3');
      songFinale = p.loadSound('sounds/pacman_death.mp3');

    };
  } catch (error) {
    console.log("No s'ha pogut carregar correctament les imatges.");
  }

  try {
    p.setup = function() {
      p.createCanvas(myGame.columnsGame * myGame.sizeImage, myGame.rowsGame * myGame.sizeImage+ HEIGHT_TEXT);
      songStart.play();
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
              arraycor.push(new Cor(j * myGame.sizeImage, i * myGame.sizeImage));
            }
          }

    }; //acabo setup
  } catch (error) {
    console.log("No s'ha pogut iniciar correctament el joc.");
  }
  p.draw = function() {
    p.background(51);

    for (let i = 0; i < arrayrocks.length; i++) {
      //console.log("Faig sortir una roca:" + i);
      arrayrocks[i].showInstanceMode(p, rockImg);
    }

    for (let i = 0; i < arrayfood.length; i++) {
      //console.log("Fa sortir menjar." + i);
      arrayfood[i].showInstanceMode(p, foodImg);
    }

    for (let i = 0; i < arraycor.length; i++) {

      arraycor[i].showInstanceMode(p, corImg);
    }

    for (let i = 0; i < arrayghost.length; i++) {
      //console.log("Fa sortir fantasma." + i);
      arrayghost[i].showInstanceMode(p, ghostImg);
    }

    //Evitar xocar amb les roques
    for (let i = 0; i < arrayrocks.length; i++) {
      pacman.testCollideRock(p, arrayrocks[i]);
    }

    //Control de xoc amb el menjar i la seva desaparició
    for (let i = 0; i < arrayfood.length; i++) {
      if (pacman.testCollideFood(p, arrayfood[i])) {
        //arrayfood = arrayfood.filter(item => item !== arrayfood[i]);
        pacman.score = pacman.score + arrayfood[i].score;
        arrayfood.splice(i, 1);
      } else {
        console.log("No xoco, menjar");
      }


      for (let i = 0; i < arraycor.length; i++) {
          if(pacman.testCollideCor(p, arraycor[i])){
            pacman.vides = pacman.vides + arraycor[i].vides;
            arraycor.slice(i, 1);
          } else {
            console.log("No xoco amb el cor");
          }
      }

    }

    if (pacman.direction === 1) {
      pacman.showInstanceMode(p, pacDreta);
    } else if (pacman.direction === 2) {
      pacman.showInstanceMode(p, pacEsquerra);
    } else if (pacman.direction === 3) {
      pacman.showInstanceMode(p, pacAmunt);
    } else if (pacman.direction === 4) {
      pacman.showInstanceMode(p, pacAvall);
    }

    p.fill(255);
    p.textSize(20);
    p.text(timer+"s", 470, 660);

      // while (timer > 0) {  // this doesn't work because it's all happening at the same time
      //   timer --;
      // }

      // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
      // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
      // this can be used to determine if the number on the left is divisible by the number on the right

      if (p.frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;

      }

      if (timer === 0) {
        p.text("GAME OVER", 500,660);
        songFinale.play();

      } //acacbo temporitzador


      p.text(pacman.score+" punts", 320, 660);

      p.text(pacman.vides+" vides", 100, 660);


  } //function draw

  p.keyPressed = function() {

  //  p.noloop();

    if(timer===0){

    }else{

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
}//if timer===0
//    p.loop();

    };
  };

let myp5 = new p5(s, 'myContainer');
