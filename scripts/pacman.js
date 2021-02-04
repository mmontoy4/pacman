const SPEED_PACMAN = 32; // Size Image

class Pacman extends GameObject {

  constructor(coordX,coordY) {
    super(coordX,coordY);
    this.vides = 3;
    this.speed = SPEED_PACMAN;
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
     if(this.coordY - this.speed >= 0) {
      this.coordY = this.coordY - this.speed;

      this.direction = 3;
     }
  }

  moveDown(imatgetamany,amplejoc){
    if(this.coordY + imatgetamany < amplejoc){
    this.coordY = this.coordY + this.speed;
    this.direction = 4;
    }
  }

  moveRight(imatgetamany,amplejoc){
    if(this.coordX + imatgetamany < amplejoc){
      this.coordX = this.coordX + this.speed;
      this.direction = 1;
    }
  }

  moveLeft(){
    if(this.coordX - this.speed >= 0){
      this.coordX = this.coordX - this.speed;
      this.direction = 2;
    }
  }

  testCollideRock(p,roca){

    let distancia = p.dist ( this.coordX, this.coordY, roca.coordX, roca.coordY);
    if ( distancia < 10) {
      //xoquem
              if (this.direction === 1){
              this.coordX = this.coordX - this.speed;
            }
            else if (this.direction === 2){
              this.coordX = this.coordX + this.speed;
            }
            else if (this.direction === 3){
            this.coordY = this.coordY + this.speed;
            }
            else if (this.direction === 4){
            this.coordY = this.coordY - this.speed;
          }
    else {
      //No xoquem
      console.log("no xoquem");
    }
}
}//Fi testColliderRock

} //Fi classe Pacman
