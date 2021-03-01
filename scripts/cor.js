const MES_VIDA = 1;//Punt de vida que es suma quan el Pac-man es menja el cor.

class Cor extends GameObject {

  constructor(coordX,coordY) {
    super(coordX,coordY);
    this.vides = MES_VIDA;
  }
  show(){
      image(corImg, this.coordX, this.coordY); //Per mostrar-la, hem de posar el menjar al preload.
    }

  showInstanceMode(p, img){
          p.image(img, this.coordX, this.coordY); //Per mostrar-la, hem de posar el food al preload.
        }

  }
