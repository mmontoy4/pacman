class Pacman extends GameObject {

  constructor(coordX,coordY) {
    super(coordX,coordY);
    this.vides = 3;
    this.speed = 1;
    this.direction = 1;
  }
  show(img){
      image(img, this.coordX, this.coordY); //Per mostrar-la, hem de posar el pacman al preload.
    }

    showInstanceMode(p,img){
        p.image(img, this.coordX, this.coordY); //Per mostrar-la, hem de posar el pacman al preload.
      }

  /*
  1 - Dreta
  2 - Esquerra
  3 - Amunt
  4 - Avall
  */
  moveUpper(){
     if(this.coordY - myGame.sizeImage >= 0) {
      this.coordY = this.coordY - myGame.sizeImage;
      this.direction = 3;
     }
  }

  moveDown(imatgetamany,amplejoc){
    if(this.coordY + imatgetamany < amplejoc){
    this.coordY = this.coordY + myGame.sizeImage;
    this.direction = 4;
    }
  }

  moveRight(imatgetamany,amplejoc){
    if(this.coordX + imatgetamany < amplejoc){
      this.coordX = this.coordX + myGame.sizeImage;
      this.direction = 1;
    }
  }

  moveLeft(){
    if(this.coordX - myGame.sizeImage >= 0){
      this.coordX = this.coordX - myGame.sizeImage;
      this.direction = 2;
    }
  }

  }
