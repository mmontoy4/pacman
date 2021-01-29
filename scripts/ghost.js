class Ghost extends GameObject {

  constructor(coordX,coordY) {
    super(coordX,coordY);
  }
  show(){
      image(ghostImg, this.coordX, this.coordY); //Per mostrar-la, hem de posar el menjar al preload.
    }

  showInstanceMode(p, img){
          p.image(img, this.coordX, this.coordY); //Per mostrar-la, hem de posar el food al preload.
        }

  }
