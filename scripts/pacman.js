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

  /*
  1 - Dreta
  2 - Esquerra
  3 - Amunt
  4 - Avall
  */
  showUpper(){
    this.coordY = this.coordY - myGame.SIZE_IMAGE;
    this.direction = 3;
  }

  showDown(){
    this.coordY = this.coordY + myGame.SIZE_IMAGE;
    this.direction = 4;
  }

  showRight(){
    this.coordX = this.coordX - myGame.SIZE_IMAGE;
    this.direction = 1;
  }

  showLeft(){
    this.coordX = this.coordX + myGame.SIZE_IMAGE;
    this.direction = 2;
  }

  }
